/* Signup Reducer
 * handles Signup states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
   
};

export const signupReducer = createReducer(initialState, {
    [types.SIGNUP_REQUEST](state, action) {
        return {
            ...state
        };
    },
    [types.LOGIN_LOADING_ENDED](state) {
        return { ...state };
    },
    [types.SIGNUP_RESPONSE](state, action) {
        return {
            state
        };
    },
    [types.SIGNUP_FAILED](state,action) {
        return {
            state
        };
    },
    [types.ACCOUNTVERIFICATION_RESPONSE](state, action) {
        return {
            state
        };
    },
    [types.ACCOUNTVERIFICATION_FAILED](state,action) {
        return {
            state
        };
    }
});
