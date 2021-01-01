import React, { Component } from 'react';
import {View, Text, TouchableOpacity, ScrollView, Keyboard } from 'react-native';
import VerifyOtpstyles from './VerifyOtpstyles';
import globalStyles from '../../assets/css/globalStyles';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { TextBoxElement, LinkButton, ButtonElement, OverlayActivityIndicatorElement } from '../../components';
import * as navigationActions from '../../actions/navigationActions';
import Toast from 'react-native-simple-toast';

class VerifyotpView extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isValidemail: true,
            isValidpassword: true,
            isValidconfirmpassword: true,
            isValidotp: true,
            postotp: {
                        otp: '',
                        email: '',
                        password: '',
                        confirmpassword: ''
                    }
        }
      }

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


    onValueChange = (fieldName, value) => {
        this.setState(prevState => ({
            postotp: {                   // object that we want to update
                ...prevState.postotp, // keep all other key-value pairs
                [fieldName]: value
            }
            }), function () {
        });
    }

    Verifyotp = () => {
        if(this.validatePassword())
        {
            // const { userdetails } = this.props;
            // let email = userdetails.items.email;
            // this.setState(prevState => ({
            //     postotp: {                   // object that we want to update
            //         ...prevState.postotp, // keep all other key-value pairs
            //         email: email
            //     }
            // }), function () {

            //     const postotp = this.state.postotp;
            //     this.props.onVerifyotp(postotp);
            // });

            const postotp = this.state.postotp;
            this.props.onVerifyotp(postotp);

        }
       
    };

    
    validatePassword=()=>{
        //====== title ======//
        let isValidemail;
        let isValidpassword;
        let isValidconfirmpassword;
        let isValidotp;
        let allInputsValidated;

        if (this.state.postotp.email == "") {
            isValidemail = false;
          }
          else {
            if (this.validateEmail(this.state.postotp.email)) {
                isValidemail = true;
            }
            else {
              Toast.show("Invalid Email", Toast.SHORT);
              isValidemail = false;
            }
        }

        if (this.state.postotp.password == "") {
            isValidpassword = false;
          }
          else {
            if (this.state.postotp.password.length >= 3 && this.state.postotp.password.length <= 20 ) {
                isValidpassword = true;
            }
            else {
                Toast.show("New Password should have min 3 chars and max 20", Toast.SHORT);
                isValidpassword = false;
            }
        }

        if (this.state.postotp.confirmpassword == "") {
            isValidconfirmpassword = false;
          }
          else {
            if (this.state.postotp.confirmpassword.length >= 3 && this.state.postotp.confirmpassword.length <= 20) {
        
                if (this.state.postotp.password === this.state.postotp.confirmpassword) {
                    isValidconfirmpassword = true;
                }
                else {
                  Toast.show("New Password and Confirm Password are diffrent.", Toast.SHORT);
                  isValidconfirmpassword = false;
                }
              }
              else {
                Toast.show("Confirm Password should have min 3 chars and max 20", Toast.SHORT);
                isValidconfirmpassword = false;
              }
        }

        if (this.state.postotp.otp == "") {
            isValidotp = false;
          }
        else {
            let reg = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/g;
            if (reg.test(this.state.postotp.otp) === true) {
                
                isValidotp = true;
                
            }
            else {
                Toast.show("OTP Number is not valid", Toast.SHORT);
                isValidotp = false;
            }
        }

      if(isValidemail && isValidpassword && isValidconfirmpassword && isValidotp ) 
       {
          allInputsValidated = true;
       }
      else
       {
          Toast.show("Please check all fields", Toast.SHORT);
       }
       
       this.setState({ 
        isValidemail: isValidemail,
        isValidpassword: isValidpassword,
        isValidconfirmpassword: isValidconfirmpassword,
        isValidotp: isValidotp
       });
    
       return allInputsValidated;
     }

    navigateToLogin = () => {
        navigationActions.navigateToLogin();
    }

    validateEmail = (value) => {
    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(value)) {
        return true;
    }
    return false;
    }


    validateInputs = (fieldName) => {

        if (fieldName == "email") {
            if (this.state.postotp.email == "") {
              this.updateState("isValidemail", false);
              this.setState({ isValidemail: false });
            }
            else {
              if (this.validateEmail(this.state.postotp.email)) {
                this.updateState("isValidemail", true);
                this.setState({ isValidemail: true });
              }
              else {
                Toast.show("Invalid Email", Toast.SHORT);
                this.updateState("isValidemail", false);
                this.setState({ isValidemail: false });
              }
            }
        }

        if (fieldName == "password") {
            if (this.state.postotp.password == "") {
              this.updateState("isValidpassword", false);
              this.setState({ isValidpassword: false });
            }
            else {
              if (this.state.postotp.password.length >= 3 && this.state.postotp.password.length <= 20 ) {
                this.updateState("isValidpassword", true);
                this.setState({ isValidpassword: true });
              }
              else {
                Toast.show("New Password should have min 3 chars and max 20", Toast.SHORT);
                this.updateState("isValidpassword", false);
                this.setState({ isValidpassword: false });
              }
            }
        }

        if (fieldName == "confirmpassword") {

            if (this.state.postotp.confirmpassword == "") {
                this.updateState("isValidconfirmpassword", false);
                this.setState({ isValidconfirmpassword: false });
              }
              else {
                if (this.state.postotp.confirmpassword.length >= 3 && this.state.postotp.confirmpassword.length <= 20) {
        
                  if (this.state.postotp.password === this.state.postotp.confirmpassword) {
                    this.updateState("isValidconfirmpassword", true);
                    this.setState({ isValidconfirmpassword: true });
                  }
                  else {
                    Toast.show("New Password and Confirm Password are diffrent.", Toast.SHORT);
                    this.updateState("isValidconfirmpassword", false);
                    this.setState({ isValidconfirmpassword: false });
                  }
                }
                else {
                  Toast.show("Confirm Password should have min 3 chars and max 20", Toast.SHORT);
                  this.updateState("isValidconfirmpassword", false);
                  this.setState({ isValidconfirmpassword: false });
                }
              }
        }

        if (fieldName == "otp") {
            if (this.state.postotp.otp == "") {
              this.onValueChange("isValidotp", false);
              this.setState({ isValidotp: false });
            }
            else {
              let reg = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/g;
              if (reg.test(this.state.postotp.otp) === true) {
               
                  this.onValueChange("isValidotp", true);
                  this.setState({ isValidotp: true });
               
              }
              else {
                Toast.show("OTP Number is not valid", Toast.SHORT);
                this.onValueChange("isValidotp", false);
                this.setState({ isValidotp: false });
              }
            }
          }
    
      
    
      };

    updateState = (fieldName, value) => {
        this.setState({
            [fieldName]: value
        });
    };

    render() {
        const { loading } = this.props;
        return (
            <View style={VerifyOtpstyles.loginView}>
                {get(loading, 'isLoading') && <OverlayActivityIndicatorElement />}

                <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={this.state.enableScroll}>
                    <View style={VerifyOtpstyles.verificationInner}>
                        <View style={VerifyOtpstyles.loginContainer}>
                            <View style={VerifyOtpstyles.loginArea}>
                                <Text style={VerifyOtpstyles.TitleText}>Verify OTP</Text>
                                <View style={VerifyOtpstyles.textBoxContent}>
                                <TextBoxElement
                                        placeholder={'Enter Your Email'}
                                        value={this.state.postotp.email}
                                        onChangeText={value => this.onValueChange("email", value)}
                                        autoCapitalize={'none'}
                                        caretHidden
                                        autoCorrect={false}
                                        keyboardType='email-address'
                                        autoCompleteType='email'
                                        isvalidInput={this.state.isValidemail}
                                        onEndEditing={() => this.validateInputs("email")}
                                    />
                                </View>
                                <View style={VerifyOtpstyles.textBoxContent}>
                                    <TextBoxElement
                                        placeholder={"New Password"}
                                        secureTextEntry={true}
                                        value={this.state.postotp.password}
                                        onChangeText={value => this.onValueChange("password", value)}
                                        isvalidInput={this.state.isValidpassword}
                                        onEndEditing={() => this.validateInputs("password")}
                                        autoCapitalize={'none'}
                                        maxLength={20}
                                    />
                                </View>

                                <View style={VerifyOtpstyles.textBoxContent}>
                                    <TextBoxElement
                                        placeholder={"Confirm Password"}
                                        secureTextEntry={true}
                                        value={this.state.postotp.confirmpassword}
                                        onChangeText={value => this.onValueChange("confirmpassword", value)}
                                        isvalidInput={this.state.isValidpassword}
                                        onEndEditing={() => this.validateInputs("confirmpassword")}
                                        autoCapitalize={'none'}
                                        maxLength={20}
                                    />
                                </View>
                                <View style={VerifyOtpstyles.textBoxContent}>
                                    <TextBoxElement
                                                placeholder={'Enter OTP'}
                                                value={this.state.postotp.otp}
                                                secureTextEntry={true}
                                                maxLength={20}
                                                autoCapitalize={'none'}
                                                onEndEditing={() => this.validateInputs("otp")}
                                                isvalidInput={this.state.isValidotp}
                                                onChangeText={value => this.onValueChange("otp", value)}
                                            />
                                </View>
                                
                                <TouchableOpacity onPress={this.Verifyotp} style={[VerifyOtpstyles.buttonStyle,VerifyOtpstyles.buttonStyleActive]}
                                >
                                    <Text style={VerifyOtpstyles.btnText}>Verify</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[VerifyOtpstyles.buttonStyle, VerifyOtpstyles.BtnCancle]}
                                onPress={this.navigateToLogin}>
                                    <Text style={VerifyOtpstyles.btnText}>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View >
        );
    }
}

VerifyotpView.propTypes = {
    onVerifyotp: PropTypes.func
};

export default VerifyotpView;
