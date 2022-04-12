import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Employee() {
  let { id } = useParams();
  console.log(id);
  let navigate = useNavigate();
  return (
    <div id="single">
      <img
        src={`https://source.unsplash.com/random/200x200?sig=${Math.random()}`}
        alt=""
      />
      <p>
        <span>Name: </span>
      </p>
      <p>
        <span>Employee_ID: </span>
      </p>
      <p>
        <span>Email: </span>
      </p>
      <p>
        <span>Gender: </span>
      </p>
      
      <p>
        <span>Department: </span>
      </p>
      <p>
        <span>Salary: </span>
      </p>
      <button
        onClick={() => {
          navigate(`/employees`);
        }}
      >
        Go Back
      </button>
      <button
        style={{ marginLeft: "20px" }}
        onClick={() => {
          navigate(`/employees/${id}/edit`);
        }}
      >
        Edit
      </button>
    </div>
  );
}

export {Employee}