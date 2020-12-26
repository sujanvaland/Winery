import React, { Component } from 'react';
import StartTourView from './StartTourView';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import * as accountActions from 'app/actions/accountActions';
import * as loginActions from 'app/actions/loginActions';
import * as navigationActions from 'app/actions/navigationActions';

class StartTourContainer extends Component {
  constructor(props) {
    super(props);
  }

  // define a separate function to get triggered on focus
  async onFocusFunction () {
    // do some stuff on every screen focus
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
  render() {
    return <StartTourView {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    loading: state.loadingReducer,
    login_token: state.loginReducer.login_token,
    routewaypointslist:state.accountReducer.routewaypointslist,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    ongetRoute: (obj) => dispatch(accountActions.ongetRoute(obj)),
    insertTour: (FeedbackData) => dispatch(accountActions.insertTour(FeedbackData)),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartTourContainer);