initialState = {};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      console.log("login");
      return state;
    default:
      return state;
  }
};

export default rootReducer;
