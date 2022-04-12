import React from "react";

function Home() {
  let [data, setData] = React.useState([
    "Amarjeeet Maurya",
    "amar.mau96@gmail.com",
    "amar969",
    9699262448,
    "Checking",
  ]);
  React.useEffect(() => {
    fetch("https://masai-api-mocker.herokuapp.com/user/masai-school", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.message.includes("Invalid")) {
          setData([
            "Amarjeet Maurya",
            "amar.mau96@gmail.com",
            "amar969",
            9699262448,
            "Checking",
          ]);
          return;
        }
        setData([
          res.name,
          res.email,
          res.username,
          res.mobile,
          res.description,
        ]);
      });
  }, []);

  return (
    <div id="homepage">
      <h1>Home Page</h1>
      <p>
        <span>Name: </span>
      </p>
      <p>
        <span>Email: </span>
      </p>
      <p>
        <span>Username: </span>
      </p>
      <p>
        <span>Mobile: </span>
      </p>
      <p>
        <span>Description: </span>
      </p>
    </div>
  );
}

export {Home}