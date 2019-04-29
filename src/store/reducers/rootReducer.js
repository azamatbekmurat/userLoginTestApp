import { FETCH_USERS_SUCCESS } from "../actions/actionTypes";

// Reducer which handle the action when it is successfully fetching users from API call
const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      // When request is successful, we passing users received from API call to store
      //console.log("action", action.payload);
      return {
        ...state,
        users: action.payload.users
      };

    default:
      return state;
  }
};

export default rootReducer;
