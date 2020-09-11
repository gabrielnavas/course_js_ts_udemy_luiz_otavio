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
            const newState = { ...state };
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

            return newState;
        }

        case types.LOGIN_FAILURE: {
            const newState = { ...initialState };
            return newState;
        }


        case types.REGISTER_REQUEST: {
            const newState = { ...state };
            newState.isLoading = true;
            return newState;
        }

        case types.REGISTER_UPDATED_SUCCESS: {
            const { nome, email } = action.payload;

            const newState = { ...state };
            newState.isLoading = false;
            newState.user = { nome, email, id: newState.user.id };

            return newState;
        }

        case types.REGISTER_CREATED_SUCCESS: {
            const newState = { ...state };
            newState.isLoading = false;
            return newState;
        }

        case types.REGISTER_FAILURE: {
            const newState = { ...state };
            newState.isLoading = false;
            return newState;
        }

        default:
            return state;
    }

}