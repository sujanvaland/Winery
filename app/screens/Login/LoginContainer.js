import React, { Component } from 'react';
import LoginView from './LoginView';
import { BackHandler } from 'react-native';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import * as loginActions from 'app/actions/loginActions';
import * as navigationActions from 'app/actions/navigationActions';

class LoginContainer extends Component {
    constructor(props) {
        super(props);
    }
    async componentDidMount() {
        let currentRoute = this.props.navigation.state.routeName;
        let navigation = this.props.navigation;
        BackHandler.addEventListener ('hardwareBackPress', function(){
          if (currentRoute == "Login") {
            BackHandler.exitApp();
            return true;
          }
          else{
            navigation.goBack();
            return true;
          }
        });
    }
  
    navigateToForgotPassword = () => {
        navigationActions.navigateToForgotPassword();
    }

    navigateToSignup = () => {
        navigationActions.navigateToSignup();
    }

    _retrieveData = async (key) => {
        try {
          const value = await AsyncStorage.getItem('TDMDeliveryApp:'+key);
          if (value !== null) {
            return value
          }
        } catch (error) {
        }
      };

    render() {
        return <LoginView {...this.props} forgotPassword={this.navigateToForgotPassword} Signup={this.navigateToSignup}/>;
    }
}


function mapStateToProps(state) {
    return {
        loginresponse: state.loginReducer,
        loading: state.loadingReducer
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onLogin: (un, pwd) => dispatch(loginActions.requestLogin(un, pwd))      
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);
