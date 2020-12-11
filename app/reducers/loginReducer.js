/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    isLoggedIn: false,
    ErrorMessage:'',
    id: -1,
    username: '',
    password: ''
};

export const loginReducer = createReducer(initialState, {
    [types.LOGIN_REQUEST](state, action) {
        return {
            ...state,
            username: action.username,
            password: action.password
        };
    },
    [types.LOGIN_LOADING_ENDED](state) {
        return { ...state };
    },
    [types.LOGIN_RESPONSE](state, action) {
        return {
            ...state,
            isLoggedIn:true,
            userId:action.response.userId,
            userName:action.response.userName,
            status:action.response.status,
            expireAt:action.response.expireAt,
            login_token: action.response.jwt
        };
    },
    [types.LOGIN_FAILED](state,action) {
        return {
            ...state,
            ErrorMessage : "Incorrect username or password. Please try again.",
            login_token:null,
            isLoggedIn: false
        };
    }
});
