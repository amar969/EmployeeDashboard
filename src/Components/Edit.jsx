import React from "react";

function Edit() {
  return (
    <form action="/employees">
      <h1>Employee Create Page</h1>
      <label >Enter Name:</label>
      <input type="text" placeholder="Enter name" />
      <label >Enter Employee_ID:</label>
      <input type="text" placeholder="Enter roll" />
      <label >Enter Email:</label>
      <input type="text" placeholder="Enter email" />
      <label >Enter Gender:</label>
      <input type="text" placeholder="Enter gender" />
      <label >Enter Department:</label>
      <input type="text" placeholder="Enter department" />
      <label >Enter Salary:</label>
      <input type="text" placeholder="Enter salary" />
      <button>Submit Details</button>
    </form>
  );
}

export {Edit}