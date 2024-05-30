import { CREATE_USER, FETCH_USER } from "../Type/Type";

export const fetchUser = () => ({ type: FETCH_USER });
export const createUser = (user) => ({ type: CREATE_USER, payload: user });
