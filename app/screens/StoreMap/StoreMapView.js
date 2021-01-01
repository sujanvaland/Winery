import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity,PermissionsAndroid } from 'react-native';
import StoreMapStyles from './StoreMapStyles';
import PropTypes from 'prop-types';
import {Picker} from '@react-native-picker/picker';
import { Dimensions, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Modal from 'react-native-modal';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Geolocation from 'react-native-geolocation-service';
import SplashScreen from 'react-native-splash-screen';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;

const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const GOOGLE_MAPS_APIKEY = 'AIzaSyAKKEplE__ZhgDZAKSM7-ObelAcBPX0P_M';

class StoreMapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinates: [],
      userType:0,
      wineType:0,
      showSelectWinerybtn:false,
      showFeedbackbtn:false,
      showStartbtn:false,
      isSelected: false,
      isModalVisible: false,
    };

    this.mapView = null;
  }

  componentDidMount(){
    SplashScreen.hide();
    this.getCurrentLocation();
  }

  async getCurrentLocation(){
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
              await this.setState({coordinates:currentLoc});
          },
          (error) => {
              console.warn(error.code, error.message);
          },
          {enableHighAccuracy: false, timeout: 20000, maximumAge: 10000},
      )
    }
  }

  toggleModal = () => {
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

  navigateToStartTour = () => {
    this.props.StartTour();
  }

  navigateToStoreListing = () => {
    this.props.StoreListing();
  }
  navigateToStoreMapStart = () => {
    this.props.StoreMapStart();
  }

  getWineTypeByUserType = (UserTypeId) =>{
    // this.setState({isRouteVisible:false});
    // this.setState({routewaypointslist:[]});
    this.setState({ userType: UserTypeId });
    this.props.getWineTypeByUserType(UserTypeId);
    let finalobj=null;
    this.props.ongetRoute(finalobj);
  }

  getWineryFromWineType = (WineTypeId) =>{
    // this.setState({isRouteVisible:false});
    // this.setState({routewaypointslist:[]});
    this.setState({wineType: WineTypeId,showSelectWinerybtn:true});
    this.props.getWineriesWineType([WineTypeId]);
    let finalobj=null;
    this.props.ongetRoute(finalobj);
  }
  
  render() {
    const { getallusertype ,userwinetype, wineriesbywinetype, routewaypointslist } = this.props;
    let usertypeArr = [];
    let wineryType = [];
    let wineries = [];
    let waypoints = [];
    if(getallusertype){
      usertypeArr = getallusertype;
    }
    if(userwinetype){
      wineryType = userwinetype;
    }
    
    //console.log(routewaypointslist);
    if(routewaypointslist){
      //console.log("123");
      wineries = routewaypointslist.winerylist.filter(function(item){
        return item.checked;
      });
      if(wineries.length > 0){
        wineries.map((item, index) =>{
          waypoints.push({
            latitude: parseFloat(item.Latitude),
            longitude: parseFloat(item.Longitude),
          })
        })
      }
    }
    else
    {
      //console.log("456");
      if(wineriesbywinetype){
        wineries = wineriesbywinetype;
      }
    }

    
    
    let LATITUDE = 40.740130;
    let LONGITUDE = -73.985440;
    // if(this.state.coordinates.length > 0){
    //   LATITUDE = this.state.coordinates[0].latitude;
    //   LONGITUDE = this.state.coordinates[0].longitude;
    // }

    // console.log("--------LATITUDE,LONGITUDE------");
    
    return (
      <View style={StoreMapStyles.InnerContainer}>
        <View style={StoreMapStyles.SearchStore}>
          <View style={StoreMapStyles.PickeBoxMain}>
            <View style={StoreMapStyles.PickeBox}>
              <Picker
                selectedValue={this.state.userType}
                style={StoreMapStyles.PickeElement}
                textStyle={{fontSize:20}}
                onValueChange={(itemValue, itemIndex) =>this.getWineTypeByUserType(itemValue)}>
                  <Picker.Item label="Select UserType" value="0" /> 
                {
                    usertypeArr.map((type)=>{
                       return(
                        <Picker.Item key={type.Id} label={type.UserTypeName} value={type.Id} />         
                       );
                    })
                }
              </Picker>
            </View>
            <View style={StoreMapStyles.PickeBox}>
              <Picker
                selectedValue={this.state.wineType}
                style={StoreMapStyles.PickeElement}
                onValueChange={(itemValue, itemIndex) => this.getWineryFromWineType(itemValue)}>
                  <Picker.Item label="Select WineType" value="0" /> 
                {
                  wineryType && wineryType.length > 0 &&
                    wineryType.map((type)=>{
                       return(
                        <Picker.Item key={type.Id} label={type.WineTypeName} value={type.WineTypeId} />         
                       );
                    })
                }
              </Picker>
            </View>
          </View>
        </View>
        <View style={StoreMapStyles.MapViewbox}>
          <MapView
            initialRegion={{
              latitude: LATITUDE,
              longitude: LONGITUDE,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}
            style={StyleSheet.absoluteFill}
            ref={c => this.mapView = c}
            onPress={this.onMapPress}
          >
            {/* Marker for current Location */}
            {/* { (this.state.userType == 0 || this.state.wineType == 0) && */}
              <MapView.Marker
                key={`coordinate_0`} 
                coordinate={{
                  latitude: parseFloat(LATITUDE),
                  longitude: parseFloat(LONGITUDE),
                }}
                image={require('../../assets/img/icons8-scooter-80.png')}
                title="" 
                description="">
              </MapView.Marker>
            {/* } */}

            {/* Markers for Winery Store */}
            { this.state.userType > 0 && this.state.wineType > 0 &&
              wineries.map((item, index) =>{
                //console.log(item);
                return(<MapView.Marker
                  key={`coordinate_${index}`} 
                  coordinate={{
                    latitude: parseFloat(item.Latitude),
                    longitude: parseFloat(item.Longitude),
                  }}
                  title={item.name} 
                  description={item.Description}>
                  <MapView.Callout>
                    <View style={StoreMapStyles.MapPopup}>
                      <Text style={StoreMapStyles.MapImageBox}>
                        <Image source={require('../../assets/img/imagebar.jpg')} resizeMode="cover" style={StoreMapStyles.StoreImage} />
                      </Text>
                      <Text style={StoreMapStyles.StoreNameBox}>
                      {item.name}{"\n"}{item.AddressLine1}{"\n"}{item.Email}{"\n"}{item.Mobile}{"/"}{item.PhoneNumber} 
                      </Text>
                    </View>
                  </MapView.Callout>
                </MapView.Marker>);
              }
              )
            }
            
            {/* Map Directions */}
            {(this.state.userType > 0 && this.state.wineType > 0 && waypoints.length > 0) && (
              <MapViewDirections
                origin={{
                  latitude:LATITUDE,
                  longitude:LONGITUDE
                }}
                waypoints={waypoints}
                destination={{
                  latitude:LATITUDE,
                  longitude:LONGITUDE
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
                  console.log(result);
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
        <View style={StoreMapStyles.BototmButton}>
          <View style={StoreMapStyles.FlexBox}>
            {/* {
              this.state.showFeedbackbtn &&
              <TouchableOpacity style={StoreMapStyles.BtnFeedback} onPress={this.toggleModal} >
                <Text style={StoreMapStyles.WhiteText}>Feedback</Text>
              </TouchableOpacity>
            } */}
            {
              this.state.showSelectWinerybtn &&
              <TouchableOpacity style={StoreMapStyles.BtnFeedback} onPress={this.navigateToStoreListing}>
                <Text style={StoreMapStyles.WhiteText}>Select Winery</Text>
              </TouchableOpacity>
            }
          </View>
          {
            this.state.userType > 0 && this.state.wineType > 0 && waypoints.length > 0 &&
            <TouchableOpacity style={StoreMapStyles.BtnStart} onPress={this.navigateToStartTour}>
              <Text style={StoreMapStyles.WhiteText}>Start</Text>
            </TouchableOpacity>
          }
        </View>

        {/* <Modal transparent={true} isVisible={this.state.isModalVisible} style={StoreMapStyles.FeedbackModalMain}>
          <View style={StoreMapStyles.FeedbackModal}>
            <View style={StoreMapStyles.ModalHeader}>
              <Text style={StoreMapStyles.ModalHeaderText}>Give Your Feedback</Text>
            </View>
            <View>
              <View style={StoreMapStyles.PickerBox}>
                <Picker
                  style={StoreMapStyles.PickeElementModal}
                >
                  <Picker.Item value="" label="Select Wines" />
                  <Picker.Item value="" label="Select" />
                </Picker>
              </View>
              <View style={StoreMapStyles.RatingBox}>
                <Text style={StoreMapStyles.RatingBoxTitle}>Give Ratings</Text>
                <Rating
                  ratingCount={5}
                  imageSize={25}
                  ratingColor='#3498db'
                  //showRating
                  onFinishRating={this.ratingCompleted}
                />
              </View>
              <View style={StoreMapStyles.RatingBox}>
                <Text style={StoreMapStyles.RatingBoxTitle}>Note</Text>
                <TextInput style={StoreMapStyles.RatingBoxNotedesc}>

                </TextInput>
              </View>
              <View style={StoreMapStyles.ModalButtonArea}>
                <TouchableOpacity style={StoreMapStyles.ModalButton}>
                  <Text style={StoreMapStyles.ModalButtonText}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.toggleModal} style={[StoreMapStyles.ModalButton, StoreMapStyles.ModalButtonSubmit]}>
                  <Text style={StoreMapStyles.ModalButtonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal> */}


      </View>


    );
  }
}

StoreMapView.propTypes = {
  onLogin: PropTypes.func
};

export default StoreMapView;