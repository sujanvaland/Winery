/* event Reducer
 * handles filters states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
};

export const eventReducer = createReducer(initialState, {

    [types.GETUPCOMINGEVENTS_RESPONSE](state, action) {
        return {
            ...state,
            upcomingevents: action.response
        };
    },

    [types.GETUPCOMINGEVENTSFAILED_RESPONSE](state) {
        return {
            ...state,
            upcomingevents: []
        };
    },

    [types.GETPASTEVENTS_RESPONSE](state, action) {
        return {
            ...state,
            pastevents: action.response
        };
    },

    [types.GETPASTEVENTSFAILED_RESPONSE](state) {
        return {
            ...state,
            pastevents: []
        };
    },

});