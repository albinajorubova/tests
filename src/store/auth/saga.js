import { call, put, takeEvery } from 'redux-saga/effects';
import api from "../../services/api";
import { getErrorMessageByStatus } from '../../utils/errorMessages';

import { 
    signinRequest, 
    signinSuccess, 
    signinFailure, 
    signupRequest, 
    signupSuccess, 
    signupFailure,
    logoutRequest,
    logoutSuccess,
    logoutFailure,
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserFailure 
  } from './slice'; 
  

function* signinSaga(action) {
  try {
    const response = yield call(api.post, '/signin', action.payload);
     yield put(signinSuccess(response.data));
  } catch (error) {
    const status = error.response?.status;
    const customMessages = {
      400: "Неверный логин или пароль",
    };
    const errorMessage = getErrorMessageByStatus(status, customMessages) || error.message;
    yield put(signinFailure(errorMessage));
  }
}
  
function* fetchUserDataSaga() {
  try {
    const response = yield call(api.get, '/users/current');
    yield put(fetchUserSuccess(response.data));
  } catch (error) {
    const status = error.response?.status;
    const message = getErrorMessageByStatus(status);
    yield put(fetchUserFailure(message));
  }
}
  
function* signupSaga(action) {
  try {
    const response = yield call(api.post, '/signup', action.payload);
    yield put(signupSuccess(response.data));
  } catch (error) {
    const status = error.response?.status;
    const message = getErrorMessageByStatus(status);
    yield put(signupFailure(message));
  }
}

function* logoutSaga() {
  try {
    yield call(api.delete, '/logout');
    yield put(logoutSuccess());
  } catch (error) {
    const status = error.response?.status;
    const message = getErrorMessageByStatus(status);
    yield put(logoutFailure(message));
  }
}

function* authSaga() {
  yield takeEvery(signinRequest.type, signinSaga);  
  yield takeEvery(signupRequest.type, signupSaga); 
  yield takeEvery(logoutRequest.type, logoutSaga); 
  yield takeEvery(fetchUserRequest.type, fetchUserDataSaga); 
}
  
export default authSaga;