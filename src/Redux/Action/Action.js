import { CREATE_USER, CREATE_USER_FAILURE, CREATE_USER_SUCCESS, FETCH_USER, FETCH_USER_FAILURE, FETCH_USER_SUCCESS } from "../Type/Type";



export const fetchUser=()=>({type:FETCH_USER});
export const fetchUserSuccess=()=>({type:FETCH_USER_SUCCESS,payload:data});
export const fetchUserFailure=()=>({type:FETCH_USER_FAILURE,payload:error});
export const createUser=()=>({type:CREATE_USER,payload:data});
export const createUserSuccess=()=>({type:CREATE_USER_SUCCESS,payload:data});
export const createUserFailure=()=>({type:CREATE_USER_FAILURE, payload:error});