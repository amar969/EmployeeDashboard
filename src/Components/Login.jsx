import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  let [input, setInput] = React.useState({
  });
  const formHandler = (e) => {
    e.preventDefault();
    fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.error === false) {
             navigate("/");
        } else {
          alert(res.message);
        }
      });
  };
  const changeHandler = (e) => {
    setInput({
      ...input,
      [e.target.id]: e.target.value,
    });
  };
  return (
    <form onSubmit={formHandler}>
      <label htmlFor="name">Enter Name:</label>
      <input
        type="text"
        placeholder="enter name"
        id="name"
        value=""
      />

      <label htmlFor="uname">Enter Username:</label>
      <input
        type="text"
        placeholder="enter your username"
        id="username"
        value={input.username}
        onChange={changeHandler}
      />
      <label htmlFor="password">Enter Password:</label>
      <input
        type="text"
        placeholder="enter password"
        id="password"
        value={input.password}
        onChange={changeHandler}
      />

      <button>Login</button>
    </form>
  );
}

export {Login}