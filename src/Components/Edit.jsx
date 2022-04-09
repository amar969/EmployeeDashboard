import React from "react";
import "./style.css";
export default function Edit() {
  //  name: "John Smith",
  // email: "johnsmith@gmail.com",
  // gender: "male",
  // roll: "manager",
  // department: "HR",
  // salary: 100,
  // id: 1,
  return (
    <form action="/employees">
      <h1>Employee Edit Page</h1>
      <label htmlFor="">Enter Your Name:</label>
      <input type="text" placeholder="enter your name" />
      <label htmlFor="">Enter Your Email:</label>
      <input type="text" placeholder="enter your email" />
      <label htmlFor="">Enter Your Gender:</label>
      <input type="text" placeholder="enter your gender" />
      <label htmlFor="">Enter Your Roll:</label>
      <input type="text" placeholder="enter your roll" />
      <label htmlFor="">Enter Your Department:</label>
      <input type="text" placeholder="enter your department" />
      <label htmlFor="">Enter Your Salary:</label>
      <input type="text" placeholder="enter your salary" />
      <button>Submit Details</button>
    </form>
  );
}
