import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from '../types';

// simular requisicao
const requisicao = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 600);
});

function* exempleRequest() {
    try {
        yield call(requisicao);
        yield put(actions.clicaBotaoSuccess());
    } catch(err) {
        yield put(actions.clicaBotaoFailure());
    }
}

export default all([
    takeLatest(types.BOTAO_CLICADO_REQUEST, exempleRequest),
])
