import { put, call, select } from 'redux-saga/effects';
import * as loginActions from 'app/actions/loginActions';
import * as eventActions from 'app/actions/eventActions';
import { getUpcomingEvents, getPastEvents } from 'app/api/methods/event';
import * as navigationActions from 'app/actions/navigationActions';
import { Alert } from 'react-native';

// Our worker Saga that loads filter

function* getUpcomingEventsAsync(action) {
  yield put(loginActions.enableLoader());
  const response = yield call(getUpcomingEvents,action);
  if (response) {
      yield put(eventActions.ongetUpcomingEventsResponse(response));
      yield put(loginActions.disableLoader({}));
  } else {
      yield put(eventActions.ongetUpcomingEventsFailedResponse(response));
      yield put(loginActions.disableLoader({}));
  }
}

function* getPastEventsAsync(action) {
  yield put(loginActions.enableLoader());
  const response = yield call(getPastEvents,action);
  if (response) {
      yield put(eventActions.ongetPastEventsResponse(response));
      yield put(loginActions.disableLoader({}));
  } else {
      yield put(eventActions.ongetPastEventsFailedResponse(response));
      yield put(loginActions.disableLoader({}));
  }
}

export { getUpcomingEventsAsync, getPastEventsAsync }