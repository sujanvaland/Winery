import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, PermissionsAndroid, Alert, Dimensions, StyleSheet } from 'react-native';
import { Picker, Item } from "native-base";
import StartTourStyles from './StartTourStyles';
import PropTypes from 'prop-types';
import MapView, { Marker, AnimatedRegion } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Modal from 'react-native-modal';
import Geocoder from 'react-native-geocoding';
import Geolocation from 'react-native-geolocation-service';
import { TextBoxElement, OverlayActivityIndicatorElement } from "../../components";
import { Textarea } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import Toast from 'react-native-simple-toast';
import * as navigationActions from 'app/actions/navigationActions';
const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
//const LATITUDE = 40.740130;
//const LONGITUDE = -73.985440;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const GOOGLE_MAPS_APIKEY = 'AIzaSyAKKEplE__ZhgDZAKSM7-ObelAcBPX0P_M';
Geocoder.init(GOOGLE_MAPS_APIKEY);
class StartTourView extends Component {
  constructor(props) {
    super(props);
    let activedatetime = new Date();
    let isodate = activedatetime.toISOString();
    let startDatetimeFormat = this.getParsedDate(isodate);
    const { routewaypointslist } = this.props;
    // AirBnB's Office, and Apple Park
    this.state = {
      latitude: LATITUDE,
      longitude: LONGITUDE,
      sourceAddress: null,
      destinationLatitude: LATITUDE,
      destinationLongitude: LONGITUDE,
      coordinate: new AnimatedRegion({
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: 0,
        longitudeDelta: 0,
      }),
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
      },
      distance:"",
      duration:""
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
    Geocoder.from(this.state.latitude, this.state.longitude)
      .then(json => {
          //console.log(json);
          var addressComponent = json.results[0].address_components;
          var formatted_address = json.results[0].formatted_address;
          this.setState({
            sourceAddress: formatted_address
          })
          //console.log(addressComponent);
        })
      .catch(error => console.warn(error));
    
      setInterval(
        function() {
            let lat = this.state.latitude;
            let long = this.state.longitude;
            lat = lat + 0.001;
            long = long + 0.001;
            //console.log(lat,long);
            this.setState({latitude:lat,longitude:long});
            this.getCurrentLocation();
        }
        .bind(this),
        5000
      );
  }

  async getCurrentLocation(){
    if (Platform.OS === 'ios') {
      const result = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,{
        title: 'Location Permission',
        message: 'WineLovers needs access to your location',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      });

      if ("granted" === result) {
        Geolocation.getCurrentPosition(
          async (position) => {
            let currentLoc = [];
            currentLoc.push({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            })
            await this.setState({ coordinates: currentLoc });
            await this.setState({ latitude: position.coords.latitude });
            await this.setState({ longitude: position.coords.longitude });
            await this.setState({destinationLatitude:position.coords.latitude});
            await this.setState({destinationLongitude:position.coords.longitude});
            //console.log('456');
            Geocoder.from(position.coords.latitude, position.coords.longitude)
              .then(json => {
                 //console.log(json);
                 var addressComponent = json.results[0].address_components;
                 var formatted_address = json.results[0].formatted_address;
                 this.setState({
                    sourceAddress: formatted_address
                  })
                  //console.log(addressComponent);
                })
              .catch(error => console.warn(error));
          },
          (error) => {
            console.warn(error.code, error.message);
          },
          { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000000 },
        )
      }
    }else{
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
        //console.log('123');
        Geolocation.getCurrentPosition(
          async (position) => {
            let currentLoc = [];
            currentLoc.push({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            })
            await this.setState({ coordinates: currentLoc });
            await this.setState({ latitude: position.coords.latitude });
            await this.setState({ longitude: position.coords.longitude });
            await this.setState({destinationLatitude:position.coords.latitude});
            await this.setState({destinationLongitude:position.coords.longitude});
            //console.log('456');
            Geocoder.from(position.coords.latitude, position.coords.longitude)
              .then(json => {
                 //console.log(json);
                 var addressComponent = json.results[0].address_components;
                 var formatted_address = json.results[0].formatted_address;
                 this.setState({
                    sourceAddress: formatted_address
                  })
                  //console.log(addressComponent);
                })
              .catch(error => console.warn(error));
          },
          (error) => {
            console.warn(error.code, error.message);
          },
          { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000000 },
        )
      }
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
          this.setState({ latitude: parseFloat(selectedwineryDetail[0].Latitude) });
          this.setState({ longitude: parseFloat(selectedwineryDetail[0].Longitude) });
          Geocoder.from(parseFloat(selectedwineryDetail[0].Latitude), parseFloat(selectedwineryDetail[0].Longitude))
          .then(json => {
              //console.log(json);
              var addressComponent = json.results[0].address_components;
              var formatted_address = json.results[0].formatted_address;
              this.setState({
                sourceAddress: formatted_address
              })
              //console.log(addressComponent);
            })
          .catch(error => console.warn(error));

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
          this.setState({ latitude: parseFloat(selectedwineryDetail[0].Latitude) });
          this.setState({ longitude: parseFloat(selectedwineryDetail[0].Longitude) });
          Geocoder.from(parseFloat(selectedwineryDetail[0].Latitude), parseFloat(selectedwineryDetail[0].Longitude))
          .then(json => {
              //console.log(json);
              var addressComponent = json.results[0].address_components;
              var formatted_address = json.results[0].formatted_address;
              this.setState({
                sourceAddress: formatted_address
              })
              //console.log(addressComponent);
            })
          .catch(error => console.warn(error));

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
    const token = await AsyncStorage.getItem('login_token');
    if (token == null || token == undefined || token == "") {
        navigationActions.navigateToLogin();
        return;
    }
    let FeedbackData = await this._retrieveData("FeedbackData");
    let AllFeedbackData = [];
    if (FeedbackData) {
      AllFeedbackData = JSON.parse(FeedbackData);
    }
    this.props.insertTour(AllFeedbackData);
  }

  render() {

    let sourceLatitude = this.state.latitude;
    let sourceLongitude = this.state.longitude;
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
                value={this.state.sourceAddress}
                autoCapitalize={'none'}
                style={StartTourStyles.TextBox}
              />
            </View>
            <View style={StartTourStyles.PickeBox}>
              <Item picker>
                <Picker
                  selectedValue={this.state.destination}
                  placeholder="Select Destination"
                  onValueChange={(itemValue, itemIndex) => this.getdirectiontoDestination(itemValue)}>
                  <Picker.Item key="0" label="Select Destination" value="0" />
                  {
                    destinationDropdown.map((item) => {
                      return (
                        <Picker.Item key={item.Id} label={item.Name} value={item.Id} />
                      );
                    })
                  }
                </Picker>
              </Item>
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
            showUserLocation followUserLocation loadingEnabled
            style={StyleSheet.absoluteFill}
            ref={c => this.mapView = c}
            onPress={this.onMapPress}
          >
            {/* Marker for current Location */}
            <Marker.Animated
              key={`coordinate_0`}
              coordinate={{
                latitude: parseFloat(sourceLatitude),
                longitude: parseFloat(sourceLongitude),
              }}
              image={require('../../assets/img/icons8-scooter-80.png')}
              title=""
              description="" />
            {wineries.map((item, index) => {
              //console.log(item);
              return (
                <Marker.Animated
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
                </Marker.Animated>);
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
                  //console.log(`Distance: ${result.distance} km`)
                  //console.log(`Duration: ${result.duration} min.`)
                  let Distance=`Distance: ${result.distance.toFixed(2)} km`;
                  let Duration=`Duration: ${result.duration.toFixed(2)} min.`;
                  this.setState({distance:Distance,duration:Duration});

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
            
            {(this.state.distance!='' || this.state.duration!='') &&
              <TouchableOpacity style={StartTourStyles.BtnStart}>
                {this.state.distance!='' &&
                    <Text style={StartTourStyles.WhiteText}>{this.state.distance}</Text>
                }

                {this.state.duration!='' &&
                    <Text style={StartTourStyles.WhiteText}>{this.state.duration}</Text>
                }
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