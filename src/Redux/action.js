export const LOGIN = "LOGIN";

export const login = (payload) => ({
  type: LOGIN,
  payload,
});
export const LOGOUT = "LOGOUT";

export const logout = (payload) => ({
  type: LOGOUT,
  payload,
});
