import React from 'react';
import { connect } from 'react-redux';
import * as loginActions from 'app/actions/loginActions';
import AsyncStorage from '@react-native-community/async-storage';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import NetInfo from "@react-native-community/netinfo";

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const loginuser = await AsyncStorage.getItem('loginuser');
    const password = await AsyncStorage.getItem('password');
    const { onLogin,login_token } = this.props;
    if(loginuser && password){
      NetInfo.fetch().then(state => {
        if(!state.isConnected){
          alert("No Internet connection");
        }
        else{
          onLogin(loginuser,password);
        }
      });
    }
    //alert(login_token);
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(login_token ? (login_token == "") ? 'Auth' : 'App' : 'Auth');
  };


  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    login_token:state.loginReducer.login_token,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onLoginResponse : (loginuser) => dispatch(loginActions.onLoginResponse(loginuser)),
    onLogin: (un, pwd) => dispatch(loginActions.requestLogin(un, pwd))   
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthLoadingScreen);