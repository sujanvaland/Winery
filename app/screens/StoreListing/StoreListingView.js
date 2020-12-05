import React, { Component } from 'react';
import { View, Text, Image, StatusBar, Picker, CheckBox, TouchableOpacity, ImageBackground, Keyboard, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import StoreListingStyles from './StoreListingStyles';
import globalStyles from '../../assets/css/globalStyles';
import PropTypes from 'prop-types';
import { TextBoxElement, TextBoxElementLogin, TextBoxElementChangepass } from "../../components";
import Resource_EN from '../../config/Resource_EN';
import { ScrollView } from 'react-native-gesture-handler';
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

  render() {

    const { button } = Resource_EN

    return (

      <View style={StoreListingStyles.InnerContainer}>

        <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={this.state.enableScroll}>
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
          <View style={StoreListingStyles.container}>
            <View style={StoreListingStyles.SearchStore}>
              <View style={StoreListingStyles.CheckBoxSearch}>
                <CheckBox
                  style={StoreListingStyles.CheckBoxBox}
                  value={this.state.checked}
                  tintColors={{ true: '#c670b1', false: 'black' }}
                  onChange={() => this.onChangeCheck()} />
                <Text style={StoreListingStyles.CheckBoxText}>Most Recent Wine Tours</Text>
              </View>
              <View style={StoreListingStyles.PickeBoxMain}>
                <View style={StoreListingStyles.PickeBox}>
                  <Picker
                    style={StoreListingStyles.PickeElement}
                  >
                    <Picker.Item value="" label="Location" />
                    <Picker.Item value="" label="Select" />
                  </Picker>
                </View>
                <View style={StoreListingStyles.PickeBox}>
                  <Picker
                    style={StoreListingStyles.PickeElement}
                  >
                    <Picker.Item value="" label="Wines" />
                    <Picker.Item value="" label="Select" />
                  </Picker>
                </View>
              </View>
            </View>
            <View style={StoreListingStyles.WineListBox}>
              <View style={StoreListingStyles.WineImage}>
                <Image source={require('../../assets/img/img_bottle.jpg')} resizeMode="contain" style={StoreListingStyles.BottoleImage} />
              </View>
              <View style={StoreListingStyles.WineTextDetail}>
                <Text style={StoreListingStyles.WinePrice}>$17</Text>
                <Text style={StoreListingStyles.WineTexBottle}>Bottle #1</Text>
                <Text style={StoreListingStyles.WineStoreName}>Westwood Estate Wines</Text>
              </View>
              <View style={StoreListingStyles.WineButton}>
                <CheckBox
                  //style={styles.checkBox}
                  value={this.state.checked}
                  onChange={() => this.onChangeCheck()} />
                <TouchableOpacity style={StoreListingStyles.BtnGetRoute}>
                  <Text style={StoreListingStyles.BtnText}>Get Route</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={StoreListingStyles.WineListBox}>
              <View style={StoreListingStyles.WineImage}>
                <Image source={require('../../assets/img/img_bottle.jpg')} resizeMode="contain" style={StoreListingStyles.BottoleImage} />
              </View>
              <View style={StoreListingStyles.WineTextDetail}>
                <Text style={StoreListingStyles.WinePrice}>$17</Text>
                <Text style={StoreListingStyles.WineTexBottle}>Bottle #1</Text>
                <Text style={StoreListingStyles.WineStoreName}>Westwood Estate Wines</Text>
              </View>
              <View style={StoreListingStyles.WineButton}>
                <CheckBox
                  //style={styles.checkBox}
                  value={this.state.checked}
                  onChange={() => this.onChangeCheck()} />
                <TouchableOpacity style={StoreListingStyles.BtnGetRoute}>
                  <Text style={StoreListingStyles.BtnText}>Get Route</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={StoreListingStyles.WineListBox}>
              <View style={StoreListingStyles.WineImage}>
                <Image source={require('../../assets/img/img_bottle.jpg')} resizeMode="contain" style={StoreListingStyles.BottoleImage} />
              </View>
              <View style={StoreListingStyles.WineTextDetail}>
                <Text style={StoreListingStyles.WinePrice}>$17</Text>
                <Text style={StoreListingStyles.WineTexBottle}>Bottle #1</Text>
                <Text style={StoreListingStyles.WineStoreName}>Westwood Estate Wines</Text>
              </View>
              <View style={StoreListingStyles.WineButton}>
                <CheckBox
                  //style={styles.checkBox}
                  value={this.state.checked}
                  onChange={() => this.onChangeCheck()} />
                <TouchableOpacity style={StoreListingStyles.BtnGetRoute}>
                  <Text style={StoreListingStyles.BtnText}>Get Route</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>


        </ScrollView>

      </View >


    );
  }
}

StoreListingView.propTypes = {
  onLogin: PropTypes.func
};

export default StoreListingView;
