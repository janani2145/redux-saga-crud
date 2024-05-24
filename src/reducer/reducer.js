import { ADD_DATA_SUCCESS, FETCH_DATA_SUCCESS } from "../action/type";

const initialState = {
  data: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return { ...state, data: action.payload };
    case ADD_DATA_SUCCESS:
      return { ...state, data: [...state.data, action.payload] };
    default:
      return state;
  }
};

export default rootReducer;