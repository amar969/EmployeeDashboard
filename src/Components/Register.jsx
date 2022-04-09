import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
  let navigate = useNavigate();
  let [inp, setInp] = React.useState({
    name: "Harsh Gajera",
    email: "harsh.gajera17@gmail.com",
    password: "harsh1234",
    username: "harsh163",
    mobile: "7046581170",
    description: "Learning Web Development",
  });
  const formHandler = (e) => {
    e.preventDefault();

    console.log(inp);
    fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inp),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.error === false) {
          alert(res.message);
          navigate("/login");
        } else {
          alert(res.message + ". Enter Different Details");
          setInp({
            name: "Harsh Gajera",
            email: "harsh.gajera17@gmail.com",
            password: "harsh1234",
            username: "harsh163",
            mobile: "7046581170",
            description: "Learning Web Development",
          });
        }
      });
  };
  const changeHandler = (e) => {
    setInp({
      ...inp,
      [e.target.id]: e.target.value,
    });
  };
  return (
    <form onSubmit={formHandler}>
      <label htmlFor="name">Enter Your Name:</label>
      <input
        type="text"
        placeholder="enter your name"
        id="name"
        value={inp.name}
        onChange={changeHandler}
      />
      <label htmlFor="email">Enter Your Email:</label>
      <input
        type="text"
        placeholder="enter your email"
        id="email"
        value={inp.email}
        onChange={changeHandler}
      />
      <label htmlFor="password">Enter Your Password:</label>
      <input
        type="text"
        placeholder="enter your password"
        id="password"
        value={inp.password}
        onChange={changeHandler}
      />
      <label htmlFor="username">Enter Your Username:</label>
      <input
        type="text"
        placeholder="enter your username"
        id="username"
        value={inp.username}
        onChange={changeHandler}
      />
      <label htmlFor="mobile">Enter Your Mobile Number:</label>
      <input
        type="text"
        placeholder="enter your number"
        id="mobile"
        value={inp.mobile}
        onChange={changeHandler}
      />
      <label htmlFor="description">Enter Your Description:</label>
      <input
        type="text"
        placeholder="enter your description"
        id="description"
        value={inp.description}
        onChange={changeHandler}
      />

      <button>Register</button>
    </form>
  );
}
