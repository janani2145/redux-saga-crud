import { CREATE_USER_SUCCESS, FETCH_USER_SUCCESS } from "../Type/Type";

const initialState = {
  users: [],
  
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_SUCCESS:
      return { ...state, users: [...state.users, action.payload] };
    case FETCH_USER_SUCCESS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
}

export default rootReducer;
