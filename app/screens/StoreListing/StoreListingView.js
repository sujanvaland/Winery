import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Keyboard, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import StoreListingStyles from './StoreListingStyles';
import { CheckBox } from "native-base";
import PropTypes from 'prop-types';
import { TextBoxElement, TextBoxElementLogin, TextBoxElementChangepass } from "../../components";
import Resource_EN from '../../config/Resource_EN';
import SplashScreen from 'react-native-splash-screen';
import Toast from 'react-native-simple-toast';
import * as navigationActions from 'app/actions/navigationActions';

class StoreListingView extends Component {
  async componentDidMount() {
    SplashScreen.hide();
  }
  constructor(props) {
    super(props);
    const { wineriesbywinetype } = this.props;
    var result = wineriesbywinetype.map(function(el) {
      var o = Object.assign({}, el);
      o.checked = false;
      return o;
    })
    this.state = {
      enableScroll: false,
      winerylist: result
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

  navigateToStoreMap = () => {
    
    let checked_winery_length = this.state.winerylist.filter(function(item){
      return item.checked;
    }).length;

    if(checked_winery_length > 0)
    {
      let obj=this.state.winerylist;
      let finalobj={
        winerylist:obj,
        isRouteVisible:true
      }
      this.props.ongetRoute(finalobj);
      navigationActions.navigateToStoreMap();
    }
    else
    {
      Toast.show("Please Select atleast one winery for get route.", Toast.LONG);
    }
    //
  }

  toggleCheckbox(id) {
    const elementsIndex = this.state.winerylist.findIndex(element => element.Id === id )
    let newArray = [...this.state.winerylist];
    newArray[elementsIndex] = {...newArray[elementsIndex], checked: !newArray[elementsIndex].checked};
    this.setState({
      winerylist: newArray,
    });
  }

  render() {
    const { button } = Resource_EN;
    return (
      <View style={StoreListingStyles.InnerContainer}>
        <ScrollView>
          <View>
            { this.state.winerylist.length > 0 &&
              this.state.winerylist.map((item, index) =>{
                return (<View key={index} style={StoreListingStyles.WineListBox}>
                  <View style={StoreListingStyles.flexBox}>
                    <View style={StoreListingStyles.WineImage}>
                      <Image source={require('../../assets/img/img_bottle.jpg')} resizeMode="contain" style={StoreListingStyles.BottoleImage} />
                    </View>
                    <View style={StoreListingStyles.WineTextDetail}>
                      <Text style={StoreListingStyles.WineTexBottle}>{item.name}</Text>
                      <Text style={StoreListingStyles.WineStoreName}>{item.AddressLine1} {"\n"}
                        {item.AddressLine2 !='' &&
                          <Text>{item.AddressLine2},{"\n"}</Text>
                        }
                      </Text>
                    </View>
                  </View>
                  <View style={StoreListingStyles.WineButton}>
                    <CheckBox
                      key={item.Id}
                      title={item.name}
                      checked={item.checked}
                      onPress={() => this.toggleCheckbox(item.Id)} />
                  </View>
                </View>)
              })
            }
          </View>
        </ScrollView>
        <View style={StoreListingStyles.BototmButton}>
          <TouchableOpacity style={StoreListingStyles.BtnFeedback} onPress={() => this.navigateToStoreMap()}>
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
