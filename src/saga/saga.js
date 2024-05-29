
import { call, put, takeEvery } from 'redux-saga/effects';
import axios, { all } from 'axios';

import { API_URL } from '../services/mockApis';
import { CREATE_USER_SUCCESS, FETCH_USER, FETCH_USER_SUCCESS } from '../Redux/Type/Type';


//workerSaga
function* createuser(action){
try{
const response= yield call(axios.post, API_URL, action.payload)
yield put({type: CREATE_USER_SUCCESS, payload:response.data});
}
catch(error){
    console.error("Error creating user:", error);
}
}
function* fetchuser(action){
    try{
const response=yield call (axios.get, API_URL)
yield put({type:FETCH_USER_SUCCESS,payload:response.data})
    }
    catch(error){
console.error("Error fetching user")
    }
}


//watcherSaga
function*watchCreateUser(){
yield takeEvery(CREATE_USER,createuser)
}
function*watchFetchUser(){
    yield takeEvery(FETCH_USER,fetchuser)
}

//rootsaga
export default function*rootSaga(){
    yield all([watchCreateUser(),watchFetchUser()]);
}