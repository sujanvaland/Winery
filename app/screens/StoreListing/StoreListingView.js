import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StatusBar, Picker, CheckBox, TouchableOpacity, ImageBackground, Keyboard, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import StoreListingStyles from './StoreListingStyles';
import globalStyles from '../../assets/css/globalStyles';
import PropTypes from 'prop-types';
import { TextBoxElement, TextBoxElementLogin, TextBoxElementChangepass } from "../../components";
import Resource_EN from '../../config/Resource_EN';

import SplashScreen from 'react-native-splash-screen';

class StoreListingView extends Component {
  async componentDidMount() {
    SplashScreen.hide();
  }
  constructor(props) {
    super(props);
    this.state = {
      enableScroll: false,
      isValidoldpassword: true,
      errorMessageoldpassword: false,
      isValidnewpassword: true,
      errorMessagenewpassword: false,
      isValidconfirmpassword: true,
      errorMessageconfirmpassword: false,
      eyeOpen: false,
      disable: true,
      checked: false,
      postStoreListing: {
        oldpassword: '',
        newpassword: '',
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
      postStoreListing: {                   // object that we want to update
        ...prevState.postStoreListing, // keep all other key-value pairs
        [fieldName]: value
      }
    }), function () {
    });
  }
  onChangeCheck = () => {
    this.setState({ checked: !this.state.checked })
  }

  navigateToStoreMap = () => {
    this.props.StoreMap();
  }
  render() {

    const { button } = Resource_EN

    return (

      <View style={StoreListingStyles.InnerContainer}>
        <ScrollView>
          <View>
            <View style={StoreListingStyles.WineListBox}>
              <View style={StoreListingStyles.flexBox}>
                <View style={StoreListingStyles.WineImage}>
                  <Image source={require('../../assets/img/img_bottle.jpg')} resizeMode="contain" style={StoreListingStyles.BottoleImage} />
                </View>
                <View style={StoreListingStyles.WineTextDetail}>
                  <Text style={StoreListingStyles.WineTexBottle}>Westwood Estate Wines</Text>
                  <Text style={StoreListingStyles.WineStoreName}>The Carlton Winemakers Studio {"\n"}
801 N Scott St, {"\n"}Carlton, OR - 97111</Text>
                </View>
              </View>
              <View style={StoreListingStyles.WineButton}>
                <CheckBox
                  //style={styles.checkBox}
                  value={this.state.checked}
                  onChange={() => this.onChangeCheck()} />

              </View>
            </View>

          </View>
        </ScrollView>
        <View style={StoreListingStyles.BototmButton}>
          <TouchableOpacity style={StoreListingStyles.BtnFeedback} onPress={this.navigateToStoreMap}>
            <Text style={StoreListingStyles.WhiteText}>Get Route</Text>
          </TouchableOpacity>
        </View>
      </View >


    );
  }
}

StoreListingView.propTypes = {
  onLogin: PropTypes.func
};

export default StoreListingView;
