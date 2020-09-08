
const initialState = {
    botaoClicado: false,
}


export default function(state = initialState, action) {
    switch (action.type) {
        case 'BOTAO_CLICADO':
            const newState = {...state};
            newState.botaoClicado = !newState.botaoClicado;
            return newState;

        case 'BOTAO_CLICADO2':
            return state;

        default:
            return state;
    }

}