import { LOGIN, LOGOUT } from "./action";

export const reducer = (store, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("login", true);
      localStorage.setItem("token", action.payload);
      return {
        ...store,
        token: action.payload,
        isLogin: true,
      };
    case LOGOUT:
      localStorage.setItem("login", false);
      return {
        ...store,
        isLogin: false,
      };

    default:
      return store;
  }
};
