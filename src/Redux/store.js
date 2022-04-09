import { createStore } from "redux";
import { reducer } from "./reducer";
let isLogin = localStorage.getItem("login")
  ? localStorage.getItem("login")
  : false;
let token = localStorage.getItem("token") ? localStorage.getItem("token") : "";
export const store = createStore(reducer, {
  isLogin,
  token,
});
