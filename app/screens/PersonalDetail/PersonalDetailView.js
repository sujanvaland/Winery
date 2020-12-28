import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native';
import PersonalDetailstyles from './Styles';
import { SliderBox } from "react-native-image-slider-box";
import { Avatar, Button, IconButton, Card, Title, Paragraph, List } from 'react-native-paper';
import globalStyles from '../../assets/css/globalStyles';
import Icon from 'react-native-ionicons';
import SplashScreen from 'react-native-splash-screen';
import * as navigationActions from '../../actions/navigationActions';



class PersonalDetailView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  componentDidMount() {
    SplashScreen.hide();
  }


  navigateToEditProfile = () => {
    navigationActions.navigateToEditProfile();
  }


  render() {
    
    return (
      <View style={PersonalDetailstyles.container}>


        <ScrollView>
          <View style={PersonalDetailstyles.InnerContainer}>
            <View style={PersonalDetailstyles.MyprofileBox}>
              <View style={PersonalDetailstyles.ProfileBox}>
                <Image source={require('../../assets/img/img_avtar.jpg')} resizeMode="contain" style={PersonalDetailstyles.ProfilePic} />
              </View>
              <View style={PersonalDetailstyles.ProfileDetail}>
                <Text style={[PersonalDetailstyles.NameBox, globalStyles.FontRegular]}>John Doe</Text>
                <Text style={[PersonalDetailstyles.LocationBox, globalStyles.FontRegular]}>San Francisco, CA</Text>
              </View>

              <TouchableOpacity style={PersonalDetailstyles.btnEditProfile}>
                <Image source={require('../../assets/img/icon_profileedit.png')} resizeMode="contain" style={PersonalDetailstyles.ProfileEdit} />
              </TouchableOpacity>
            </View>
            <View style={[PersonalDetailstyles.ContainerMargin]}>
              <View style={PersonalDetailstyles.WhiteBox}>
                <TouchableOpacity style={PersonalDetailstyles.btnEditProfile} onPress={() => this.navigateToEditProfile()}>
                  <Image source={require('../../assets/img/icon_contactedit.png')} resizeMode="contain" style={[PersonalDetailstyles.ProfileEdit, PersonalDetailstyles.ProfileEditSmall]} />
                </TouchableOpacity>
                <View style={PersonalDetailstyles.ProfileContactdetal}>
                  <Image source={require('../../assets/img/icon_email.png')} resizeMode="contain" style={PersonalDetailstyles.IconAddress} />
                  <Text style={[PersonalDetailstyles.EmailText, globalStyles.FontRegular]}>John.doe@gmail.com</Text>
                </View>
                <View style={PersonalDetailstyles.ProfileContactdetal}>
                  <Image source={require('../../assets/img/icon_phone.png')} resizeMode="contain" style={PersonalDetailstyles.IconAddress} />
                  <Text style={[PersonalDetailstyles.EmailText, globalStyles.FontRegular]}>+56 92387452374</Text>
                </View>
                <View style={PersonalDetailstyles.ProfileContactdetal}>
                  <Image source={require('../../assets/img/icon_address.png')} resizeMode="contain" style={PersonalDetailstyles.IconAddress} />
                  <Text style={[PersonalDetailstyles.EmailTex, globalStyles.FontRegular]}>Av. Angamos 8142</Text>
                </View>
              </View>
            </View>
          </View>

        </ScrollView>

      </View >
    );
  }
}

export default PersonalDetailView;
