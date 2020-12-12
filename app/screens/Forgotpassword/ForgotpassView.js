import React, { Component } from 'react';
import { get } from 'lodash';
import { View, Text, Image, TouchableOpacity, ImageBackground, ScrollView, Keyboard } from 'react-native';
import ForgotPasswordstyles from './ForgotPasswordstyles';
import globalStyles from '../../assets/css/globalStyles';
import Resource_EN from '../../config/Resource_EN';
import PropTypes from 'prop-types';
import { TextBoxElement, LinkButton, ButtonElement, OverlayActivityIndicatorElement } from "../../components";
const { heading } = Resource_EN;
const { content } = Resource_EN;
const { button } = Resource_EN;
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
      this.setState({ disablebtn: false });
    }
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
                    placeholder={'Enter Username'}
                    value={username}
                    autoCapitalize={'none'}
                    onBlur={value => this.validateUsername()}
                    onChangeText={value => this.updateState("username", value)}
                  />
                </View>
                <Text style={ForgotPasswordstyles.FgtText}>We send you a email successfully, please confirm the link.</Text>
                <TouchableOpacity disabled={disablebtn} style={[ForgotPasswordstyles.buttonStyle, (disablebtn) ? ForgotPasswordstyles.buttonStyleDisable : ForgotPasswordstyles.buttonStyleActive]}
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
