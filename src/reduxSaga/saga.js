import { call, put, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';
import { CREATE_USER, CREATE_USER_SUCCESS, DELETE_USER, DELETE_USER_SUCCESS, FETCH_ID_USER, FETCH_ID_USER_SUCCESS, FETCH_USER, FETCH_USER_SUCCESS, UPDATE_USER, UPDATE_USER_SUCCESS } from '../Redux/Type/Type';
import { updateUser } from '../Redux/Action/Action';


function* createUserSaga(action) {
  try {
    const response = yield call(axios.post, "https://65ae12861dfbae409a73dcb5.mockapi.io/users", action.payload);
    yield put({ type:CREATE_USER_SUCCESS, payload: response.data });
  } catch (error) {
    console.error("Error creating user:", error);
  }
}

function* fetchUserSaga() {
  try {
    const response = yield call(axios.get, "https://65ae12861dfbae409a73dcb5.mockapi.io/users");
    yield put({ type: FETCH_USER_SUCCESS, payload: response.data });
  } catch (error) {
    console.error("Error fetching user:", error);
  }
}

function* deleteUserSaga(action){
  try{
    yield call (axios.delete,`https://65ae12861dfbae409a73dcb5.mockapi.io/users/${action.payload}`);
    yield put ({type:DELETE_USER_SUCCESS,payload :action.payload});
  }
  catch(error){
    console.error("Error deleting user:", error);
  }
}
function* fetchIdUserSaga(action){
  try{
    const response = yield call (axios.get,`https://65ae12861dfbae409a73dcb5.mockapi.io/users/${action.payload}`);
    yield put ({type:FETCH_ID_USER_SUCCESS, payload:response.data});
  }
  catch(error){
    console.log("Error fetchingById user:",error);
  }
}
function* updateUserSaga(action){
  try{
    const response = yield call (axios.put,`https://65ae12861dfbae409a73dcb5.mockapi.io/users/${action.payload.id}`);
yield put({type: UPDATE_USER_SUCCESS, payload:response.data})
  }
  catch(error){
    console.log("Error updating user:",error)
  }
}



//WatcherSaga
function* watchCreateUser() {
  yield takeEvery(CREATE_USER, createUserSaga);
}

function* watchFetchUser() {
  yield takeEvery(FETCH_USER, fetchUserSaga);
}
function* watchDeleteUser(){
  yield takeEvery(DELETE_USER, deleteUserSaga);
}
function* watchFetchIdUser(){
  yield takeEvery(FETCH_ID_USER, fetchIdUserSaga)
}
function* watchUpdateUser(){
  yield takeEvery (UPDATE_USER, updateUserSaga)
}

export default function* rootSaga() {
  yield all([watchCreateUser(), watchFetchUser(),watchDeleteUser(), watchFetchIdUser(),watchUpdateUser()]);
}
