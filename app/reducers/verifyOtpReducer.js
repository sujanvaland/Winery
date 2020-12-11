/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    email:'',
};


export const verifyOtpReducer = createReducer(initialState, {
    [types.VERIFYOTP_RESPONSE](state, action) {
        return {
            state
        };
    },
    [types.VERIFYOTP_FAILED](state,action) {
        return {
            state
        };
    }
});

