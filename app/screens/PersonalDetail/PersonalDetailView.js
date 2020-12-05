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
      images: [
        // require('../../assets/images/img_slide1.jpg'),
        // require('../../assets/images/img_slide2.jpg'),
        // require('../../assets/images/img_slide3.jpg'),
      ]
    }
  }


  componentDidMount() {
    SplashScreen.hide();
  }

  navigateToAirVelocity = (id) => {
    navigationActions.navigateToAirVelocity(id);
  };

  navigateToAboutus = () => {
    navigationActions.navigateToAboutus();
  }


  render() {

    let PersonalDetailSer = [];
    if (this.props.Services) {
      // PersonalDetailstyles = this.props.Services;
    }

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
                <TouchableOpacity style={PersonalDetailstyles.btnEditProfile}>
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

                <View style={PersonalDetailstyles.CarBbox}>
                  <Text style={PersonalDetailstyles.CardTitle, globalStyles.FontBold}>Plan Gold</Text>
                  <Text style={PersonalDetailstyles.CardNumber}>01-03-2020 to 01-04-2020</Text>
                </View>
              </View>
            </View>
            <View style={[PersonalDetailstyles.FullWidthTitleBack]}>
              <View style={[PersonalDetailstyles.InnerTitle, PersonalDetailstyles.MarTopzero]}>
                <View style={PersonalDetailstyles.CustomerFeedLeft}>
                  <Image source={require('../../assets/images/icon_calendar.png')} resizeMode="contain" style={PersonalDetailstyles.InnerTitleIcon} />
                  <Text style={PersonalDetailstyles.InnerTitleText}>Health Profile</Text>
                </View>
                <TouchableOpacity style={PersonalDetailstyles.AddBtn}>
                  <Text style={PersonalDetailstyles.AddBtnText}>+ Add</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={PersonalDetailstyles.Spacer}></View>
            <View style={[PersonalDetailstyles.FullWidthTitleBack, PersonalDetailstyles.PadTop5]}>
              <View style={[PersonalDetailstyles.InnerTitle, PersonalDetailstyles.MarTopzero]}>
                <View style={PersonalDetailstyles.CustomerFeedLeft}>

                  <Image source={require('../../assets/images/icon_calendar.png')} resizeMode="contain" style={PersonalDetailstyles.InnerTitleIcon} />
                  <View>
                    <Text style={[PersonalDetailstyles.InnerTitleText, PersonalDetailstyles.FullwidthBox]}>Commnets</Text>
                    <Text style={[PersonalDetailstyles.ResultText, PersonalDetailstyles.Fnt12]}>211 Result</Text>
                  </View>
                </View>
                <TouchableOpacity style={PersonalDetailstyles.AddBtn}>
                  <Text style={PersonalDetailstyles.AddBtnText}>+ Add</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={[PersonalDetailstyles.ContainerMargin]}>

              <View style={PersonalDetailstyles.WhiteBox}>
                <Text style={PersonalDetailstyles.EventTitle}>Coordinator name: Frank Doe
</Text>
                <Text style={PersonalDetailstyles.EventLocation}>Exercise and physical activity can be classified into
                four categories: endurance, strength, flexibility,
and balance.</Text>
                <Text style={PersonalDetailstyles.DateText}>Morning 09/11/2020</Text>
              </View>
            </View>
          </View>

        </ScrollView>

      </View >
    );
  }
}

export default PersonalDetailView;
