import React, { Component } from 'react';
import { get } from 'lodash';
import { View, Text, Image, TouchableOpacity, ImageBackground, ScrollView, Keyboard } from 'react-native';
import ForgotPasswordstyles from './ForgotPasswordstyles';
import globalStyles from '../../assets/css/globalStyles';
import Resource_EN from '../../config/Resource_EN';
import PropTypes from 'prop-types';
import { TextBoxElement, LinkButton, ButtonElement, OverlayActivityIndicatorElement } from "../../components";

class ForgotpassView extends Component {
  state = {
    username: "",
    disablebtn: true,
    enableScroll: false,
  };
  componentDidMount() {
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

  forgotpassword = () => {
    this.props.onForgotPassword(this.state.username);
  };

  navigateToLogin = () => {
    this.props.login();
  }

  validateUsername = () => {
    if (this.state.username == "") {
      this.setState({ disablebtn: true });
    }
    else {
      if (this.validateEmail(this.state.username)) {
        this.setState({ disablebtn: false });
      }
      else
      {
        this.setState({ disablebtn: true });
      }
    }
  }

  validateEmail = (value) => {
    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(value)) {
      return true;
    }
    return false;
  }

  updateState = (fieldName, value) => {
    this.setState({
      [fieldName]: value
    });
  };




  render() {
    const { username, disablebtn } = this.state;
    const { loginError, loading } = this.props;
    return (
      <View style={ForgotPasswordstyles.loginView}>

        <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={this.state.enableScroll}>
          <View style={ForgotPasswordstyles.verificationInner}>


            <View style={ForgotPasswordstyles.loginContainer}>
              <View style={ForgotPasswordstyles.loginArea}>
                <Text style={ForgotPasswordstyles.TitleText}>forgot your password?</Text>
                <View style={ForgotPasswordstyles.textBoxContent}>
                  <TextBoxElement
                        placeholder={'Enter Your Email'}
                        value={username}
                        onBlur={value => this.validateUsername()}
                        onChangeText={value => this.updateState("username", value)}
                        autoCapitalize={'none'}
                        caretHidden
                        autoCorrect={false}
                        keyboardType='email-address'
                        autoCompleteType='email'
                    />
                </View>
                {/* <Text style={ForgotPasswordstyles.FgtText}>We send you a email successfully, please confirm the OTP.</Text> */}
                <TouchableOpacity disabled={disablebtn} onPress={this.forgotpassword} style={[ForgotPasswordstyles.buttonStyle, (disablebtn) ? ForgotPasswordstyles.buttonStyleDisable : ForgotPasswordstyles.buttonStyleActive]}
                >
                  <Text style={ForgotPasswordstyles.btnText}>Send Confirmation</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[ForgotPasswordstyles.buttonStyle, ForgotPasswordstyles.BtnCancle]}
                  onPress={this.navigateToLogin}>
                  <Text style={ForgotPasswordstyles.btnText}>Cancel</Text>
                </TouchableOpacity>

              </View>




            </View>
          </View>
        </ScrollView>

      </View >
    );
  }
}

ForgotpassView.propTypes = {
  onLogin: PropTypes.func
};

export default ForgotpassView;
