// export action creators
import * as loginActions from './loginActions';
import * as navigationActions from './navigationActions';
import * as signupActions from './signupActions';
import * as forgotPasswordActions from './forgotPasswordActions';
import * as verifyOtpActions from './verifyOtpActions';
import * as accountActions from './accountActions';
import * as eventActions from './eventActions';

export const ActionCreators = Object.assign(
    {},
    loginActions,
    navigationActions,
    signupActions,  
    forgotPasswordActions,
    verifyOtpActions,
    accountActions,
    eventActions
);
