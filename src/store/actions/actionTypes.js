// fetch method to handle API call and extract data of users
export function fetchUsers() {
  return dispatch => {
    // handling API call
    return fetch("http://localhost:61080/api/users")
      .then(res => res.json())
      .then(json => {
        let users = json;
        //dispatching users
        //console.log(users);
        dispatch(fetchUsersSuccess(users));
      });
  };
}

export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";

// Action creator to dispatch received users to reducer
export const fetchUsersSuccess = users => ({
  type: FETCH_USERS_SUCCESS,
  payload: { users }
});
