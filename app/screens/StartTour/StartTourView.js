import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, PermissionsAndroid, ToastAndroid, Alert } from 'react-native';
import StartTourStyles from './StartTourStyles';
import PropTypes from 'prop-types';
import { Picker } from '@react-native-picker/picker';
import { Dimensions, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Modal from 'react-native-modal';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Geolocation from 'react-native-geolocation-service';
import { TextBoxElement, OverlayActivityIndicatorElement } from "../../components";
import { Textarea } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import Toast from 'react-native-simple-toast';
import * as navigationActions from 'app/actions/navigationActions';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;

const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const GOOGLE_MAPS_APIKEY = 'AIzaSyAKKEplE__ZhgDZAKSM7-ObelAcBPX0P_M';

class StartTourView extends Component {
  constructor(props) {
    super(props);
    let activedatetime = new Date();
    let isodate = activedatetime.toISOString();
    let startDatetimeFormat = this.getParsedDate(isodate);
    const { routewaypointslist } = this.props;
    // AirBnB's Office, and Apple Park
    this.state = {
      sourceLatitude: 40.740130,
      sourceLongitude: -73.985440,
      destinationLatitude: 40.740130,
      destinationLongitude: -73.985440,
      nextwineries: routewaypointslist,
      coordinates: [],
      destinationname: "",
      destination: 0,
      isModalVisible: false,
      showNextbtn: false,
      showFinishbtn: true,
      showsendfeedbackForm: false,
      isValidRating: true,
      isValidSendFeedback: true,
      Max_Rating: 5,
      postSendFeedback: {
        WineryId: 0,
        Rating: 0,
        Feedback: '',
        StartTime: startDatetimeFormat,
        EndTime: ''
      }
    };

    this.mapView = null;

    //Filled Star. You can also give the path from local
    this.Star = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
    //Empty Star. You can also give the path from local
    this.Star_With_Border = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';
  }

  getParsedDate(strDate) {//get date formate
    if (strDate != "") {
      var strSplitDate = String(strDate).split('T');
      var dateArray = strSplitDate[0].split('-');
      var TimeArray = strSplitDate[1];
      var newstrSplitTime = String(TimeArray).split('Z');
      var newtimeArray = newstrSplitTime[0].split('.');
      var newtimeArray = newtimeArray[0];
      let date = dateArray[0] + "-" + dateArray[1] + "-" + dateArray[2] + " " + newtimeArray;
      return date;
    }
    return "";
  }

  componentDidMount() {
    this.getCurrentLocation();
    // const { routewaypointslist } = this.props;
    // console.log(routewaypointslist);
    // if(routewaypointslist){
    //   let wineries = routewaypointslist.winerylist.filter(function(item){
    //     return item.checked;
    //   });
    //   this.setState({isRouteVisible:true});
    //   this.setState({routewaypointslist:wineries});
    // }
  }

  async getCurrentLocation() {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      {
        title: 'Location Permission',
        message: 'Winery Lovers needs access to your location',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      Geolocation.getCurrentPosition(
        async (position) => {
          let currentLoc = [];
          currentLoc.push({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          })
          await this.setState({ coordinates: currentLoc });
          //await this.setState({sourceLatitude:position.coords.latitude});
          //await this.setState({sourceLongitude:position.coords.longitude});
          //await this.setState({destinationLatitude:position.coords.latitude});
          //await this.setState({destinationLongitude:position.coords.longitude});

        },
        (error) => {
          console.warn(error.code, error.message);
        },
        { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 },
      )
    }
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  _onCancelSendFeedbackForm = () => {
    let activedatetime = new Date();
    let isodate = activedatetime.toISOString();
    let startDatetimeFormat = this.getParsedDate(isodate);
    this.setState({
      postSendFeedback: {
        WineryId: 0,
        Rating: 0,
        Feedback: '',
        StartTime: startDatetimeFormat,
        EndTime: ''
      }
    });
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };


  onMapPress = (e) => {
    this.setState({
      coordinates: [
        ...this.state.coordinates,
        e.nativeEvent.coordinate,
      ],
    });
  }

  markerClick = () => {
    console.log("clicked");
  }

  getdirectiontoDestination = (destinationId) => {
    if (destinationId > 0) {
      const { routewaypointslist } = this.props;
      let nextwineries = routewaypointslist.winerylist.filter(function (item) {
        return (item.checked && item.Id == destinationId);
      });

      let obj = nextwineries;
      let finalobj = {
        winerylist: obj,
        isRouteVisible: true
      }
      //console.log(nextwineries);
      this.setState({ nextwineries: finalobj });
      this.setState({ destination: destinationId, destinationname: nextwineries[0].Name, showNextbtn: true, showFinishbtn: true });
      this.setState({ destinationLatitude: parseFloat(nextwineries[0].Latitude) });
      this.setState({ destinationLongitude: parseFloat(nextwineries[0].Longitude) });

      let activedatetime = new Date();
      let isodate = activedatetime.toISOString();
      let startDatetimeFormat = this.getParsedDate(isodate);
      this.setState(prevState => ({
        postSendFeedback: {                   // object that we want to update
          ...prevState.postSendFeedback, // keep all other key-value pairs
          'WineryId': destinationId,
          'StartTime': startDatetimeFormat
        }
      }), function () {
      });
    }
    else {
      const { routewaypointslist } = this.props;
      nextwineries = routewaypointslist.winerylist.filter(function (item) {
        return (item.checked);
      });

      let obj = nextwineries;
      let finalobj = {
        winerylist: obj,
        isRouteVisible: true
      }

      this.setState({ nextwineries: finalobj });
      this.setState({ destination: 0, destinationname: '', showNextbtn: false, showFinishbtn: true });

      let activedatetime = new Date();
      let isodate = activedatetime.toISOString();
      let startDatetimeFormat = this.getParsedDate(isodate);
      this.setState(prevState => ({
        postSendFeedback: {                   // object that we want to update
          ...prevState.postSendFeedback, // keep all other key-value pairs
          'WineryId': 0,
          'Rating': 0,
          'Feedback': '',
          'StartTime': startDatetimeFormat,
          'EndTime': ''
        }
      }), function () {
      });
    }

  }

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
      let FeedbackData = await this._retrieveData("FeedbackData");
      if (FeedbackData) {
        FeedbackData = JSON.parse(FeedbackData);
        let activedatetime = new Date();
        let isodate = activedatetime.toISOString();
        let endDatetimeFormat = this.getParsedDate(isodate);
        this.setState(prevState => ({
          postSendFeedback: {                   // object that we want to update
            ...prevState.postSendFeedback, // keep all other key-value pairs
            'SequenceOrder': parseInt(FeedbackData.length) + 1,
            'EndTime': endDatetimeFormat
          }
        }), function () {

          FeedbackData.push(this.state.postSendFeedback);
          this._storeData("FeedbackData", JSON.stringify(FeedbackData));

          let destinationId = this.state.destination;
          const { routewaypointslist } = this.props;
          let nextwineries = routewaypointslist.winerylist.filter(function (item) {
            return (item.checked && item.Id != destinationId);
          });

          let obj = nextwineries;
          let finalobj = {
            winerylist: obj,
            isRouteVisible: true
          }

          this.setState({ nextwineries: finalobj });
          this.setState({ destination: 0, destinationname: '', showNextbtn: false, showFinishbtn: true });

          let startDatetimeFormat = this.getParsedDate(isodate);
          this.setState({
            postSendFeedback: {
              WineryId: 0,
              Rating: 0,
              Feedback: '',
              StartTime: startDatetimeFormat,
              EndTime: ''
            }
          });

          this.props.ongetRoute(finalobj);

          let selectedwineryDetail = routewaypointslist.winerylist.filter(function (item) {
            return (item.checked && item.Id == destinationId);
          });
          this.setState({ sourceLatitude: parseFloat(selectedwineryDetail[0].Latitude) });
          this.setState({ sourceLongitude: parseFloat(selectedwineryDetail[0].Longitude) });

          this.setState({ isModalVisible: false });
        });

      }
      else {
        let activedatetime = new Date();
        let isodate = activedatetime.toISOString();
        let endDatetimeFormat = this.getParsedDate(isodate);

        this.setState(prevState => ({
          postSendFeedback: {                   // object that we want to update
            ...prevState.postSendFeedback, // keep all other key-value pairs
            'SequenceOrder': 1,
            'EndTime': endDatetimeFormat
          }
        }), function () {

          let SendFeedback = [this.state.postSendFeedback];
          this._storeData("FeedbackData", JSON.stringify(SendFeedback));

          let destinationId = this.state.destination;
          const { routewaypointslist } = this.props;
          let nextwineries = routewaypointslist.winerylist.filter(function (item) {
            return (item.checked && item.Id != destinationId);
          });

          let obj = nextwineries;
          let finalobj = {
            winerylist: obj,
            isRouteVisible: true
          }

          this.setState({ nextwineries: finalobj });
          this.setState({ destination: 0, destinationname: '', showNextbtn: false, showFinishbtn: true });

          let startDatetimeFormat = this.getParsedDate(isodate);
          this.setState({
            postSendFeedback: {
              WineryId: 0,
              Rating: 0,
              Feedback: '',
              StartTime: startDatetimeFormat,
              EndTime: ''
            }
          });

          this.props.ongetRoute(finalobj);

          let selectedwineryDetail = routewaypointslist.winerylist.filter(function (item) {
            return (item.checked && item.Id == destinationId);
          });
          this.setState({ sourceLatitude: parseFloat(selectedwineryDetail[0].Latitude) });
          this.setState({ sourceLongitude: parseFloat(selectedwineryDetail[0].Longitude) });

          this.setState({ isModalVisible: false });
        });

      }

      console.log(FeedbackData);
    }
  };

  _storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      return value;
    } catch (error) {
      // Error saving data
      return null;
    }
  };

  _retrieveData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return value
      }
    } catch (error) {
    }
  };

  _onFinishTour = async () => {
    Alert.alert(
      "Finish Tour",
      "Are you sure to finish this tour?",
      [
        { text: "Cancel", style: 'cancel' },
        {
          text: "Ok", onPress: () => {
            this.setAsFinishTour();
          }, style: 'destructive'
        }
      ],
      { cancelable: false }
    );
  };

  setAsFinishTour = async () => {
    let FeedbackData = await this._retrieveData("FeedbackData");
    let AllFeedbackData = [];
    if (FeedbackData) {
      AllFeedbackData = FeedbackData;
    }
    this.props.insertTour(AllFeedbackData);
  }

  render() {

    let sourceLatitude = this.state.sourceLatitude;
    let sourceLongitude = this.state.sourceLongitude;
    let destinationLatitude = this.state.destinationLatitude;
    let destinationLongitude = this.state.destinationLongitude;


    const { routewaypointslist } = this.props;
    let destinationDropdown = [];
    let wineries = this.state.nextwineries;
    let waypoints = [
      {
        latitude: parseFloat(sourceLatitude),
        longitude: parseFloat(sourceLongitude),
      }
    ];

    if (routewaypointslist) {
      //console.log("123");
      destinationDropdown = routewaypointslist.winerylist.filter(function (item) {
        return item.checked;
      });
    }

    if (wineries) {
      //console.log("123");
      wineries = wineries.winerylist.filter(function (item) {
        return item.checked;
      });
      if (wineries.length > 0) {
        wineries.map((item, index) => {
          waypoints.push({
            latitude: parseFloat(item.Latitude),
            longitude: parseFloat(item.Longitude),
          })
        })
      }
    }

    let React_Native_Rating_Bar = [];
    //Array to hold the filled or empty Stars
    for (var i = 1; i <= this.state.Max_Rating; i++) {
      React_Native_Rating_Bar.push(
        <TouchableOpacity
          activeOpacity={0.7}
          key={i}
          onPress={this.UpdateRating.bind(this, i)}>
          <Image
            style={StartTourStyles.StarImageforRate}
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
      <View style={StartTourStyles.InnerContainer}>
        <View style={StartTourStyles.SearchStore}>
          <View style={StartTourStyles.PickeBoxMain}>
            <View style={StartTourStyles.PickeBox}>
              <TextInput
                placeholder={"Source"}
                value={sourceLatitude.toString()}
                autoCapitalize={'none'}
                style={StartTourStyles.TextBox}
              />
            </View>
            <View style={StartTourStyles.PickeBox}>
              <Picker
                selectedValue={this.state.destination}
                style={StartTourStyles.PickeElement}
                onValueChange={(itemValue, itemIndex) => this.getdirectiontoDestination(itemValue)}>
                <Picker.Item label="Select Destination" value="0" />
                {
                  destinationDropdown && destinationDropdown.length > 0 &&
                  destinationDropdown.map((item) => {
                    return (
                      <Picker.Item key={item.Id} label={item.Name} value={item.Id} />
                    );
                  })
                }
              </Picker>
            </View>
          </View>
        </View>
        <View style={StartTourStyles.MapViewbox}>
          <MapView
            initialRegion={{
              latitude: sourceLatitude,
              longitude: sourceLongitude,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}
            style={StyleSheet.absoluteFill}
            ref={c => this.mapView = c}
            onPress={this.onMapPress}
          >
            {/* Marker for current Location */}
            <MapView.Marker
              key={`coordinate_0`}
              coordinate={{
                latitude: parseFloat(sourceLatitude),
                longitude: parseFloat(sourceLongitude),
              }}
              image={require('../../assets/img/icons8-scooter-80.png')}
              title=""
              description="">
            </MapView.Marker>

            {/* Markers for Winery Store */}
            {wineries.map((item, index) => {
              //console.log(item);
              return (<MapView.Marker
                key={`coordinate_${index}`}
                coordinate={{
                  latitude: parseFloat(item.Latitude),
                  longitude: parseFloat(item.Longitude),
                }}
                title={item.name}
                description={item.Description}>
                <MapView.Callout>
                  <View style={StartTourStyles.MapPopup}>
                    <Text style={StartTourStyles.MapImageBox}>
                      <Image source={require('../../assets/img/imagebar.jpg')} resizeMode="cover" style={StartTourStyles.StoreImage} />
                    </Text>
                    <Text style={StartTourStyles.StoreNameBox}>
                      {item.name}{"\n"}{item.AddressLine1}{"\n"}{item.Email}{"\n"}{item.Mobile}{"/"}{item.PhoneNumber}
                    </Text>
                  </View>
                </MapView.Callout>
              </MapView.Marker>);
            }
            )
            }

            {/* Map Directions */}
            {(waypoints.length > 0) && (
              <MapViewDirections
                origin={{
                  latitude: sourceLatitude,
                  longitude: sourceLongitude
                }}
                waypoints={waypoints}
                destination={{
                  latitude: destinationLatitude,
                  longitude: destinationLongitude
                }}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={3}
                strokeColor="blue"
                optimizeWaypoints={true}
                mode={'DRIVING'}
                onStart={(params) => {
                  console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
                }}

                onReady={result => {
                  console.log(`Distance: ${result.distance} km`)
                  console.log(`Duration: ${result.duration} min.`)

                  this.mapView.fitToCoordinates(result.coordinates, {
                    edgePadding: {
                      right: (width / 20),
                      bottom: (height / 20),
                      left: (width / 20),
                      top: (height / 20),
                    }
                  });
                }}
                onError={(errorMessage) => {
                  // console.log('GOT AN ERROR');
                }}
              />
            )}
          </MapView>
        </View>
        {
          waypoints.length > 0 &&
          <View style={StartTourStyles.BototmButton}>
            {this.state.showNextbtn &&
              <View style={StartTourStyles.FlexBox}>
                <TouchableOpacity style={StartTourStyles.BtnFeedback} onPress={this.toggleModal} >
                  <Text style={StartTourStyles.WhiteText}>Next</Text>
                </TouchableOpacity>
              </View>
            }

            {this.state.showFinishbtn &&
              <TouchableOpacity style={StartTourStyles.BtnStart} onPress={() => this._onFinishTour()}>
                <Text style={StartTourStyles.WhiteText}>Finish</Text>
              </TouchableOpacity>
            }
          </View>
        }

        <Modal transparent={true} isVisible={this.state.isModalVisible} style={StartTourStyles.FeedbackModalMain}>
          <View style={StartTourStyles.FeedbackModal}>
            <View style={StartTourStyles.ModalHeader}>
              <Text style={StartTourStyles.ModalHeaderText}>Give Your Feedback</Text>
            </View>
            <View style={StartTourStyles.FeedbackFormBoxMain}>
              <View style={StartTourStyles.FeedbackFormBox}>
                <View style={StartTourStyles.TextBoxcontainer}>
                  <Text style={StartTourStyles.RatingBoxTitle}>Winery Name</Text>
                  <Text style={StartTourStyles.RatingBoxTitleValue}>{this.state.destinationname}</Text>
                </View>
                <View style={StartTourStyles.RatingBox}>
                  <Text style={StartTourStyles.RatingBoxTitle}>Give Ratings</Text>
                  <View style={StartTourStyles.RatingsBoxforRating}>
                    {React_Native_Rating_Bar}
                  </View>
                </View>
                <View style={StartTourStyles.RatingBox}>
                  <Text style={StartTourStyles.RatingBoxTitle}>Feedback</Text>
                  <Textarea placeholder="Write Feedback"
                    style={[this.state.isValidSendFeedback ? StartTourStyles.BorderGrey : StartTourStyles.BorderRed, StartTourStyles.RatingBoxNotedesc]}
                    rowSpan={3}
                    value={this.state.postSendFeedback.Feedback}
                    placeholderTextColor='#4A4A4A'
                    isvalidInput={this.state.isValidSendFeedback}
                    onEndEditing={() => this.validateSendFeedbackInputs("Feedback")}
                    onChangeText={value => this.onSendFeedbackValueChange("Feedback", value)} />
                </View>
                <View style={StartTourStyles.ModalButtonArea}>
                  <TouchableOpacity style={StartTourStyles.ModalButton}
                    onPress={() => this._onSendFeedback()}>
                    <Text style={StartTourStyles.ModalButtonText}>Submit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this._onCancelSendFeedbackForm()} style={[StartTourStyles.ModalButton, StartTourStyles.ModalButtonSubmit]}>
                    <Text style={StartTourStyles.ModalButtonText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>

      </View>


    );
  }
}

StartTourView.propTypes = {
  onLogin: PropTypes.func
};

export default StartTourView;