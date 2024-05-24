// sagas.js
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { addDataFailure, addDataSuccess, fetchDataFailure, fetchDataSuccess } from '../action/action';
import { ADD_DATA, FETCH_DATA } from '../action/type';


function* fetchDataSaga() {
  try {
    const response = yield call(axios.get, 'https://65ae12861dfbae409a73dcb5.mockapi.io/employee');
    yield put(fetchDataSuccess(response.data));
  } catch (error) {
    yield put(fetchDataFailure(error.message));
  }
}

function* addDataSaga(action) {
  try {
    const response = yield call(axios.post, 'https://65ae12861dfbae409a73dcb5.mockapi.io/employee', action.payload);
    yield put(addDataSuccess(response.data));
  } catch (error) {
    yield put(addDataFailure(error.message));
  }
}

export default function* rootSaga() {
  yield takeEvery(FETCH_DATA, fetchDataSaga);
  yield takeEvery(ADD_DATA, addDataSaga);
}
