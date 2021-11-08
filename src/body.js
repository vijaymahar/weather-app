import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  WiDayRainWind,
  WiDayHaze,
  WiHumidity,
  WiRain,
  WiStrongWind,
  WiDaySunny,
  WiDayFog,
  WiDayCloudyHigh,
  WiDayCloudyWindy,
  WiDust,
} from "react-icons/wi";

const Body = ({ totalData }) => {
  const {
    temp,
    humidity,
    pressure,
    country,
    sunset,
    weatherMood,
    speed,
    input,
  } = totalData;

  const [weatherIcon, setWeatherIcon] = useState("");

  const date = new Date(sunset * 1000);
  const time = date.toLocaleTimeString();
  const curDate = `${date.getHours()}:${date.getMinutes()}`;

  useEffect(() => {
    if (weatherMood) {
      switch (weatherMood) {
        case "Clear":
          setWeatherIcon("wi-day-sunny");
          break;
        case "Haze":
          setWeatherIcon("wi-day-fog");
          break;
        case "Clouds":
          setWeatherIcon("wi-day-cloudy");
          break;
        case "Mist":
          setWeatherIcon("wi-hail");
          break;
        case "Rain":
          setWeatherIcon("wi-day-rain");
          break;
        default:
          setWeatherIcon("wi-day-sprinkle");
          break;
      }
    }
  }, [weatherMood]);

  return (
    <>
      <Container className="mt-5" id="container">
        <center>
          <Row className="first-row bg-light">
            <Col className="icon-main">
              <i className={`wi ${weatherIcon}`}></i>
            </Col>
          </Row>
          <Row className="second-row d-flex align-items-center text-light">
            <Col md={8}>
              <Row className="d-flex align-items-center">
                <Col>
                  <span className="display-2">{temp}&deg;</span>
                </Col>
                <Col>
                  <h1 className="display-5">{weatherMood}</h1>
                  <p className="fs-5">
                    {input}, {country}
                  </p>
                </Col>
              </Row>
            </Col>
            <Col md={4} className="bg-teal">
              <p>
                {setInterval(() => {
                  return new Date().toLocaleString();
                }, 1000)}
              </p>
            </Col>
          </Row>

          <Row className="third-row bg-light">
            <Col md={3} className="extra-info">
              <Row className="icon-bottom">
                <Col md={3} className="render-bi">
                  <WiDayHaze />
                </Col>
                <Col md={9}>
                  <h4>{time}</h4>
                  <h5>Sunset</h5>
                </Col>
              </Row>
            </Col>
            <Col md={3} className="extra-info">
              <Row className="icon-bottom">
                <Col md={3} className="render-bi">
                  <WiHumidity />
                </Col>
                <Col md={9}>
                  <h4>{humidity}</h4>
                  <h5>Humidity</h5>
                </Col>
              </Row>
            </Col>
            <Col md={3} className="extra-info">
              <Row className="icon-bottom">
                <Col md={3} className="render-bi">
                  <WiRain />
                </Col>
                <Col md={9}>
                  <h4>{pressure}</h4>
                  <h5>pressure</h5>
                </Col>
              </Row>
            </Col>
            <Col md={3} className="extra-info">
              <Row className="icon-bottom">
                <Col md={3} className="render-bi">
                  <WiStrongWind />
                </Col>
                <Col md={9}>
                  <h4>{speed}</h4>
                  <h5>Wind</h5>
                </Col>
              </Row>
            </Col>
          </Row>
        </center>
      </Container>
    </>
  );
};

export default Body;
