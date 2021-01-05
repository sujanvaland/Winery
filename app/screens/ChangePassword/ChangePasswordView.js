import React, { Component } from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity, ImageBackground, Keyboard, KeyboardAvoidingView } from 'react-native';
import ChangePasswordStyles from './ChangePasswordStyles';
import globalStyles from '../../assets/css/globalStyles';
import PropTypes from 'prop-types';
import { TextBoxElement, TextBoxElementLogin, TextBoxElementChangepass } from "../../components";
import Resource_EN from '../../config/Resource_EN';
import { ScrollView } from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import Toast from 'react-native-simple-toast';
import { OverlayActivityIndicatorElement } from '../../components';
import { get } from 'lodash';

class ChangePasswordView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      enableScroll: false,
      isValidnewpassword: true,
      errorMessagenewpassword: false,
      isValidconfirmpassword: true,
      errorMessageconfirmpassword: false,
      eyeOpen: false,
      disable: true,
      postChangePassword: {
        newpassword: '',
        confirmpassword: ''
      }
    }
  }

  componentDidMount() {
    SplashScreen.hide();
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide,
    );
  }
  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow = () => {
    this.setState({ enableScroll: true });
  }

  _keyboardDidHide = () => {
    this.setState({ enableScroll: false });
  }

  onValueChange = (fieldName, value) => {
    this.setState(prevState => ({
      postChangePassword: {                   // object that we want to update
        ...prevState.postChangePassword, // keep all other key-value pairs
        [fieldName]: value
      }
    }), function () {
    });
  }

  validateInputs = (fieldName) => {

    if (fieldName == "newpassword") {
      if (this.state.postChangePassword.newpassword == "") {
        this.setState({ isvalidnewpassword: false });
      }
      else {
        if (this.state.postChangePassword.newpassword.length >= 3 && this.state.postChangePassword.newpassword.length <= 20) {
          this.setState({ isvalidnewpassword: true });
        }
        else {
          Toast.show("New Password should have min 3 chars and max 20", Toast.SHORT);
          this.setState({ isvalidnewpassword: false });
        }
      }
    }

    if (fieldName == "confirmpassword") {
      if (this.state.postChangePassword.confirmpassword == "") {
        this.setState({ isvalidconfirmpassword: false });
      }
      else {
        if (this.state.postChangePassword.confirmpassword.length >= 3 && this.state.postChangePassword.confirmpassword.length <= 20) {

          if (this.state.postChangePassword.newpassword === this.state.postChangePassword.confirmpassword) {
            this.setState({ isvalidconfirmpassword: true });
          }
          else {
            Toast.show("New Password and Confirm Password are diffrent.", Toast.SHORT);
            this.setState({ isvalidconfirmpassword: false });
          }
        }
        else {
          Toast.show("Confirm Password should have min 3 chars and max 20", Toast.SHORT);
          this.setState({ isvalidconfirmpassword: false });
        }
      }
    }

  };

  changePassword = () => {
    if (this.validatePassword()) {
      this.props.onChangePassword(this.state.postChangePassword);
    }
  }

  validatePassword = () => {
    //====== title ======//
    let isvalidnewpassword;
    let isvalidconfirmpassword;

    let allInputsValidated;
    if (this.state.postChangePassword.newpassword == "") {
      isvalidnewpassword = false;
    }
    else {
      if (this.state.postChangePassword.newpassword.length >= 3 && this.state.postChangePassword.newpassword.length <= 20) {
        isvalidnewpassword = true;
      }
      else {
        Toast.show("New Password should have min 3 chars and max 20", Toast.SHORT);
        isvalidnewpassword = false;
      }
    }


    if (this.state.postChangePassword.confirmpassword == "") {
      isvalidconfirmpassword = false;
    }
    else {
      if (this.state.postChangePassword.confirmpassword.length >= 3 && this.state.postChangePassword.confirmpassword.length <= 20) {

        if (this.state.postChangePassword.newpassword === this.state.postChangePassword.confirmpassword) {
          isvalidconfirmpassword = true;
        }
        else {
          Toast.show("New Password and Confirm Password are diffrent.", Toast.SHORT);
          isvalidconfirmpassword = false;
        }
      }
      else {
        Toast.show("Confirm Password should have min 3 chars and max 20", Toast.SHORT);
        isvalidconfirmpassword = false;
      }
    }

    if (isvalidnewpassword && isvalidconfirmpassword) {
      allInputsValidated = true;
    }
    else {
      Toast.show("Please check all fields", Toast.SHORT);
    }

    this.setState({
      isvalidnewpassword: isvalidnewpassword,
      errorMessagenewpassword: !isvalidnewpassword,
      isvalidconfirmpassword: isvalidconfirmpassword,
      errorMessageconfirmpassword: !isvalidconfirmpassword
    });

    return allInputsValidated;
  }

  render() {
    const { button } = Resource_EN
    const { loading } = this.props;
    return (

      <View style={ChangePasswordStyles.loginView}>
        {get(loading, 'isLoading') && <OverlayActivityIndicatorElement />}
        <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={this.state.enableScroll}>
          <KeyboardAvoidingView style={ChangePasswordStyles.container} enabled>
            <StatusBar
              barStyle="light-content"
              // dark-content, light-content and default
              hidden={false}
              //To hide statusBar
              backgroundColor="#67024e"
              //Background color of statusBar
              translucent={false}
              //allowing light, but not detailed shapes
              networkActivityIndicatorVisible={true}
            />
            <View style={ChangePasswordStyles.loginContainer}>
              <View style={ChangePasswordStyles.textBoxContent}>
                <View style={ChangePasswordStyles.textBoxInner}>
                  <Image style={ChangePasswordStyles.passwordImg} source={require('../../assets/img/password.png')} resizeMode="cover" />
                  <Image style={ChangePasswordStyles.lineImg} source={require('../../assets/img/line.png')} resizeMode="cover" />
                </View>
                <TextBoxElementChangepass
                  placeholder={"Password"}
                  style={[this.state.isValidnewpassword ? ChangePasswordStyles.BorderGrey : ChangePasswordStyles.BorderRed, ChangePasswordStyles.textInput]}
                  value={this.state.postChangePassword.newpassword}
                  onChangeText={value => this.onValueChange("newpassword", value)}
                  isvalidInput={this.state.isValidnewpassword} autoCapitalize={'none'}
                  onEndEditing={() => this.validateInputs("newpassword")}
                  secureTextEntry={true}
                  autoCapitalize={'none'}
                />

              </View>
              <View style={ChangePasswordStyles.textBoxContent}>
                <View style={ChangePasswordStyles.textBoxInner}>
                  <Image style={ChangePasswordStyles.passwordImg} source={require('../../assets/img/password.png')} resizeMode="cover" />
                  <Image style={ChangePasswordStyles.lineImg} source={require('../../assets/img/line.png')} resizeMode="cover" />
                </View>
                <TextBoxElementChangepass
                  placeholder="Confirm Password"
                  style={[this.state.isValidconfirmpassword ? ChangePasswordStyles.BorderGrey : ChangePasswordStyles.BorderRed, ChangePasswordStyles.textInput]}
                  value={this.state.postChangePassword.confirmpassword}
                  onChangeText={value => this.onValueChange("confirmpassword", value)}
                  isvalidInput={this.state.isValidconfirmpassword}
                  onEndEditing={() => this.validateInputs("confirmpassword")}
                  secureTextEntry={true}
                  autoCapitalize={'none'} />
              </View>
              <View style={ChangePasswordStyles.ButtonBox}>
                <TouchableOpacity style={ChangePasswordStyles.buttonStyle}
                  onPress={() => this.changePassword()}>
                  <Text style={ChangePasswordStyles.btnText}>Update Password</Text>
                </TouchableOpacity>


              </View>

            </View>

          </KeyboardAvoidingView>
        </ScrollView>

      </View >


    );
  }
}

ChangePasswordView.propTypes = {
  onLogin: PropTypes.func
};

export default ChangePasswordView;
