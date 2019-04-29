// Action creator where with fetch method handling API call and dispatching received data of users
export function fetchUsers() {
  return dispatch => {
    // handling API call
    return fetch("http://localhost:61080/api/users")
      .then(res => res.json())
      .then(json => {
        let users = json;
        //dispatching users
        dispatch(fetchUsersSuccess(users));
      });
  };
}

export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";

export const fetchUsersSuccess = users => ({
  type: FETCH_USERS_SUCCESS,
  payload: { users }
});
