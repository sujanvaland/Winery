import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Keyboard, KeyboardAvoidingView } from 'react-native';
import TourListingStyles from './TourListingStyles';
import { CheckBox } from "native-base";
import PropTypes from 'prop-types';
import Resource_EN from '../../config/Resource_EN';
import SplashScreen from 'react-native-splash-screen';
import Toast from 'react-native-simple-toast';
import * as navigationActions from 'app/actions/navigationActions';

class TourListingView extends Component {
  async componentDidMount() {
    SplashScreen.hide();
  }
  constructor(props) {
    super(props);
    const { wineriesbywinetype } = this.props;
    var result = wineriesbywinetype.map(function (el) {
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

  navigateToTourMap = () => {

    let checked_winery_length = this.state.winerylist.filter(function (item) {
      return item.checked;
    }).length;

    if (checked_winery_length > 0) {
      let obj = this.state.winerylist;
      let finalobj = {
        winerylist: obj,
        isRouteVisible: true
      }
      this.props.ongetRoute(finalobj);
      navigationActions.navigateToTourMap();
    }
    else {
      Toast.show("Please Select atleast one winery for get route.", Toast.LONG);
    }
    //
  }

  toggleCheckbox(id) {
    const elementsIndex = this.state.winerylist.findIndex(element => element.Id === id)
    let newArray = [...this.state.winerylist];
    newArray[elementsIndex] = { ...newArray[elementsIndex], checked: !newArray[elementsIndex].checked };
    this.setState({
      winerylist: newArray,
    }
    );
  }

  render() {
    const { button } = Resource_EN;
    const { routewaypointslist } = this.props;

    return (
      <View style={TourListingStyles.InnerContainer}>
        <ScrollView>
          <View>
            {this.state.winerylist.length > 0 &&
              this.state.winerylist.map((item, index) => {
                // let CheckedItem = [];
                // CheckedItem = routewaypointslist?.winerylist?.filter(x=>x.Id == item.Id && x.checked);
                //console.log(CheckedItem);
                return (<View key={index} style={TourListingStyles.WineListBox}>
                  <View style={TourListingStyles.flexBox}>
                    <View style={TourListingStyles.WineImage}>
                      <Image source={require('../../assets/img/wine-ecommerce-hero.jpg')} resizeMode="contain" style={TourListingStyles.BottoleImage} />
                    </View>
                    <View style={TourListingStyles.WineTextDetail}>
                      <Text style={TourListingStyles.WineTexBottle}>{item.name}</Text>
                      <Text style={TourListingStyles.WineTourName}>{item.AddressLine1} {"\n"}
                        {item.AddressLine2 != '' &&
                          <Text>{item.AddressLine2},{"\n"}</Text>
                        }
                      </Text>
                    </View>
                  </View>
                </View>)
              })
            }
          </View>
        </ScrollView>
      </View >
    );
  }
}

TourListingView.propTypes = {
  onLogin: PropTypes.func
};

export default TourListingView;
