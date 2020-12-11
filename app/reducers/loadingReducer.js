/**
 * Loading reducer made seperate for easy blacklisting
 * Avoid data persist
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    isLoading: false
};

export const loadingReducer = createReducer(initialState, {
    [types.LOGIN_ENABLE_LOADER](state) {
        return { ...state, isLoading: true };
    },
    [types.LOGIN_DISABLE_LOADER](state) {
        return { ...state, isLoading: false };
    }
});