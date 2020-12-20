import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity,PermissionsAndroid, ToastAndroid } from 'react-native';
import StoreMapStyles from './StoreMapStyles';
import PropTypes from 'prop-types';
import {Picker} from '@react-native-picker/picker';
import { Dimensions, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Modal from 'react-native-modal';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Geolocation from 'react-native-geolocation-service';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;

const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const GOOGLE_MAPS_APIKEY = 'AIzaSyAKKEplE__ZhgDZAKSM7-ObelAcBPX0P_M';

class StoreMapView extends Component {
  constructor(props) {
    super(props);

    // AirBnB's Office, and Apple Park
    this.state = {
      coordinates: [
        {
          latitude: 22.253214,
          longitude: 73.214607,
        },
        {
          latitude: 22.307838,
          longitude: 73.181553,
        },
        {
          latitude: 22.311713,
          longitude: 73.138204,
        },
        {
          latitude: 22.326322,
          longitude: 73.226840
        }
      ],
      //coordinates: [],
      userType:"",
      showSelectWinerybtn:false,
      showFeedbackbtn:false,
      showStartbtn:false,
      isSelected: false,
      isModalVisible: false,
    };

    this.mapView = null;
  }

  componentDidMount(){
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
    console.log("---------------Permission-------");
    console.log(granted === PermissionsAndroid.RESULTS.GRANTED);
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
          {enableHighAccuracy: false, timeout: 20000, maximumAge: 1000},
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

  navigateToStoreListing = () => {
    this.props.StoreListing();
  }

  getWineTypeByUserType = (UserTypeId) =>{
    this.props.getWineTypeByUserType(UserTypeId);
  }

  getWineryFromWineType = (WineTypeId) =>{
    this.setState({wineType: WineTypeId,showSelectWinerybtn:true})
    this.props.getWineriesWineType([WineTypeId]);
  }
  
  render() {
    const { getallusertype ,userwinetype, wineriesbywinetype } = this.props;
    let usertypeArr = [];
    let wineryType = [];
    let wineries = [
        {
          latitude: 22.253214,
          longitude: 73.214607,
        },
        {
          latitude: 22.307838,
          longitude: 73.181553,
        },
        {
          latitude: 22.311713,
          longitude: 73.138204,
        },
        {
          latitude: 22.326322,
          longitude: 73.226840
        }
      ];
    let waypoints = [{
          latitude: 22.253214,
          longitude: 73.214607,
        },
        {
          latitude: 22.307838,
          longitude: 73.181553,
        },
        {
          latitude: 22.311713,
          longitude: 73.138204,
        },
        {
          latitude: 22.326322,
          longitude: 73.226840
        }]
    if(getallusertype){
      usertypeArr = getallusertype;
    }
    if(userwinetype){
      wineryType = userwinetype;
    }
    // if(wineriesbywinetype){
    //   wineries = wineriesbywinetype;
    //   if(wineries.length > 0){
    //     wineries.map((item, index) =>{
    //       waypoints.push({
    //         latitude: parseFloat(item.Latitude),
    //         longitude: parseFloat(item.Longitude),
    //       })
    //     })
    //   }
    // }
    
    let LATITUDE = 22.253214;
    let LONGITUDE = 73.214607;
    if(this.state.coordinates.length > 0){
      LATITUDE = this.state.coordinates[0].latitude;
      LONGITUDE = this.state.coordinates[0].longitude;
    }

    // console.log("--------LATITUDE,LONGITUDE------");
    // console.log(wineries);
    return (
      <View style={StoreMapStyles.InnerContainer}>
        <View style={StoreMapStyles.SearchStore}>
          <View style={StoreMapStyles.PickeBoxMain}>
            <View style={StoreMapStyles.PickeBox}>
              <Picker
                selectedValue={this.state.userType}
                style={StoreMapStyles.PickeElement}
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
                selectedValue={this.state.userType}
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
            {wineries.map((item, index) =>{
                  
                  <MapView.Marker
                    key={`coordinate_${index}`} coordinate={{
                      latitude: item.latitude,
                      longitude: item.latitude,
                    }}
                    title={"Test"} 
                    description={"test"}>
                    <MapView.Callout>
                      <View style={StoreMapStyles.MapPopup}>
                        <Text style={StoreMapStyles.MapImageBox}>
                          <Image source={require('../../assets/img/imagebar.jpg')} resizeMode="cover" style={StoreMapStyles.StoreImage} />
                        </Text>
                        <Text style={StoreMapStyles.StoreNameBox}>
                        {"test"}
                        {/* {"\n"}{item.AddressLine1}{"\n"}{item.Email}{"\n"}{item.Mobile}{"/"}{item.PhoneNumber} */}
                        </Text>
                      </View>
                    </MapView.Callout>
                  </MapView.Marker>
                }
            )}
            {(this.state.coordinates.length >= 2) && (
              <MapViewDirections
                origin={{
                  latitude: 22.253214,
                  longitude: 73.214607,
                }}
                waypoints={[
                  {
          latitude: 22.307838,
          longitude: 73.181553,
        },
        {
          latitude: 22.311713,
          longitude: 73.138204,
        }
                ]}
                destination={{
                  latitude: 22.253214,
                  longitude: 73.214607,
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
        <View style={StoreMapStyles.BototmButton}>
          <View style={StoreMapStyles.FlexBox}>
            {
              this.state.showFeedbackbtn &&
              <TouchableOpacity style={StoreMapStyles.BtnFeedback} onPress={this.toggleModal} >
                <Text style={StoreMapStyles.WhiteText}>Feedback</Text>
              </TouchableOpacity>
            }
            {
              this.state.showSelectWinerybtn &&
              <TouchableOpacity style={StoreMapStyles.BtnFeedback} onPress={this.navigateToStoreListing}>
                <Text style={StoreMapStyles.WhiteText}>Select Winery</Text>
              </TouchableOpacity>
            }
          </View>
          {
            this.state.showStartbtn &&
            <TouchableOpacity style={StoreMapStyles.BtnStart}>
              <Text style={StoreMapStyles.WhiteText}>Start</Text>
            </TouchableOpacity>
          }
        </View>

        <Modal transparent={true} isVisible={this.state.isModalVisible} style={StoreMapStyles.FeedbackModalMain}>
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

            {/* <Button title="Hide modal" onPress={this.toggleModal} /> */}
          </View>
        </Modal>


      </View>


    );
  }
}

StoreMapView.propTypes = {
  onLogin: PropTypes.func
};

export default StoreMapView;
