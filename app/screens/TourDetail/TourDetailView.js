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
import Modal from 'react-native-modal';
import { Textarea } from 'native-base';

class TourDetailView extends Component {
  async componentDidMount() {
    SplashScreen.hide();
  }
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      isValidRating: true,
      isValidSendFeedback: true,
      Max_Rating: 5,
      postSendFeedback: {
        TourId: 0,
        Id: 0,
        Rating: 0,
        Feedback: ''
      }
    };
    //Filled Star. You can also give the path from local
    this.Star = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
    //Empty Star. You can also give the path from local
    this.Star_With_Border = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';
  }

  getParsedDate(strDate) {
    //get date formate
    if (strDate != "") {
      let month_names = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      var strSplitDate = String(strDate).split(' ');
      var dateArray = strSplitDate[0].split('-');
      let monthint = parseInt(dateArray[1]);
      let date = month_names[monthint - 1] + " " + dateArray[2] + ", " + dateArray[0] + " " + strSplitDate[1];
      return date;
    }
    return "";
  }

  updateFeedback = (item) => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
    this.setState({
      postSendFeedback: {
        TourId: item.TourId,
        Id: item.Id,
        Rating: item.Rating,
        Feedback: item.Feedback,
      }
    });
  };

  _onCancelSendFeedbackForm = () => {
    this.setState({
      postSendFeedback: {
        TourId: 0,
        Id: 0,
        Rating: 0,
        Feedback: ''
      }
    });
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  UpdateRating(key) {
    this.setState(prevState => ({
      postSendFeedback: {                   // object that we want to update
        ...prevState.postSendFeedback, // keep all other key-value pairs
        'Rating': key
      }
    }), function () {
    });
  }

  validateSendFeedbackInputs = (fieldName) => {
    if (fieldName == "Feedback") {
      if (this.state.postSendFeedback.Feedback == "") {
        this.setState({ isValidSendFeedback: true });
      }
      else {
        this.setState({ isValidSendFeedback: true });
      }
    }
  };

  onSendFeedbackValueChange = (fieldName, value) => {
    this.setState(prevState => ({
      postSendFeedback: {                   // object that we want to update
        ...prevState.postSendFeedback, // keep all other key-value pairs
        [fieldName]: value
      }
    }), function () {
    });
  }

  validateSendFeedback = () => {
    //====== title ======//
    let isValidRating;
    let isValidSendFeedback;
    let allSendFeedbackInputsValidated;

    if (this.state.postSendFeedback.Rating < 0) {
      isValidRating = false;
    }
    else {
      isValidRating = true;
    }

    if (this.state.postSendFeedback.Feedback == '') {
      isValidSendFeedback = true;
    }
    else {
      isValidSendFeedback = true;
    }

    if (isValidSendFeedback && isValidRating) {
      allSendFeedbackInputsValidated = true;
    }
    else {
      Toast.show("Please check all fields", Toast.SHORT);
    }

    this.setState({
      isValidRating: isValidRating,
      isValidSendFeedback: isValidSendFeedback
    });

    return allSendFeedbackInputsValidated;
  }

  _onSendFeedback = async () => {
    if (this.validateSendFeedback()) {
      let FeedbackData = this.state.postSendFeedback;
      this.props.updateFeedback(FeedbackData);
      this.setState({ isModalVisible: false });
    }
  };

  render() {
    const { button } = Resource_EN;
    const { loading } = this.props;

    let React_Native_Rating_Bar = [];
    //Array to hold the filled or empty Stars
    for (var i = 1; i <= this.state.Max_Rating; i++) {
      React_Native_Rating_Bar.push(
        <TouchableOpacity
          activeOpacity={0.7}
          key={i}
          onPress={this.UpdateRating.bind(this, i)}>
          <Image
            style={TourDetailStyles.StarImageforRate}
            source={
              i <= this.state.postSendFeedback.Rating
                ? { uri: this.Star }
                : { uri: this.Star_With_Border }
            }
          />
        </TouchableOpacity>
      );
    }
    return (
      <View style={TourDetailStyles.InnerContainer}>
        {get(loading, 'isLoading') && <OverlayActivityIndicatorElement />}
        <ScrollView>
          <View>
            {this.renderwinerylist()}
          </View>
        </ScrollView>
        <Modal transparent={true} isVisible={this.state.isModalVisible} style={TourDetailStyles.FeedbackModalMain}>
          <ScrollView>
            <View style={TourDetailStyles.FeedbackModal}>
              <View style={TourDetailStyles.ModalHeader}>
                <Text style={TourDetailStyles.ModalHeaderText}>Update Your Feedback</Text>
              </View>
              <View style={TourDetailStyles.FeedbackFormBoxMain}>
                <View style={TourDetailStyles.FeedbackFormBox}>
                  {/* <View style={TourDetailStyles.TextBoxcontainer}>
                  <Text style={TourDetailStyles.RatingBoxTitle}>Winery Name</Text>
                  <Text style={TourDetailStyles.RatingBoxTitleValue}>{this.state.destinationname}</Text>
                </View> */}
                  <View style={TourDetailStyles.RatingBox}>
                    <Text style={TourDetailStyles.RatingBoxTitle}>Update Ratings</Text>
                    <View style={TourDetailStyles.RatingsBoxforRating}>
                      {React_Native_Rating_Bar}
                    </View>
                  </View>
                  <View style={TourDetailStyles.RatingBox}>
                    <Text style={TourDetailStyles.RatingBoxTitle}>Feedback</Text>
                    <Textarea placeholder="Write Feedback"
                      style={[this.state.isValidSendFeedback ? TourDetailStyles.BorderGrey : TourDetailStyles.BorderRed, TourDetailStyles.RatingBoxNotedesc]}
                      rowSpan={3}
                      value={this.state.postSendFeedback.Feedback}
                      placeholderTextColor='#4A4A4A'
                      isvalidInput={this.state.isValidSendFeedback}
                      onEndEditing={() => this.validateSendFeedbackInputs("Feedback")}
                      onChangeText={value => this.onSendFeedbackValueChange("Feedback", value)} />
                  </View>
                  <View style={TourDetailStyles.ModalButtonArea}>
                    <TouchableOpacity style={TourDetailStyles.ModalButton}
                      onPress={() => this._onSendFeedback()}>
                      <Text style={TourDetailStyles.ModalButtonText}>Submit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this._onCancelSendFeedbackForm()} style={[TourDetailStyles.ModalButton, TourDetailStyles.ModalButtonSubmit]}>
                      <Text style={TourDetailStyles.ModalButtonText}>Cancel</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </Modal>
      </View >
    );
  }

  renderwinerylist = () => {
    let { login_token, tourdetail } = this.props;
    let winerydata = []
    if (tourdetail) {
      winerydata = tourdetail.Data.tourDetails;
    }

    //console.log(tourdetail);
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
              <Text style={TourDetailStyles.WineTexBottle}> <Text style={TourDetailStyles.BoldText}>Winery : </Text>{item.WineryName}</Text>
            </View>
            <View style={TourDetailStyles.WineTextDetail}>
              <Text style={TourDetailStyles.WineTexBottle}> <Text style={TourDetailStyles.BoldText}>Start Time : </Text>{this.getParsedDate(item.StartTime)}</Text>
              <Text style={TourDetailStyles.WineTexBottle}> <Text style={TourDetailStyles.BoldText}>End Time : </Text>{this.getParsedDate(item.EndTime)}</Text>
            </View>
            <View style={TourDetailStyles.WineTextDetail}>
              <Text style={TourDetailStyles.WineTexBottle}> <Text style={TourDetailStyles.BoldText}>Rating : </Text>{React_Native_Rating_Bar}</Text>
            </View>
            <View style={TourDetailStyles.WineTextDetail}>
              <Text style={TourDetailStyles.WineTexBottle}> <Text style={TourDetailStyles.BoldText}>Feedback : </Text>{item.Feedback}</Text>
            </View>
            <View style={TourDetailStyles.RedButtonBox}>
              <TouchableOpacity style={TourDetailStyles.RedButton} onPress={() => this.updateFeedback(item)}>
                <Text style={TourDetailStyles.BtnText}>Update</Text>
              </TouchableOpacity>
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
