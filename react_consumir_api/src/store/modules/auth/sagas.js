import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import * as actions from './actions';
import * as types from '../types';
import history from '../../../services/history';
import axios from '../../../services/axios';

function* loginRequest({ payload }) {
    try {
        const response = yield call(axios.post, '/tokens', payload);
        yield put(actions.loginSuccess({ ...response.data }));

        toast.success('Você fez login.');

        axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

        history.push(payload.prevPath);
    } catch (e) {
        toast.error('Usuário ou senha inválidos.');
        yield put(actions.loginFailure());
    }
}

function persistRehydrate({ payload }) {
    const token = get(payload, 'auth.token', '');
    if (!token) return;
    axios.defaults.headers.Authorization = `Bearer ${token}`;
}

function* registerRequest({ payload }) {
    let { id, nome, email, senha } = payload;

    console.log('editar?', payload);

    try {
        if (id) {
            const response = yield call(axios.put, '/users/', {
                email,
                nome,
                password: senha || undefined,
            });

            nome = response.data.nome;
            email = response.data.email;
            toast.success('Conta alterada com sucesso.');
            yield put(actions.registerUpdatedSuccess({ nome, email, id }));
        } else {
            yield call(axios.post, '/users/', {
                email,
                nome,
                password: senha,
            });

            toast.success('Conta criada com sucesso.');
            yield put(actions.registerCreatedSuccess());
            history.push('/login');
        }


    } catch (err) {
        const errors = get(err, 'response.data.error', []);
        const status = get(err, 'response.status', 0);

        if(status === 401) {
            toast.info('Você precisa fazer login novamente.');
            yield put(actions.loginFailure());
            return history.push('/login');
        }

        if (errors.length > 0) {
            errors.map(error => toast.error(error));
        } else {
            toast.error('Erro desconhecido ao editar.');
            console.log(err);
        }

        yield put(actions.registerFailure());
    }
}

export default all([
    takeLatest(types.LOGIN_REQUEST, loginRequest),
    takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
    takeLatest(types.REGISTER_REQUEST, registerRequest),
])
