import React, { Component } from 'react';
import { Text, View, TouchableOpacity, BackHandler, Button, Dimensions, Image, StyleSheet, Alert, TextInput } from 'react-native';
// Use prebuilt version of RNVI in dist folder
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
import Icon from 'react-native-ionicons'
import Styles from '../config/styles';
const { color, Typography } = Styles;




class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hideMenu: true,

        };
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }

    handleBackButtonClick() {
        this.props.navigation.goBack();
        return true;
    }

    render() {
        const { goBack } = this.props.navigation;
        const props = this.props;
        const {
            pagetitle = false,
            menu = false,
            searchbox = false,
            notification = false,
            backbutton = false,
            back = false,
            carticon = false,
            user = false

            //pagetitle = false,
        } = props;


        const onClose = () => {
            console.log('Back Preess');
            this.props.navigation.goBack();
        }

        // const { navigate } = this.props.navigation;
        return (
            <View style={HeaderStyles.HeaderMain}>
                <View style={HeaderStyles.HeaderBox}>
                    <View style={HeaderStyles.HeaderContent}>
                        <View style={HeaderStyles.LeftHeader}>

                            {menu === true &&
                                <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} style={HeaderStyles.burgerMenu}>
                                    <Image source={require('../assets/images/icon_menu.png')} resizeMode="contain" style={HeaderStyles.iconMenu} />
                                </TouchableOpacity>
                            }
                            {backbutton === true &&
                                <TouchableOpacity style={HeaderStyles.BackButton} onPress={() => { onClose() }}>
                                    <Image source={require('../assets/images/btnback.png')} style={HeaderStyles.BackBtn} resizeMode="contain" />
                                </TouchableOpacity>
                            }
                            {pagetitle === true &&
                                <Text style={HeaderStyles.pagetitleText}>{props.title}</Text>
                            }
                            {user === true &&
                                <TouchableOpacity>
                                    <Image source={require('../assets/images/icon_user.png')} resizeMode="contain" style={HeaderStyles.userIcon} />
                                </TouchableOpacity>
                            }
                        </View>
                    </View>
                </View>
            </View >
        );
    }
}

export { HeaderComponent }

//export default HeaderComponent;
const HeaderStyles = StyleSheet.create({
    HeaderBox: {
        marginTop: 0, paddingVertical: 5,
        position: "relative",
        width: '100%',
        zIndex: 99,
        paddingHorizontal: 0,
        backgroundColor: '#67024e'
    },
    notificationBox: {
        position: 'relative',
        paddingTop: 0,
        marginRight: viewportWidth * 0.02,

    },
    userIcon: {
        width: viewportWidth * 0.05
    },
    cartNotification: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: viewportWidth * 0.02,
        marginTop: viewportWidth * 0.002,

    },
    CartBox: {
        position: 'relative',
        paddingTop: 0,
        marginLeft: viewportWidth * 0.02,
    },
    pagetitleText: {
        //   fontFamily: Typography.FONT_SEMIBOLD,
        fontSize: viewportWidth * 0.04,
        color: color.COLOR_WHITE,
        width: viewportWidth * 0.85,
        height: viewportWidth * 0.1,
        textAlign: "center",
        // paddingLeft: viewportWidth * 0.05,
        paddingTop: viewportWidth * 0.02,
        marginTop: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth:0,
        borderColor: 'white',

    },

    BackButton: {
        marginHorizontal: 0,
        marginTop: 4,
        width: viewportWidth * 0.10,
        borderWidth: 0,
        borderColor: 'white'
    },
    BackBtn: {
        width: viewportWidth * 0.08,
        height: viewportWidth * 0.08,
    },
    badgeCount: {
        backgroundColor: color.COLOR_SECONDARY,
        color: color.COLOR_WHITE,
        fontSize: viewportHeight * 0.015,
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: viewportWidth * 0.05,
        height: viewportWidth * 0.05,
        position: 'absolute',
        right: -5,
        top: -10,
        zIndex: 9,
        textAlign: "center",
        borderWidth: 0,

    },
    iconMap: {
        height: viewportHeight * 0.03,
        width: viewportHeight * 0.03,

    },
    iconMenu: {
        height: viewportHeight * 0.036,
        width: viewportHeight * 0.036,

    },
    searcBox: {
        width: viewportWidth * 0.63,
        height: 45,
        paddingTop: 0,
        marginBottom: 10,
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderWidth: 0,
        borderColor: 'white',
        paddingHorizontal: 10, borderRadius: 6,
        borderStyle: "solid",
        backgroundColor: "rgba(255, 255, 255, 0.1)"
    },
    burgerMenu: {
        borderWidth: 0,
        borderColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: viewportWidth * 0.1,
    },
    HeaderMain: {
        position: 'relative',
        zIndex: 99,
        zIndex: 99,
        paddingHorizontal: 0,
    },
    HeaderContent: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
        borderWidth: 0,
        borderColor: color.COLOR_WHITE,
        width: viewportWidth,
        paddingHorizontal: 10,
        paddingTop: viewportWidth * 0.02,
        height: viewportWidth * 0.13,
    },
    menuButton: {
        maxWidth: 100,

    },
    LeftHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%'
    },
    badgeText: {
        color: color.COLOR_WHITE,
        fontSize: viewportWidth * 0.03
    },
    searcTextbox: {
        backgroundColor: color.COLOR_WHITE,
    }
})
