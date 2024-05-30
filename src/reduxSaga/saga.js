import { call, put, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';
import { CREATE_USER, CREATE_USER_SUCCESS, FETCH_USER, FETCH_USER_SUCCESS } from '../Redux/Type/Type';


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

function* watchCreateUser() {
  yield takeEvery(CREATE_USER, createUserSaga);
}

function* watchFetchUser() {
  yield takeEvery(FETCH_USER, fetchUserSaga);
}

export default function* rootSaga() {
  yield all([watchCreateUser(), watchFetchUser()]);
}
