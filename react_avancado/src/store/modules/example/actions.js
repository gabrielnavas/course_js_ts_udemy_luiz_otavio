import * as types from '../types';

export function clicaBotao() {
    return {
        type: types.BOTAO_CLICADO,
        payload: { email: 'bla@asdasd', senha: '123' }
    };
}