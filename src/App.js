import React, { useState, useEffect } from "react";

import "./App.css";

const getShowList = () => {
  const datalist = localStorage.getItem("list");
  console.log(datalist);
  if (datalist.length) {
    return JSON.parse(datalist);
  } else {
    return [
      {
        userName: "",
        email: "",
        phone: "",
        pass: "",
      },
    ];
  }
};

function App() {
  const [userResistration, setUserResistration] = useState({
    userName: "",
    email: "",
    phone: "",
    pass: "",
  });

  const [data, setData] = useState(getShowList());

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(data));
  }, [data]);

  const handleClick = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserResistration({ ...userResistration, [name]: value });
  };

  const showData = () => {
    setData([...data, userResistration]);
    setUserResistration({
      userName: "",
      email: "",
      phone: "",
      pass: "",
    });
  };

  return (
    <div className="App">
      <br />
      <input
        type="text"
        value={userResistration.userName}
        name="userName"
        onChange={handleClick}
      />
      <br />
      <input
        type="text"
        value={userResistration.email}
        name="email"
        onChange={handleClick}
      />
      <br />
      <input
        type="number"
        value={userResistration.phone}
        name="phone"
        onChange={handleClick}
      />
      <br />
      <input
        type="password"
        value={userResistration.pass}
        name="pass"
        onChange={handleClick}
      />
      <br />
      <input type="submit" onClick={showData} />
      <br />
      <div>
        {data.map((cv,i) => (
          <div key={i}>
            <span>{cv.userName}</span> &nbsp;
            <span>{cv.email}</span>&nbsp;
            <span>{cv.phone}</span>&nbsp;
            <span>{cv.pass}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
