import React, { Component } from 'react';
import { View, Text, StatusBar, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { get } from 'lodash';
import { OverlayActivityIndicatorElement } from "../../components";
import Homestyles from './styles';
import { SliderBox } from "react-native-image-slider-box";
import { Avatar, Button, IconButton, Card, Title, Paragraph, List } from 'react-native-paper';
import globalStyles from '../../assets/css/globalStyles';
import Icon from 'react-native-ionicons';
import SplashScreen from 'react-native-splash-screen';
import * as navigationActions from '../../actions/navigationActions';
import { Rating, AirbnbRating } from 'react-native-ratings';



class HomeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                // require('../../assets/images/img_slide1.jpg'),
                // require('../../assets/images/img_slide2.jpg'),
                // require('../../assets/images/img_slide3.jpg'),
            ]
        }

        //Filled Star. You can also give the path from local
        this.Star = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
        //Empty Star. You can also give the path from local
        this.Star_With_Border = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';
    }


    componentDidMount() {
        SplashScreen.hide();

    }

    navigateToAirVelocity = (id) => {
        // console.log(id);
        navigationActions.navigateToAirVelocity(id);
    };

    navigateToAboutus = () => {
        navigationActions.navigateToAboutus();
    }
    ratingCompleted(rating) {
        console.log("Rating is: " + rating)
    }

    getParsedDate(strDate) {//get date formate
        if (strDate != "") {
            let month_names = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            var strSplitDate = String(strDate).split('T');
            var dateArray = strSplitDate[0].split('-');
            let monthint = parseInt(dateArray[1]);
            let date = month_names[monthint - 1] + " " + dateArray[2] + ", " + dateArray[0];
            return date;
        }
        return "";
    }

    getParsedTime(strDate) {//get date formate
        if (strDate != "") {
            var strSplitTime = String(strDate).split('T');
            var TimeArray = strSplitTime[1];
            var newstrSplitTime = String(TimeArray).split('Z');
            var newtimeArray = newstrSplitTime[0];
            return newtimeArray;
        }
        return "";
    }

    render() {

        const { upcomingevents, pastevents, loading } = this.props;

        let upcomingeventsArr = [];
        let pasteventsArr = [];
        if (upcomingevents && upcomingevents != undefined) {
            //filteredupcomingevents = upcomingevents;
            upcomingevents.map((item) => {
                upcomingeventsArr.push(
                    <View key={item.id} style={Homestyles.WhiteBox}>
                        <Text style={Homestyles.DateText}>{this.getParsedDate(item.event.startTime)}</Text>
                        <Text style={Homestyles.EventTitle}>{item.event.name}</Text>
                        <Text style={Homestyles.EventLocation}>Coordinator: {item.event.coordinator.firstName} {item.event.coordinator.lastName}</Text>
                        <View style={Homestyles.RedButtonBox}>
                            <TouchableOpacity style={Homestyles.RedButton}>
                                <Text style={Homestyles.BtnText}>Detail</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            });
        }

        if (pastevents && pastevents != undefined) {
            pastevents.map((item) => {

                let default_rating = 0;
                if (item.evaluation == "ONE") {
                    default_rating = 1;
                }
                if (item.evaluation == "TWO") {
                    default_rating = 2;
                }
                if (item.evaluation == "THREE") {
                    default_rating = 3;
                }
                if (item.evaluation == "FOUR") {
                    default_rating = 4;
                }
                if (item.evaluation == "FIVE") {
                    default_rating = 5;
                }

                let React_Native_Rating_Bar = [];
                //Array to hold the filled or empty Stars
                for (var i = 1; i <= 5; i++) {
                    React_Native_Rating_Bar.push(
                        <TouchableOpacity
                            activeOpacity={0.7}
                            key={i}
                        >
                            <Image
                                style={Homestyles.StarImage}
                                source={
                                    i <= default_rating
                                        ? { uri: this.Star }
                                        : { uri: this.Star_With_Border }
                                }
                            />
                        </TouchableOpacity>
                    );
                }

                pasteventsArr.push(
                    <View key={item.id} style={Homestyles.WhiteBox}>
                        <Text style={Homestyles.LastEventText}>{this.getParsedTime(item.event.startTime)} {this.getParsedDate(item.event.startTime)}{'\n'}
                            {item.event.name}{'\n'}
                            Arrive time : {this.getParsedTime(item.customerArrivalTime)}</Text>
                        <View style={Homestyles.RatingBox}>
                            {React_Native_Rating_Bar}
                            {/* <Rating
                                type='custom'
                                ratingImage={WATER_IMAGE}
                                ratingColor='#c5353f'
                                ratingBackgroundColor='#d9d9d9'
                                ratingCount={5}
                                imageSize={18}
                                onFinishRating={this.ratingCompleted}
                                style={{ paddingVertical: 8 }}
                            /> */}
                        </View>
                        <Text style={Homestyles.LastEventText}>{item.observation}</Text>
                    </View>

                )
            });
        }

        const WATER_IMAGE = require('../../assets/img/water.png');

        return (
            <View style={Homestyles.container}>
                {
                    get(loading, 'isLoading') && <OverlayActivityIndicatorElement />
                }
                <StatusBar
                    barStyle="light-content"
                    // dark-content, light-content and default
                    hidden={false}
                    //To hide statusBar
                    backgroundColor="#a80f19"
                    //Background color of statusBar
                    translucent={false}
                    //allowing light, but not detailed shapes
                    networkActivityIndicatorVisible={true}
                />



                <ScrollView>
                    <View style={Homestyles.InnerContainer}>

                        <View style={[Homestyles.ContainerMargin, Homestyles.MarBtm20]}>
                            <View style={Homestyles.InnerTitle}>
                                <View style={Homestyles.HomeLeft}>
                                    <Image source={require('../../assets/images/icon_calendar.png')} resizeMode="contain" style={Homestyles.InnerTitleIcon} />
                                    <Text style={Homestyles.InnerTitleText}>Upcoming Events</Text>
                                </View>
                                <Text style={Homestyles.ResultText}>{upcomingeventsArr.length} Result</Text>
                            </View>
                            {
                                upcomingeventsArr
                            }
                        </View>

                        <View style={[Homestyles.FullWidthTitleBack, Homestyles.MarTop20]}>

                            <View style={[Homestyles.InnerTitle, Homestyles.MarTopzero]}>
                                <View style={Homestyles.HomeLeft}>
                                    <Image source={require('../../assets/images/icon_calendar.png')} resizeMode="contain" style={Homestyles.InnerTitleIcon} />
                                    <Text style={Homestyles.InnerTitleText}>Last Events</Text>
                                </View>
                                <Text style={Homestyles.ResultText}>{pasteventsArr.length} Result</Text>
                            </View>
                        </View>
                        {
                            pasteventsArr.length > 0 &&
                            <View style={Homestyles.ContainerMargin}>
                                {
                                    pasteventsArr
                                }
                            </View>
                        }
                    </View>
                </ScrollView>

            </View >
        );
    }
}

export default HomeView;
