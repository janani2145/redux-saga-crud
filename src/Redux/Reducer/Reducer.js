// import { CREATE_USER_SUCCESS, DELETE_USER_SUCCESS, FETCH_ID_USER_SUCCESS, FETCH_USER_SUCCESS, UPDATE_USER_SUCCESS } from "../Type/Type";

// const initialState = {
//   users: [],
//   user: null,
  
// };

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case CREATE_USER_SUCCESS:
//       return { ...state, users: [...state, action.payload] };
//     case FETCH_USER_SUCCESS:
//       return { ...state, users: action.payload };
//       case DELETE_USER_SUCCESS:
//         return {
//           users:state.users.filter((user)=>user.id !== action.payload),
//         }
//         case FETCH_ID_USER_SUCCESS:
//           return {
// ...state, users:action.payload
//           };
//           case UPDATE_USER_SUCCESS :
//             return {...state, users: state.users.map((user)=>user.id===action.payload.id?action.payload:user)

//             };
//     default:
//       return state;
//   }
// }

// export default rootReducer;



import { CREATE_USER_SUCCESS, DELETE_USER_SUCCESS, FETCH_ID_USER_SUCCESS, FETCH_USER_SUCCESS, UPDATE_USER_SUCCESS } from "../Type/Type";

const initialState = {
  users: [],
  user: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_SUCCESS:
      return { ...state, users: [...state.users, action.payload] };
      
    case FETCH_USER_SUCCESS:
      return { ...state, users: action.payload };
      
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
      
    case FETCH_ID_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
      
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
      
    default:
      return state;
  }
};

export default rootReducer;
