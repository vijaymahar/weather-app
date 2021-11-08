// import React from "react";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Body from "./body";
import "./scss/main.css";
const App = () => {
  const [input, setInput] = useState("hyderabad");
  const [totalData, setTotalData] = useState({});
  const getData = (e) => {
    setInput(e);
  };
  let submitData = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=248cbc8660fdb4cc099d18b7a6920c54`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      const { temp, humidity, pressure } = data.main;
      const { country, sunset } = data.sys;
      const { main: weatherMood } = data.weather[0];
      const { speed } = data.wind;
      const totalData = {
        temp,
        humidity,
        pressure,
        country,
        sunset,
        weatherMood,
        speed,
        input,
      };
      setTotalData(totalData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    submitData();
  }, []);
  return (
    <>
      <h1 className="application-title">weather application</h1>
      <Container className="mt-5">
        <center>
          <div className="input-group">
            <input
              type="search"
              placeholder="enter city.."
              autoFocus
              value={input}
              onChange={(e) => getData(e.target.value)}
            />
            <button type="button" onClick={submitData}>
              search
            </button>
          </div>
        </center>
      </Container>
      <Body totalData={totalData} />
    </>
  );
};

export default App;
