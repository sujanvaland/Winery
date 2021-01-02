/*
 * Reducer actions related with navigation
 */
import NavigationService from 'app/navigation/NavigationService';

export function navigateToHome(params) {
    NavigationService.navigate('Home', params);
}

export function navigateToLogin(params) {
    NavigationService.navigate('Login', params);
}

export function navigateToSignup(params) {
    NavigationService.navigate('Signup', params);
}

export function navigateToForgotPassword(params) {
    NavigationService.navigate('Forgotpassword', params);
}

export function navigateToChangePassword(params) {
    NavigationService.navigate('ChangePassword', params);
}

export function navigateToPersonalDetail(params) {
    NavigationService.navigate('MyProfile', params);
}


export function navigateToStoreListing(params) {
    NavigationService.navigate('StoreListing', params);
}


export function navigateToStoreMap(params) {
    NavigationService.navigate('StoreMap', params);
}

export function navigateToStoreMapStart(params) {
    NavigationService.navigate('StoreMapStart', params);
}


export function navigateToStartTour(params) {
    NavigationService.navigate('StartTour', params);
}


export function navigateToVerifyotp(params) {
    NavigationService.navigate('Verifyotp', params);
}

export function navigateToEditProfile(params) {
    NavigationService.navigate('EditProfile', params);
}

export function navigateToPreviousScreen(screen,params) {
    NavigationService.navigate(screen, params);
}

export function navigateToTourListing(params) {
    NavigationService.navigate('TourListing', params);
}

export function navigateToTourDetail(params) {
    NavigationService.navigate('TourDetail', params);
}
