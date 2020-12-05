import React, { Component } from 'react';
import HomeView from './HomeView';
import { connect } from 'react-redux';
import { View,BackHandler } from 'react-native';
import * as eventActions from 'app/actions/eventActions';
import * as navigationActions from 'app/actions/navigationActions';
import AsyncStorage from '@react-native-community/async-storage';
//import messaging from '@react-native-firebase/messaging';

class HomeContainer extends Component {
    constructor(props) {
        super(props);
    }

    // define a separate function to get triggered on focus
    async onFocusFunction () {
        // messaging().getToken().then((token) => {
        //   this._onChangeToken(token)
        // });
  
        // messaging().onTokenRefresh((token) => {
        //     this._onChangeToken(token)
        // });
        
        let userId=this.props.accountdetail.id;
        const { getUpcomingEvents, getPastEvents } = this.props;
        getUpcomingEvents(userId);
        getPastEvents(userId);
      }
  
      // and don't forget to remove the listener
      componentWillUnmount () {
        this.focusListener.remove()
      }
    
    async componentDidMount(){
        let currentRoute = this.props.navigation.state.routeName;
        let navigation = this.props.navigation;
        BackHandler.addEventListener ('hardwareBackPress', function(){
          if (currentRoute == "Login") {
            BackHandler.exitApp();
            return true;
          }
          else{
            navigation.goBack();
            return true;
          }
        });
  
        this.focusListener = this.props.navigation.addListener('didFocus', () => {
            this.onFocusFunction();
          })
    } 
  
    // _onChangeToken = async (token) => {
    //   await AsyncStorage.setItem("DEVICE_TOKEN", token);
    //   const { onUpdateDeviceToken } = this.props;
    //   //console.log(token);
    //   onUpdateDeviceToken(token);
    // }

    render() {
        return <HomeView {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        accountdetail : state.accountReducer.accountdetail,
        upcomingevents:state.eventReducer.upcomingevents,
        pastevents:state.eventReducer.pastevents,
        loading: state.loadingReducer,
        login_token:state.loginReducer.login_token,
    };
  }

function mapDispatchToProps(dispatch) {
    return {
        getUpcomingEvents: (userId) => dispatch(eventActions.getUpcomingEvents(userId)),
        getPastEvents: (userId) => dispatch(eventActions.getPastEvents(userId))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);
