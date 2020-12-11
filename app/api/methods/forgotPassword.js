import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function forgotPassword(email) {
    return Api(
        ApiConstants.FORGOTPASSWORD,
        {
          email: email
        },
        'post',
        null
    );
}
