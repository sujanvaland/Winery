/* 
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as loginReducer from './loginReducer';
import * as signupReducer from './signupReducer';
import * as forgotPasswordReducer from './forgotPasswordReducer';
import * as verifyOtpReducer from './verifyOtpReducer';
import * as accountReducer from './accountReducer';
import * as eventReducer from './eventReducer';
export default Object.assign(loginReducer, loadingReducer, signupReducer, forgotPasswordReducer, verifyOtpReducer, accountReducer, eventReducer);
