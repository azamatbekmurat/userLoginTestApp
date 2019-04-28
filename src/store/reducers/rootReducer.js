//import * as types from "../actions/types";

const initialState = {
  //users: null,
  userEmail: "",
  password: "",
  isLoggedIn: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_LOGIN":
      return {
        ...state,
        userEmail: action.userEmail,
        isLoggedIn: true
      };
    // case types.AUTH_LOGOUT:
    //   return initialState;
    default:
      return state;
  }
};

export default authReducer;
