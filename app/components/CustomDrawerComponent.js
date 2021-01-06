import React, { Component } from 'react';
import { Text, View, TouchableOpacity, BackHandler, Button, Dimensions, Image, StyleSheet, Alert, TextInput } from 'react-native';
// Use prebuilt version of RNVI in dist folder
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
import * as navigationActions from '../actions/navigationActions';
import Styles from '../config/styles';
const { color, Typography } = Styles;

import { DrawerItems } from 'react-navigation-drawer';
import NavStyles from '../navigation/NavigationStyle';
import AsyncStorage from '@react-native-community/async-storage';




class CustomDrawerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hideMenu: true,
            login_token: ''
        };
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }

    async componentDidMount() {
        let login_token = await this._retrieveData("login_token");
        this.setState({
            login_token: login_token
        });
    }

    async componentDidUpdate() {
        let login_token = await this._retrieveData("login_token");
        this.setState({
            login_token: login_token
        });
    }

    navigateToLogin = () => {
        this._storeData("login_token", "")
        this._storeData("loginuser", "");
        this._storeData("password", "");
        this._storeData("customerguid", "");
        this._storeData("customername", "");
        this._storeData("customeremail", "");
        this._storeData("customerphone", "");
        this._storeData("customerbirthdate", "");
        navigationActions.navigateToLogin();
    }

    navigateToLogout = () => {
        this._storeData("login_token", "")
        this._storeData("loginuser", "");
        this._storeData("password", "");
        this._storeData("customerguid", "");
        this._storeData("customername", "");
        this._storeData("customeremail", "");
        this._storeData("customerphone", "");
        this._storeData("customerbirthdate", "");
        navigationActions.navigateToStoreMap();
    }

    navigateToTourListing = () => {
        navigationActions.navigateToTourListing();
    }

    navigateToMyProfile = () => {
        navigationActions.navigateToPersonalDetail();
    }

    navigateToChangePassword = () => {
        navigationActions.navigateToChangePassword();
    }

    _storeData = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value);
            return value;
        } catch (error) {
            // Error saving data
            return null;
        }
    };

    _retrieveData = async (key) => {
        try {
            const value = await AsyncStorage.getItem(key);
            if (value !== null) {
                return value
            }
        } catch (error) {
        }
    };

    navigateToNotifications = () => {
        navigationActions.navigateToNotifications();

    }
    handleBackButtonClick() {
        this.props.navigation.goBack();
        return true;
    }

    render() {

        const props = this.props;
        const {
            pagetitle = false,
            menu = false,
            searchbox = false,
            notification = false,
            backbutton = false,
            back = false,
            carticon = false

            //pagetitle = false,
        } = props;


        // const { navigate } = this.props.navigation;
        return (
            <View>
                {
                    (this.state.login_token == '' || this.state.login_token == undefined) &&
                    <View style={NavStyles.MyaccountBox}>
                        <TouchableOpacity onPress={() => this.navigateToLogin()} style={NavStyles.LogoutBtn}>
                            <Image source={require('../assets/img/icon_myprofile_menu.png')} style={NavigationStyles.MenuIcon} />
                            <Text style={NavStyles.LogoutBtnText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                }
                {
                    this.state.login_token != '' && this.state.login_token != undefined &&
                    <View>
                        <View style={NavStyles.MyaccountBox}>
                            <TouchableOpacity onPress={() => this.navigateToTourListing()} style={NavStyles.LogoutBtn}>
                                <Image source={require('../assets/img/icon_tours.png')} resizeMode="contain" style={NavigationStyles.MenuIcon} />
                                <Text style={NavStyles.LogoutBtnText}>My Tours</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={NavStyles.MyaccountBox}>
                            <TouchableOpacity onPress={() => this.navigateToMyProfile()} style={NavStyles.LogoutBtn}>
                                <Image source={require('../assets/img/icon_myprofile_menu.png')} resizeMode="contain" style={NavigationStyles.MenuIcon} />
                                <Text style={NavStyles.LogoutBtnText}>My Profile</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={NavStyles.MyaccountBox}>
                            <TouchableOpacity onPress={() => this.navigateToChangePassword()} style={NavStyles.LogoutBtn}>
                                <Image source={require('../assets/img/icon_changepass.png')} resizeMode="contain" style={NavigationStyles.MenuIcon} />
                                <Text style={NavStyles.LogoutBtnText}>Change Password</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() =>
                                Alert.alert(
                                    'Log out',
                                    'Do you want to logout?',
                                    [
                                        { text: 'Cancel', onPress: () => { return null } },
                                        {
                                            text: 'Confirm', onPress: () => {
                                                AsyncStorage.clear();
                                                this.navigateToLogout();
                                            }
                                        },
                                    ],
                                    { cancelable: false }
                                )
                            } style={NavStyles.LogoutBtn} >

                                <Image source={require('../assets/img/icon_logoutmenu.png')} resizeMode="contain" style={NavStyles.LogoutMenuIcon} />
                                <Text style={NavStyles.LogoutBtnText}>Logout</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                }
            </View>
        );
    }
}

export { CustomDrawerComponent }

//export default CustomDrawerComponent;
const NavigationStyles = StyleSheet.create({
    UserName: {
        marginTop: 30,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 10,
        fontSize: viewportWidth * 0.034,
        // fontFamily: Typography.FONT_MEDIUM,
        //  borderBottomColor: color.COLOR_LIGHTGRAY,
        borderBottomWidth: 2,
    },

    MenuIcon: {
        width: viewportWidth * 0.06,
        height: viewportWidth * 0.06,
        borderWidth: 0,
        borderColor: 'black',
        margin: 0,
    },
});
