import React from "react";
import "./style.css";
import { employees } from "./data";
import { useNavigate } from "react-router-dom";
export default function Employees() {
  let navigate = useNavigate();
  //   console.log(employees);
  return (
    <section id="emp">
      <h1>All Employees</h1>
      <article>
        {employees.map(
          ({ name, email, gender, roll, department, salary, id }) => (
            <div>
              <p>
                <span>Name: </span>
                {name}
              </p>
              <p>
                <span>Email: </span>
                {email}
              </p>
              <p>
                <span>Gender: </span>
                {gender}
              </p>
              <p>
                <span>Roll: </span>
                {roll}
              </p>
              <p>
                <span>Department: </span>
                {department}
              </p>
              <p>
                <span>Salary: </span>
                {salary}
              </p>
              <button
                onClick={() => {
                  navigate(`/employees/${id}`);
                }}
              >
                More Details
              </button>
            </div>
          )
        )}
      </article>
    </section>
  );
}
