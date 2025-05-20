import { call, put, takeEvery } from 'redux-saga/effects';
import api from "../../services/api";

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
   const response = yield call(api.post, 'signin', action.payload);
   yield put(signinSuccess(response.data));
 } catch (error) {
  console.error("Signin error:", error.response?.data.error);
   const errorMessage =
   error.response?.data?.message || error.message || 'Ошибка входа';
   yield put(signinFailure(errorMessage));
 }
}

function* fetchUserDataSaga() {
  try {
    const response = yield call(api.get, 'users/current');
    yield put(fetchUserSuccess(response.data));
  } catch (error) {
    yield put(fetchUserFailure(error.message));
  }
}
  
function* signupSaga(action) {
  try {
    const response = yield call(api.post, 'signup', action.payload);
    yield put(signupSuccess(response.data));
    } catch (error) {
    console.error("Signup error:", error.response?.data);
    yield put(signupFailure(error.response?.data?.message || error.message));
  }
}

function* logoutSaga(action) {
  try {
    yield call(api.delete, 'logout', action.payload);
    yield put(logoutSuccess());
    } catch (error) {
    console.error("Signup error:", error.response?.data);
    yield put(logoutFailure(error.response?.data?.message || error.message));
  }
}

function* authSaga() {
  yield takeEvery(signinRequest.type, signinSaga);  
  yield takeEvery(signupRequest.type, signupSaga); 
  yield takeEvery(logoutRequest.type, logoutSaga); 
  yield takeEvery(fetchUserRequest.type, fetchUserDataSaga); 
}
  
export default authSaga;