import React, { Component } from 'react';
import LoginView from './LoginView';
import { BackHandler } from 'react-native';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import * as loginActions from 'app/actions/loginActions';
import * as navigationActions from 'app/actions/navigationActions';
import SplashScreen from 'react-native-splash-screen';

class LoginContainer extends Component {
    constructor(props) {
        super(props);
    }

    // define a separate function to get triggered on focus
    async onFocusFunction () {
      // do some stuff on every screen focus
      let PreviousScreen = await this._retrieveData("PreviousScreen");
      //console.log(PreviousScreen);
      let currentRoute = this.props.navigation.state.routeName;
      let navigation = this.props.navigation;
      BackHandler.addEventListener ('hardwareBackPress', function(){
        if (currentRoute == "Login") {
          //console.log(PreviousScreen);
          if(PreviousScreen)
          {
            navigationActions.navigateToPreviousScreen(PreviousScreen);
          }
          else
          {
            navigationActions.navigateToStoreMap();
          }
          //BackHandler.exitApp();
          return true;
        }
        else{
          navigation.goBack();
          return true;
        }
      });
    }
    // and don't forget to remove the listener
    componentWillUnmount () {
      this.focusListener.remove()
    }
  
  async componentDidMount(){
      this.focusListener = this.props.navigation.addListener('didFocus', () => {
          this.onFocusFunction();
        })
  }

  
    navigateToForgotPassword = () => {
        navigationActions.navigateToForgotPassword();
    }

  navigateToForgotPassword = () => {
    navigationActions.navigateToForgotPassword();
  }

  navigateToSignup = () => {
    navigationActions.navigateToSignup();
  }

  navigateToStoreMap = () => {
    navigationActions.navigateToStoreMap();
  }

  _retrieveData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return value
      }
    } catch (error) {
     
      // Error retrieving data
    }
  };

  render() {
    return <LoginView {...this.props} forgotPassword={this.navigateToForgotPassword} Signup={this.navigateToSignup} StoreMap={this.navigateToStoreMap} />;
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
