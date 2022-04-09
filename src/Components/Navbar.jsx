import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Redux/action";

export default function Navbar() {
  const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to={`${isLogin ? "employees" : "login"}`}>Employees</Link>
      {isLogin && (
        <button
          onClick={() => {
            dispatch(logout());
          }}
        >
          Logout
        </button>
      )}
    </nav>
  );
}
