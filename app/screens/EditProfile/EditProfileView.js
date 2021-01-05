import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, ImageBackground, Image } from 'react-native';
import { DatePicker } from 'native-base';
import EditProfilestyles from './Styles';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-community/async-storage';
import { OverlayActivityIndicatorElement} from '../../components';
import { get } from 'lodash';
import Toast from 'react-native-simple-toast';


class EditProfileView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postUpdateprofile: {
        firstname: "",
        lastname: "",
        phone:"",
        birthDate:""
      },
      isvalidfirstname: true,
      isvalidlastname: true,
      isvalidphone:true,
      isvalidbirthdate:true
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

    let customerphone = await this._retrieveData("customerphone");
    newpostUpdateprofile.phone = customerphone;

    let customerbirthdate = await this._retrieveData("customerbirthdate");
    newpostUpdateprofile.birthDate = customerbirthdate;
         
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

    if(fieldName == "phone"){
      if(this.state.postUpdateprofile.phone == "" ){
        this.onValueChange("isvalidphone", false);
        this.setState({isvalidphone:false});
      }
      else{
        let reg =  /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/g;
        if(reg.test(this.state.postUpdateprofile.phone) === true){
          if(this.state.postUpdateprofile.phone.length >= 10 && this.state.postUpdateprofile.phone.length <= 15){
            this.onValueChange("isvalidphone", true);
            this.setState({isvalidphone:true});
          }
          else{
            Toast.show("Mobile Number should have min 10 digits and max 50 digits", Toast.SHORT);
            this.onValueChange("isvalidphone", false);
            this.setState({isvalidphone:false});
          }
        }
        else{
            Toast.show("Mobile Number is not valid", Toast.SHORT);
            this.onValueChange("isvalidphone", false);
            this.setState({isvalidphone:false});
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
    let isvalidphone;


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

    if(this.state.postUpdateprofile.phone == "" ){
      isvalidphone = false;
    }
    else{
      let reg =  /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/g;
      if(reg.test(this.state.postUpdateprofile.phone) === true){
        if(this.state.postUpdateprofile.phone.length >= 10 && this.state.postUpdateprofile.phone.length <= 15){
          isvalidphone = true;
        }
        else{
          Toast.show("Mobile Number should have min 10 digits and max 50 digits", Toast.SHORT);
          isvalidphone = false;
        }
      }
      else{
          Toast.show("Mobile Number is not valid", Toast.SHORT);
          isvalidphone = false;
      }
    }

    if(isvalidfirstname && isvalidlastname && isvalidphone) 
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
    isvalidphone: isvalidphone,
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
              <View style={EditProfilestyles.TextContainer}>
                <Text>Mobile No.</Text>
                <TextInput
                  style={EditProfilestyles.TextElementBox}
                  placeholder={'Mobile No'}
                  maxLength={15}
                  isvalidInput={this.state.isvalidphone}
                  onEndEditing={() => this.validateInputs("phone")}
                  placeholderTextColor='#ffffff'
                  value={this.state.postUpdateprofile.phone}
                  onChangeText={value => this.onValueChange("phone", value)}
                  keyboardType = "phone-pad"
                />
              </View>
              <View style={EditProfilestyles.TextContainer}>
                <Text>Birth Date : {this.state.postUpdateprofile.birthDate.toString()}</Text>
                <DatePicker
                    maximumDate={new Date()}
                    locale={"en"}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={"fade"}
                    androidMode={"default"}
                    placeHolderText="Birth Date"
                    textStyle={{ color: "#d3d3d3" }}
                    placeHolderTextStyle={{ color: "#d3d3d3" }}
                    onDateChange={(date) => {
                      var addDay=new Date(date.getTime() + 24 * 60 * 60 * 1000);
                      var isodate = addDay.toISOString(); 
                      var strSplitDate = String(isodate).split('T');
                      var dateArray = strSplitDate[0].split('-');
                      let newdate = dateArray[0] + "-" + dateArray[1] + "-" + dateArray[2];
                      // console.log(date);
                      // console.log(addDay);
                      // console.log(isodate);
                      // console.log(newdate);
                      this.onValueChange("birthDate", newdate);
                      this.onValueChange("isvalidbirthdate", true);
                      this.setState({ isvalidbirthdate: true });
                    }}
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
