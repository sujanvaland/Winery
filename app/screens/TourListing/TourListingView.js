import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Keyboard, KeyboardAvoidingView, RefreshControl, Alert } from 'react-native';
import TourListingStyles from './TourListingStyles';
import { CheckBox } from "native-base";
import PropTypes from 'prop-types';
import Resource_EN from '../../config/Resource_EN';
import SplashScreen from 'react-native-splash-screen';
import Toast from 'react-native-simple-toast';
import * as navigationActions from 'app/actions/navigationActions';
import { OverlayActivityIndicatorElement } from '../../components';
import { get } from 'lodash';

class TourListingView extends Component {
  async componentDidMount() {
    SplashScreen.hide();
  }
  constructor(props) {
    super(props);
    this.state = {}
  }

  navigateToTourDetail = (obj) => {
    navigationActions.navigateToTourDetail(obj);
  };

  deleteTour = (id) => {
    Alert.alert(
      "Delete",
      "Are you sure to delete tour?",
      [
        { text: "Cancel", style: 'cancel' },
        {
          text: "Delete", onPress: () => {
            this.props.deleteTour(id);
          }, style: 'destructive'
        }
      ],
      { cancelable: false }
    );
  };

  // ============ on page refresh============ //
  _refreshTours = () => {
    // you must return Promise everytime
    const { getTours } = this.props;
    return new Promise((resolve) => {
      setTimeout(() => {
        getTours();
        resolve();
      }, 500)
    })
  }


  render() {
    const { button } = Resource_EN;
    const { loading } = this.props;
    return (
      <View style={TourListingStyles.InnerContainer}>
        {get(loading, 'isLoading') && <OverlayActivityIndicatorElement />}
        <ScrollView refreshControl={
          <RefreshControl onRefresh={() => { this._refreshTours() }} />
        }>
          <View>
            {this.rendertourslist()}
          </View>
        </ScrollView>
      </View >
    );
  }

  rendertourslist = () => {
    let { login_token, tours } = this.props;
    let toursdata = []
    if (tours) {
      toursdata = tours;
    }
    //console.log("123");
    //console.log(toursdata);
    let items = [];
    toursdata.forEach(item => {
      items.push(
        <View key={item.Id} style={TourListingStyles.WineListBox}>
          <View style={TourListingStyles.ToursList}>
            <View style={TourListingStyles.WineTextDetail}>
              <Text style={TourListingStyles.WineTexBottle}>{item.TourDate}</Text>
            </View>
            <View style={TourListingStyles.RedButtonBox}>
              <TouchableOpacity style={TourListingStyles.RedButton} onPress={() => this.navigateToTourDetail({ tourid: item.Id })}>
                <Text style={TourListingStyles.BtnText}>Detail</Text>
              </TouchableOpacity>
              <TouchableOpacity style={TourListingStyles.RedButton} onPress={() => this.deleteTour(item.Id)}>
                <Text style={TourListingStyles.BtnText}>Delete</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>) //get data from AccordianElement components
    });

    return items;
  }
}

TourListingView.propTypes = {
  onLogin: PropTypes.func
};

export default TourListingView;
