import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Image, View, Text, StyleSheet, Dimensions, ImageBackground, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { createDrawerNavigator, DrawerItems, DrawerActions } from 'react-navigation-drawer';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
import AsyncStorage from '@react-native-community/async-storage';
import NavStyles from './NavigationStyle';
import { HeaderComponent } from 'app/components';



import * as navigationActions from '../actions/navigationActions';

import AuthLoadingScreen from 'app/screens/Login/AuthLoading';
import Login from 'app/screens/Login';
import Signup from 'app/screens/Signup';
import Forgotpassword from 'app/screens/Forgotpassword';
import Home from 'app/screens/Home';
import ChangePassword from 'app/screens/ChangePassword';
import PersonalDetail from 'app/screens/PersonalDetail';
import StoreListing from 'app/screens/StoreListing';
import StoreMap from 'app/screens/StoreMap';
import Verifyotp from 'app/screens/Verifyotp';





const LoginApp = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: ({ navigation }) => {
            return {
                headerShown: false,
                gestureEnabled: true,
            };
        },
    },
});

const SignupApp = createStackNavigator({
    Signup: {
        screen: Signup,
        navigationOptions: ({ navigation }) => {
            return {
                // header: () => <HeaderComponent iname={"ios-arrow-back"}
                headerShown: false,
                //  back={true} navigation={navigation} />,
                gestureEnabled: false
            }
        }
    },
});

const ForgotpasswordApp = createStackNavigator({
    Forgotpassword: {
        screen: Forgotpassword,
        navigationOptions: ({ navigation }) => {
            return {
                //  header: () => <HeaderComponent iname={"ios-arrow-back"}
                //   title={"Forgot Password"}
                // back={true} navigation={navigation} />,
                headerShown: false,
                gestureEnabled: false
            }
        }
    },
});

const HomeApp = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                header: () => (
                    <HeaderComponent navigation={navigation} user={true} menu={true} title="Fit4Life" pagetitle={true} />
                ),
                gestureEnabled: true,
            };
        },
    },
});

const MyProfileApp = createStackNavigator({
    MyProfile: {
        screen: PersonalDetail,
        navigationOptions: ({ navigation }) => {
            return {
                header: () => (
                    <HeaderComponent navigation={navigation} user={true} menu={true} title="Fit4Life" pagetitle={true} />
                ),
                gestureEnabled: true,
            };
        },
    },
});


const ChangePasswordApp = createStackNavigator({
    ChangePassword: {
        screen: ChangePassword,
        navigationOptions: ({ navigation }) => {
            return {
                header: () => <HeaderComponent pagetitle={true} user={true} navigation={navigation} menu={true} title="Change Password" />,
                gestureEnabled: false
            }
        }
    },
});

const StoreListingApp = createStackNavigator({
    StoreListing: {
        screen: StoreListing,
        navigationOptions: ({ navigation }) => {
            return {
                header: () => <HeaderComponent pagetitle={true} user={true} navigation={navigation} menu={true} title="Store Listing" />,
                gestureEnabled: false
            }
        }
    },
});

const StoreMapApp = createStackNavigator({
    StoreMap: {
        screen: StoreMap,
        navigationOptions: ({ navigation }) => {
            return {
                header: () => <HeaderComponent pagetitle={true} user={true} navigation={navigation} menu={true} title="Store Listing" />,
                gestureEnabled: false
            }
        }
    },
});

const RNApp = createDrawerNavigator(
    {
        Login: {
            screen: LoginApp,
            navigationOptions: {
                drawerLabel: () => null
            },
        },
        Signup: {
            screen: SignupApp,
            navigationOptions: {
                drawerLabel: () => null
            },
        },
        Forgotpassword: {
            screen: ForgotpasswordApp,
            navigationOptions: {
                drawerLabel: () => null
            },
        },
        Home: {
            screen: HomeApp,
            navigationOptions: {
                drawerIcon: () => (
                    <Image source={require('../assets/img/icon_home_menu.png')} resizeMode="contain" style={NavigationStyles.MenuIcon} />
                ),
            },
        },
        StoreListing: {
            screen: StoreListingApp,
            navigationOptions: {
                drawerLabel: 'Store Listing',
                drawerIcon: () => (
                    <Image source={require('../assets/img/icon_home_menu.png')} resizeMode="contain" style={NavigationStyles.MenuIcon} />
                ),
            },
        },

        StoreMap: {
            screen: StoreMapApp,
            navigationOptions: {
                drawerLabel: 'Store Map',
                drawerIcon: () => (
                    <Image source={require('../assets/img/icon_home_menu.png')} resizeMode="contain" style={NavigationStyles.MenuIcon} />
                ),
            },
        },
        MyProfile: {
            screen: MyProfileApp,
            navigationOptions: {
                drawerLabel: 'My Profile',
                drawerIcon: () => (
                    <Image source={require('../assets/img/icon_myprofile_menu.png')} resizeMode="contain" style={NavigationStyles.MenuIcon} />
                ),
            },
        },

        ChangePassword: {
            screen: ChangePasswordApp,
            navigationOptions: {
                drawerLabel: 'Change Password',
                drawerIcon: () => (
                    <Image source={require('../assets/img/icon_changepass.png')} resizeMode="contain" style={NavigationStyles.MenuIcon} />
                ),
            },
        }
    },

    {
        contentComponent: (props) => (
            <View style={NavStyles.LeftMenuarea}>

                <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }} style={NavStyles.SafeAeaMenu}>
                    <View style={NavStyles.UserArea}>
                        <View style={NavStyles.ProfilePic}>
                            <Image source={require('../assets/img/img_avtar.jpg')} resizeMode="contain" style={NavStyles.PrifileImage} />
                        </View>
                        <Text style={NavStyles.UserName}>John Smith</Text>
                        <Text style={NavStyles.Location}>San Francisco, CA</Text>
                    </View>

                    <DrawerItems {...props} />
                    <TouchableOpacity onPress={() =>
                        Alert.alert(
                            'Log out',
                            'Do you want to logout?',
                            [
                                { text: 'Cancel', onPress: () => { return null } },
                                {
                                    text: 'Confirm', onPress: () => {
                                        AsyncStorage.clear();
                                        props.navigation.navigate('Login')
                                    }
                                },
                            ],
                            { cancelable: false }
                        )
                    } style={NavStyles.LogoutBtn}>

                        <Image source={require('../assets/img/icon_logoutmenu.png')} resizeMode="contain" style={NavStyles.LogoutMenuIcon} />
                        <Text style={NavStyles.LogoutBtnText}>Logout</Text>
                    </TouchableOpacity>
                </SafeAreaView>

            </View>
        ),
        initialRouteName: 'Login',
        draweOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',
        drawerBackgroundColor: "#67024e",
        contentOptions: {
            labelStyle: {
                color: 'white',
                paddingHorizontal: 0,

            },
            TintColor: '#67024e',
            activeTintColor: '#67024e',
            activeBackgroundColor: '#67024e',
            //  fontFamily: Styles.Typography.FONT_LIGHT
        },
    });


//export default createAppContainer(RNApp);

export default createAppContainer(
    createSwitchNavigator(
        {
            //AuthLoading: AuthLoadingScreen,
            App: RNApp,
            initialRouteName: 'ChangePassword',
            //  Auth: LoginApp,
        },
        //  {
        // initialRouteName: 'AuthLoading',
        //  initialRouteName: 'Contracts',
        // }
    )
);


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

