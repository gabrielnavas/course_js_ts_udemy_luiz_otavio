import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import { get } from 'lodash';
import * as types from '../types';
import { toast } from 'react-toastify';
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

export default all([
    takeLatest(types.LOGIN_REQUEST, loginRequest),
    takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
])
