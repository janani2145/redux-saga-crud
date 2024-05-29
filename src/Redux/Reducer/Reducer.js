import { CREATE_DATA_SUCCESS, CREATE_USER_SUCCESS, FETCH_DATA_SUCCESS, FETCH_USER_SUCCESS } from "../Type/Type";



const initialState={
    users: [],
    editId:null
};
const  rootReducer=(state = initialState, action) =>{
switch (type.action){
    case CREATE_USER_SUCCESS:
        return {...state,users:[...state,action.payload]}
    case FETCH_USER_SUCCESS:
        return {...state, users:action.payload};
       
}
}
export default rootReducer;
