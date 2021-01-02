import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native';
import PersonalDetailstyles from './Styles';
import { SliderBox } from "react-native-image-slider-box";
import { Avatar, Button, IconButton, Card, Title, Paragraph, List } from 'react-native-paper';
import globalStyles from '../../assets/css/globalStyles';
import Icon from 'react-native-ionicons';
import SplashScreen from 'react-native-splash-screen';
import * as navigationActions from '../../actions/navigationActions';
import AsyncStorage from '@react-native-community/async-storage';
import { OverlayActivityIndicatorElement} from '../../components';
import { get } from 'lodash';
import {NavigationEvents} from 'react-navigation';



class PersonalDetailView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customername:"",
      customeremail:""
    }
  }

  _retrieveData = async (key) => {
      try {
          const value = await AsyncStorage.getItem(key);
          if (value !== null) {
              return value
          }
      } catch (error) {
      }
  };

  async componentDidMount() {
    SplashScreen.hide();
    let customername = await this._retrieveData("customername");
    let customeremail = await this._retrieveData("customeremail");
    //console.log("customername");
    //console.log(customername);
    // console.log("customeremail");
    // console.log(customeremail);
    this.setState({
        customername: customername,
        customeremail: customeremail
    });
    
  }
  
  navigateToEditProfile = () => {
    this.props.navigation.push('EditProfile');
    //navigationActions.navigateToEditProfile();
  }


  render() {
    const { loading } = this.props;
    return (
      <View style={PersonalDetailstyles.container}>
        <NavigationEvents onDidFocus={() => this.componentDidMount()} />
        {get(loading, 'isLoading') && <OverlayActivityIndicatorElement />}
        <ScrollView>
          <View style={PersonalDetailstyles.InnerContainer}>
            <View style={PersonalDetailstyles.MyprofileBox}>
              {/* <View style={PersonalDetailstyles.ProfileBox}>
                <Image source={require('../../assets/img/img_avtar.jpg')} resizeMode="contain" style={PersonalDetailstyles.ProfilePic} />
              </View> */}
              <View style={PersonalDetailstyles.ProfileDetail}>
                <Text style={[PersonalDetailstyles.NameBox, globalStyles.FontRegular]}>{this.state.customername}</Text>
                {/* <Text style={[PersonalDetailstyles.LocationBox, globalStyles.FontRegular]}>San Francisco, CA</Text> */}
              </View>

              <TouchableOpacity style={PersonalDetailstyles.btnEditProfile} onPress={() => this.navigateToEditProfile()}>
                <Image source={require('../../assets/img/icon_profileedit.png')} resizeMode="contain" style={PersonalDetailstyles.ProfileEdit} />
              </TouchableOpacity>
            </View>
            <View style={[PersonalDetailstyles.ContainerMargin]}>
              <View style={PersonalDetailstyles.WhiteBox}>
                {/* <TouchableOpacity style={PersonalDetailstyles.btnEditProfile} onPress={() => this.navigateToEditProfile()}>
                  <Image source={require('../../assets/img/icon_contactedit.png')} resizeMode="contain" style={[PersonalDetailstyles.ProfileEdit, PersonalDetailstyles.ProfileEditSmall]} />
                </TouchableOpacity> */}
                <View style={PersonalDetailstyles.ProfileContactdetal}>
                  <Image source={require('../../assets/img/icon_email.png')} resizeMode="contain" style={PersonalDetailstyles.IconAddress} />
                  <Text style={[PersonalDetailstyles.EmailText, globalStyles.FontRegular]}>{this.state.customeremail}</Text>
                </View>
                {/* <View style={PersonalDetailstyles.ProfileContactdetal}>
                  <Image source={require('../../assets/img/icon_phone.png')} resizeMode="contain" style={PersonalDetailstyles.IconAddress} />
                  <Text style={[PersonalDetailstyles.EmailText, globalStyles.FontRegular]}>+56 92387452374</Text>
                </View>
                <View style={PersonalDetailstyles.ProfileContactdetal}>
                  <Image source={require('../../assets/img/icon_address.png')} resizeMode="contain" style={PersonalDetailstyles.IconAddress} />
                  <Text style={[PersonalDetailstyles.EmailTex, globalStyles.FontRegular]}>Av. Angamos 8142</Text>
                </View> */}
              </View>
            </View>
          </View>

        </ScrollView>

      </View >
    );
  }
}

export default PersonalDetailView;
