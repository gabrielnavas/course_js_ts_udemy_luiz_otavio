import * as types from '../types';


const initialState = {
    isLoggedIn: false,
    token: '',
    user: {},
    isLoading: false,
}

export default function (state = initialState, action) {

    console.log(action);

    switch (action.type) {
        case types.LOGIN_REQUEST: {
            const newState = {...state};
            newState.isLoading = true;
            return newState;
        }

        case types.LOGIN_SUCCESS: {
            const { token, user } = action.payload;

            const newState = { ...state };
            newState.token = token;
            newState.user = user;
            newState.isLoggedIn = true;
            newState.isLoading = false;

            console.log('REDUCER SUCCESS', newState);
            return newState;
        }

        case types.LOGIN_FAILURE: {
            const newState = { ...initialState };
            return newState;
        }

        default:
            return state;
    }

}