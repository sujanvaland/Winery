import React, { Component } from 'react';
import SignUpView from './SignUpView';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import * as signupActions from 'app/actions/signupActions';
import * as navigationActions from 'app/actions/navigationActions';
// Insert google api key here
const googleApiKey = 'AIzaSyC8GyaXFjDATpdP75dnqV5U4-UVa0lfSZA';
class SignUpContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          country: ""
        };
    }

    componentDidMount() {
      let currentRoute = this.props.navigation.state.routeName;
        let navigation = this.props.navigation;
        BackHandler.addEventListener ('hardwareBackPress', function(){
          if (currentRoute == "Login") {
            BackHandler.exitApp();
            return true;
          }
          else if (currentRoute == "Dashboard") {
            return true;
          }
          else{
            navigation.goBack();
            return true;
          }
        });
    }
    navigateToLogin =()=>{
      navigationActions.navigateToLogin();
    }
    
    render() {
        return <SignUpView {...this.props} 
        Login ={this.navigateToLogin}/>;
    }
}

function mapStateToProps(state) {
    return {
        singupresponse: state.signupReducer,
        loading: state.loadingReducer
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onSignUp: (obj) => dispatch(signupActions.requestSignUp(obj))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpContainer);
