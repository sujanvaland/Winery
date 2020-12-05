/* 
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as loginReducer from './loginReducer';
import * as accountReducer from './accountReducer';
import * as eventReducer from './eventReducer';
export default Object.assign(loginReducer, loadingReducer, accountReducer, eventReducer);
