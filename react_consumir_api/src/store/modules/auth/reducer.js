import * as types from '../types';


const initialState = {
    isLoggedIn: false,
    token: '',
    user: {},
    isLoading: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_REQUEST: {
            console.log('REDUCER', action);
            return state;
        }

        default:
            return state;
    }

}