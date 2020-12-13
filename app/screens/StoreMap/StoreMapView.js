import React, { Component } from 'react';
import { View, Text, Image, StatusBar, Picker, CheckBox, TouchableOpacity, ImageBackground, Keyboard, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import StoreMapStyles from './StoreMapStyles';
import globalStyles from '../../assets/css/globalStyles';
import PropTypes from 'prop-types';
import { TextBoxElement, TextBoxElementLogin, TextBoxElementChangepass } from "../../components";
import Resource_EN from '../../config/Resource_EN';
import { ScrollView } from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import { Dimensions, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.771707;
const LONGITUDE = -122.4053769;
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

      isSelected: false
    };

    this.mapView = null;
  }

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

  render() {
    return (
      <View style={StoreMapStyles.InnerContainer}>
        <View style={StoreMapStyles.SearchStore}>
          <View style={StoreMapStyles.PickeBoxMain}>

            <View style={StoreMapStyles.PickeBox}>
              <Picker
                style={StoreMapStyles.PickeElement}
              >
                <Picker.Item value="" label="Location" />
                <Picker.Item value="" label="Select" />
              </Picker>
            </View>
            <View style={StoreMapStyles.PickeBox}>
              <Picker
                style={StoreMapStyles.PickeElement}
              >
                <Picker.Item value="" label="Wines" />
                <Picker.Item value="" label="Select" />
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
            {this.state.coordinates.map((coordinate, index) =>
              <MapView.Marker
                key={`coordinate_${index}`} coordinate={coordinate}
                title={"Winery 1"}
                description={"Windery desc 1"}>
                <MapView.Callout tooltip>
                  {/* <TouchableHighlight onPress={() => this.markerClick()} underlayColor='#dddddd'> */}
                  <View style={StoreMapStyles.MapPopup}>

                    <Text style={StoreMapStyles.MapImageBox}>

                      <Image source={require('../../assets/img/imagebar.jpg')} resizeMode="cover" style={StoreMapStyles.StoreImage} />
                    </Text>

                    <Text style={StoreMapStyles.StoreNameBox}>
                      <CheckBox />
                      {"Winery 1"}{"\n"}{"Windery desc 1"}</Text>
                  </View>
                  {/* </TouchableHighlight> */}
                </MapView.Callout>
              </MapView.Marker>
            )}
            {(this.state.coordinates.length >= 2) && (
              <MapViewDirections
                origin={{
                  latitude: 22.253214,
                  longitude: 73.214607,
                }}
                waypoints={[
                  {
                    latitude: 22.289414,
                    longitude: 73.128661,
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
            <TouchableOpacity style={StoreMapStyles.BtnFeedback}>
              <Text style={StoreMapStyles.WhiteText}>Feedback</Text>
            </TouchableOpacity>
            <TouchableOpacity style={StoreMapStyles.BtnFeedback} onPress={this.navigateToStoreListing}>
              <Text style={StoreMapStyles.WhiteText}>Select Winery</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={StoreMapStyles.BtnStart}>
            <Text style={StoreMapStyles.WhiteText}>Start</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

StoreMapView.propTypes = {
  onLogin: PropTypes.func
};

export default StoreMapView;
