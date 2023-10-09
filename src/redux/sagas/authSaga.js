// authSaga.js
import { put, takeLatest, call } from 'redux-saga/effects';
 
import { loginFailure, loginSuccess } from '../actions/authActions';
import { authApi } from '../../services/authService';

function* loginUser(action) {
  try {
    const { username, password } = action.payload;
    const response = yield call(authApi.login, username, password); // Replace with your API call

    if (response.ok) {
      const token = response.data.token;
      yield put(loginSuccess(token));
    } else {
      yield put(loginFailure('Authentication failed'));
    }
  } catch (error) {
    yield put(loginFailure('Network error'));
  }
}

export function* watchLoginUser() {
  yield takeLatest('LOGIN_REQUEST', loginUser);
}
