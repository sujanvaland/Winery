import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import VerifyotpView from './VerifyotpView';
import { connect } from 'react-redux';
import * as verifyOtpActions from 'app/actions/verifyOtpActions';
import * as navigationActions from 'app/actions/navigationActions';

class VerifyotpContainer extends Component {
    constructor(props) {
        super(props);
    }
    navigateToLogin = () => {
        navigationActions.navigateToLogin();
    }

    componentDidMount() {
        let currentRoute = this.props.navigation.state.routeName;
        let navigation = this.props.navigation;
        BackHandler.addEventListener('hardwareBackPress', function () {
            if (currentRoute == "Login") {
                BackHandler.exitApp();
                return true;
            }

            else {
                navigation.goBack();
                return true;
            }
        });
    }

    render() {
        return <VerifyotpView {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
         Verifyotpresponse: state.VerifyotpReducer,
         userdetails:state.forgotPasswordReducer.userdetails,
         loading: state.loadingReducer
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onVerifyotp: (obj) => dispatch(verifyOtpActions.verifyOtprequest(obj))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VerifyotpContainer);
