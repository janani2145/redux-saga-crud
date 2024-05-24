import { ADD_DATA, ADD_DATA_FAILURE, ADD_DATA_SUCCESS, FETCH_DATA, FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS } from "./type";

export const fetchData = () => ({ type: FETCH_DATA });
export const fetchDataSuccess = (data) => ({ type: FETCH_DATA_SUCCESS, payload: data });
export const fetchDataFailure = (error) => ({ type: FETCH_DATA_FAILURE, payload: error });
export const addData = (data) => ({ type: ADD_DATA, payload: data });
export const addDataSuccess = (data) => ({ type: ADD_DATA_SUCCESS, payload: data });
export const addDataFailure = (error) => ({ type: ADD_DATA_FAILURE, payload: error });