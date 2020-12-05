import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import ForgotpassView from './ForgotpassView';
import { connect } from 'react-redux';
import * as forgotPasswordActions from 'app/actions/forgotPasswordActions';
import * as navigationActions from 'app/actions/navigationActions';

class ForgotpassContainer extends Component {
    constructor(props) {
        super(props);
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

    navigateToLogin = () => {
        navigationActions.navigateToLogin();
    }

    render() {
        return <ForgotpassView {...this.props} login={this.navigateToLogin} />;
    }
}

function mapStateToProps(state) {
    return {
        forgotPasswordresponse: state.forgotPasswordReducer,
        loading: state.loadingReducer
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onForgotPassword: (username) => dispatch(forgotPasswordActions.requestForgotPassword(username))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ForgotpassContainer);
