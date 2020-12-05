import React, { Component } from 'react';
import ChangePasswordView from './ChangePasswordView';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import * as accountActions from 'app/actions/accountActions';
import * as loginActions from 'app/actions/loginActions';
import * as navigationActions from 'app/actions/navigationActions';

class ChangePasswordContainer extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
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
      }
    
    render() {
        return <ChangePasswordView {...this.props}/>;
    }
}

function mapStateToProps(state) {
  return {
    loading: state.loadingReducer,
    login_token:state.loginReducer.login_token,
  };
}
function mapDispatchToProps(dispatch) {
    return {
        onChangePassword: (changepasswordtoadd) => dispatch(accountActions.changePasswordRequest(changepasswordtoadd))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChangePasswordContainer);
