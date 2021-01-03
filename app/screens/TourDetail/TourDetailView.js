import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Keyboard, KeyboardAvoidingView, RefreshControl } from 'react-native';
import TourDetailStyles from './TourDetailStyles';
import { CheckBox } from "native-base";
import PropTypes from 'prop-types';
import Resource_EN from '../../config/Resource_EN';
import SplashScreen from 'react-native-splash-screen';
import Toast from 'react-native-simple-toast';
import * as navigationActions from 'app/actions/navigationActions';
import { OverlayActivityIndicatorElement } from '../../components';
import { get } from 'lodash';

class TourDetailView extends Component {
  async componentDidMount() {
    SplashScreen.hide();
  }
  constructor(props) {
    super(props);
    this.state = {};
    //Filled Star. You can also give the path from local
    this.Star = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
    //Empty Star. You can also give the path from local
    this.Star_With_Border = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';
  }

  render() {
    const { button } = Resource_EN;
    const { loading } = this.props;
    return (
      <View style={TourDetailStyles.InnerContainer}>
        {get(loading, 'isLoading') && <OverlayActivityIndicatorElement />}
        <ScrollView>
          <View>
            {this.renderwinerylist()}
          </View>
        </ScrollView>
      </View >
    );
  }

  renderwinerylist = () => {
    let { login_token, tourdetail } = this.props;
    let winerydata = []
    if (tourdetail) {
      winerydata = tourdetail.Data;
    }

    console.log(tourdetail);
    //console.log("123");
    //console.log(toursdata);
    let items = [];
    winerydata.forEach(item => {
      let default_rating = item.Rating;
      let React_Native_Rating_Bar = [];
      //Array to hold the filled or empty Stars
      for (var i = 1; i <= 5; i++) {
        React_Native_Rating_Bar.push(
          <TouchableOpacity
            activeOpacity={0.7}
            key={i}
          >
            <Image
              style={TourDetailStyles.StarImage}
              source={
                i <= default_rating
                  ? { uri: this.Star }
                  : { uri: this.Star_With_Border }
              }
            />
          </TouchableOpacity>
        );
      }

      items.push(
        <View key={item.Id} style={TourDetailStyles.WineListBox}>
          <View style={TourDetailStyles.ToursList}>
            <View style={TourDetailStyles.WineTextDetail}>
              <Text style={TourDetailStyles.WineTexBottle}> <Text style={TourDetailStyles.BoldText}>Winery :</Text>{item.WineryId}</Text>
            </View>
            <View style={TourDetailStyles.WineTextDetail}>
              <Text style={TourDetailStyles.WineTexBottle}> <Text style={TourDetailStyles.BoldText}>Start Time : </Text>{item.StartTime}</Text>
              <Text style={TourDetailStyles.WineTexBottle}> <Text style={TourDetailStyles.BoldText}>End Time : </Text>{item.EndTime}</Text>
            </View>
            <View style={TourDetailStyles.RatingBox}>
              {React_Native_Rating_Bar}
            </View>
            <View>
              <Text style={TourDetailStyles.WineTextDetail}>{item.Feedback}</Text>
            </View>

          </View>

        </View>) //get data from AccordianElement components
    });

    return items;
  }
}

TourDetailView.propTypes = {
  onLogin: PropTypes.func
};

export default TourDetailView;
