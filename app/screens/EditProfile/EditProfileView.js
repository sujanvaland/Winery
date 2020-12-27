import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, ImageBackground, Image } from 'react-native';
import EditProfilestyles from './Styles';
import { SliderBox } from "react-native-image-slider-box";
import { Avatar, Button, IconButton, Card, Title, Paragraph, List } from 'react-native-paper';
import globalStyles from '../../assets/css/globalStyles';
import Icon from 'react-native-ionicons';
import SplashScreen from 'react-native-splash-screen';
import * as navigationActions from '../../actions/navigationActions';
import { Textarea } from 'native-base';


class EditProfileView extends Component {
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

    let EditProfileSer = [];
    if (this.props.Services) {
      // EditProfilestyles = this.props.Services;
    }

    return (
      <View style={EditProfilestyles.container}>


        <ScrollView>
          <View style={EditProfilestyles.InnerContainer}>
            <View style={EditProfilestyles.FormBox}>
              <View style={EditProfilestyles.TextContainer}>
                <Text>Name</Text>
                <TextInput
                  style={EditProfilestyles.TextElementBox}

                />
              </View>
              <View style={EditProfilestyles.TextContainer}>
                <Text>Email</Text>
                <TextInput
                  style={EditProfilestyles.TextElementBox}

                />
              </View>
              <View style={EditProfilestyles.TextContainer}>
                <Text>Phone No.</Text>
                <TextInput
                  style={EditProfilestyles.TextElementBox}

                />
              </View>
              <View style={EditProfilestyles.TextContainer}>
                <Text>Address</Text>
                <Textarea
                  style={EditProfilestyles.TextAreaBox}

                />
              </View>
              <TouchableOpacity style={EditProfilestyles.BtnSignup}>
                <Text style={EditProfilestyles.TextSignup}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>

        </ScrollView>

      </View >
    );
  }
}

export default EditProfileView;
