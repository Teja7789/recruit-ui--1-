// SignupSaga.js
import { put, takeEvery } from 'redux-saga/effects';
 
import { SIGNUP_REQUEST, signupFailure, signupSuccess } from '../actions/signupActions';
 


function* signupFlow(action) {
  try {
    const { user, personal, company } = action.payload;
    
    // const signupService = new signupService();

    // yield call(signupService.signupUser, user);
    // yield call(signupService.savePersonalDetails, personal);
    // yield call(signupService.saveCompanyDetails, company);
    
    yield put(signupSuccess());
  } catch (error) {
    yield put(signupFailure(error));
  }
}

function* signupSaga() {
  yield takeEvery(SIGNUP_REQUEST, signupFlow);
}

export default signupSaga;