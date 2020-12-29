import React, { Component } from 'react';
import StoreMapView from './StoreMapView';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import * as accountActions from 'app/actions/accountActions';
import * as loginActions from 'app/actions/loginActions';
import * as navigationActions from 'app/actions/navigationActions';

class StoreMapContainer extends Component {
  constructor(props) {
    super(props);
  }

  // define a separate function to get triggered on focus
  async onFocusFunction () {
    // do some stuff on every screen focus
    //console.log('123');
    _storeData("PreviousScreen", "StoreMap");
    const { getAllUserType } = this.props;
    getAllUserType();
  }
  // and don't forget to remove the listener
  componentWillUnmount () {
    this.focusListener.remove()
  }

  async componentDidMount(){
      let currentRoute = this.props.navigation.state.routeName;
      let navigation = this.props.navigation;
      BackHandler.addEventListener('hardwareBackPress', function () {
          if (currentRoute == "Login") {
              BackHandler.exitApp();
              return true;
          }
          else {
              navigation.goBack();
              return true;
          }
      });

      this.focusListener = this.props.navigation.addListener('didFocus', () => {
          this.onFocusFunction();
        })
  } 

  navigateToStartTour = () => {
    this.props.navigation.push('StartTour')
    //navigationActions.navigateToStartTour();
  }

  navigateToStoreListing = () => {
    navigationActions.navigateToStoreListing();
  }
  navigateToStoreMapStart = () => {
    navigationActions.navigateToStoreMapStart();
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

  render() {
    return <StoreMapView {...this.props} StoreListing={this.navigateToStoreListing} StartTour={this.navigateToStartTour} />;
  }
}

function mapStateToProps(state) {
  return {
    loading: state.loadingReducer,
    login_token: state.loginReducer.login_token,
    getallusertype: state.accountReducer.getallusertype,
    userwinetype: state.accountReducer.userwinetype,
    wineriesbywinetype:state.accountReducer.wineriesbywinetype,
    routewaypointslist:state.accountReducer.routewaypointslist,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onStoreMap: (StoreMaptoadd) => dispatch(accountActions.StoreMapRequest(StoreMaptoadd)),
    getAllUserType:()=>dispatch(accountActions.getAllUserType()),
    getWineTypeByUserType:(UserTypeId)=>dispatch(accountActions.getWineTypeByUserType(UserTypeId)),
    getWineriesWineType:([WineTypeId])=>dispatch(accountActions.getWineriesWineType([WineTypeId])),
    ongetRoute: (obj) => dispatch(accountActions.ongetRoute(obj))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoreMapContainer);
