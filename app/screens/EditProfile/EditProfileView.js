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
import AsyncStorage from '@react-native-community/async-storage';
import { OverlayActivityIndicatorElement} from '../../components';
import { get } from 'lodash';


class EditProfileView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postUpdateprofile: {
        firstname: "",
        lastname: ""
      },
      isvalidfirstname: true,
      isvalidlastname: true,
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
    var strcustomername = String(customername).split(' ');

    let newpostUpdateprofile = this.state.postUpdateprofile;
    newpostUpdateprofile.firstname = strcustomername[0];
    newpostUpdateprofile.lastname = strcustomername[1];
         
    this.setState({
        postUpdateprofile : newpostUpdateprofile
    });
  }

  onValueChange = (fieldName, value) => {
    this.setState(prevState => ({
      postUpdateprofile: {                   // object that we want to update
        ...prevState.postUpdateprofile, // keep all other key-value pairs
        [fieldName]: value
      }
    }), function () {
    });

    if (this.state.firstname != ''  && this.state.lastname != '') {
      this.submitted = false;
    } else {
      this.submitted = true;
    }
  }

  validateInputs = (fieldName) => {

    if (fieldName == "firstname") {
      if (this.state.postUpdateprofile.firstname == "") {
        this.onValueChange("isvalidfirstname", false);
        this.setState({ isvalidfirstname: false });
      }
      else {
        if (this.state.postUpdateprofile.firstname.length >= 3 && this.state.postUpdateprofile.firstname.length <= 50) {
          this.onValueChange("isvalidfirstname", true);
          this.setState({ isvalidfirstname: true });
        }
        else {
          Toast.show("First Name should have min 3 chars and max 50", Toast.SHORT);
          this.onValueChange("isvalidfirstname", false);
          this.setState({ isvalidfirstname: false });
        }
      }
    }

    if (fieldName == "lastname") {
      if (this.state.postUpdateprofile.lastname == "") {
        this.onValueChange("isvalidlastname", false);
        this.setState({ isvalidlastname: false });
      }
      else {
        if (this.state.postUpdateprofile.lastname.length >= 3 && this.state.postUpdateprofile.lastname.length <= 50) {
          this.onValueChange("isvalidlastname", true);
          this.setState({ isvalidlastname: true });
        }
        else {
          Toast.show("Last Name should have min 3 chars and max 50", Toast.SHORT);
          this.onValueChange("isvalidlastname", false);
          this.setState({ isvalidlastname: false });
        }
      }
    }
  };

  navigateToUpdateprofile = () => {
    if(this.validatePersonalDetail()){
      this.props.onUpdatePersonalDetail(this.state.postUpdateprofile);
    }
  };

  validatePersonalDetail=()=>{
    //====== title ======//
    let isvalidfirstname;
    let isvalidlastname;


    let allInputsValidated;

    if (this.state.postUpdateprofile.firstname == '') {
    isvalidfirstname = false;
    } else {
    if (this.state.postUpdateprofile.firstname.length >= 3 && this.state.postUpdateprofile.firstname.length <= 50) {
      isvalidfirstname = true;
    } else {
      Toast.show("First Name should have min 3 chars and max 50", Toast.SHORT);
      isvalidfirstname = false;
    }
    }

    if (this.state.postUpdateprofile.lastname == '') {
    isvalidlastname = false;
    } else {
    if (this.state.postUpdateprofile.lastname.length >= 3 && this.state.postUpdateprofile.lastname.length <= 50) {
      isvalidlastname = true;
    } else {
      Toast.show("Last Name should have min 3 chars and max 50", Toast.SHORT);
      isvalidlastname = false;
    }
    }

    if(isvalidfirstname && isvalidlastname) 
    {
      allInputsValidated = true;
    }
    else
    {
      Toast.show("Please check all fields", Toast.SHORT);
    }

    this.setState({ 
    isvalidfirstname: isvalidfirstname,
    isvalidlastname: isvalidlastname,
    });

    return allInputsValidated;
  }
  render() {
    const { loading } = this.props;
    return (
      <View style={EditProfilestyles.container}>
        {get(loading, 'isLoading') && <OverlayActivityIndicatorElement />}

        <ScrollView>
          <View style={EditProfilestyles.InnerContainer}>
            <View style={EditProfilestyles.FormBox}>
              <View style={EditProfilestyles.TextContainer}>
                <Text>First Name</Text>
                <TextInput
                  style={EditProfilestyles.TextElementBox}
                  placeholder={'First Name'}
                  value={this.state.postUpdateprofile.firstname}
                  onChangeText={value => this.onValueChange("firstname", value)}
                  isvalidInput={this.state.isvalidfirstname}
                  onEndEditing={() => this.validateInputs("firstname")}
                  maxLength={50}
                />
              </View>
              <View style={EditProfilestyles.TextContainer}>
                <Text>Last Name</Text>
                <TextInput
                  style={EditProfilestyles.TextElementBox}
                  placeholder={'Last Name'}
                  value={this.state.postUpdateprofile.lastname}
                  onChangeText={value => this.onValueChange("lastname", value)}
                  isvalidInput={this.state.isvalidlastname}
                  onEndEditing={() => this.validateInputs("lastname")}
                  maxLength={50}
                />
              </View>
              <TouchableOpacity style={EditProfilestyles.BtnSignup} onPress={() => this.navigateToUpdateprofile()}  disabled={this.submitted}>
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
