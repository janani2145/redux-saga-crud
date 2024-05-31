import { CREATE_USER, DELETE_USER, FETCH_ID_USER, FETCH_USER, UPDATE_USER } from "../Type/Type";

export const fetchUser = () => ({ type: FETCH_USER });
export const createUser = (user) => ({ type: CREATE_USER, payload: user });
export const deleteUser = (id)=>({type:DELETE_USER,payload:id});
export const fetchIdUser= (id) => ({type : FETCH_ID_USER, payload : id})
export const updateUser= (id, user) =>({type : UPDATE_USER, payload : id,user})