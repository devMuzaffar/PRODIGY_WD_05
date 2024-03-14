import Table from "react-bootstrap/Table";
import { weatherContext } from "../../context/weatherContext";
import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
const tableHeaders = [
  "Name",
  "Cloud %",
  "Temp",
  "Feels Like",
  "Humidity",
  "T Min",
  "T Max",
  "W SPD",
  "W DEG",
  "Sunrise",
  "Sunset",
];

const Weather = () => {
  // Weather state for Displaying Current Data
  const [weather, setWeather] = useState([]);

  // Weather List for displaying Previously searched Weather Data
  const [weatherHistory, setWeatherHistory] = useState([]);

  // Weather Context from API
  const { weatherData } = useContext(weatherContext);

  // Destructured Weather State
  const {
    cloud_pct,
    temp,
    feels_like,
    humidity,
    min_temp,
    max_temp,
    wind_speed,
    wind_degrees,
    sunsetDate,
    sunriseDate,
    name,
  } = weather;

  // UseEffect to run Everytime changes in Weather Context API
  useEffect(() => {
    if (Object.keys(weatherData).length > 0) {
      setWeather(weatherData);
      setWeatherHistory((prevWeatherData) => [...prevWeatherData, weatherData]);
      console.log(weatherData);
    }
  }, [weatherData]);

  return (
    <Container data-bs-theme="dark">
      <h1 className="my-4 text-center">
        <span className="text-light">
          {name ? `Weather For ${name}` : "Type in Search"}
        </span>
        <span id="cityName" style={{ textTransform: "capitalize" }}></span>
      </h1>
      <main>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm border-primary">
              <div className="card-header py-3 text-bg-primary border-primary">
                <h4 className="my-0 fw-normal">Temperatures</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  <span id="temp2">{temp}</span>
                  <small className="text-body-secondary fw-light">
                    <sup>&#8451;</sup>
                  </small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Temperature is {temp}</li>
                  <li>Min Temperature is {min_temp}</li>
                  <li>
                    Max Temperature is {max_temp}
                    <span id="max_temp"></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm border-primary">
              <div className="card-header py-3 text-bg-primary border-primary">
                <h4 className="my-0 fw-normal">Humidity Info</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  <span id="humidity2">{cloud_pct} </span>
                  <small className="text-body-secondary fw-light">%</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>
                    Wind Degree is {wind_degrees}
                    <span id="wind_degrees"></span>
                  </li>
                  <li>
                    Feels Like {feels_like}
                    <span id="feels_like"></span>
                  </li>
                  <li>
                    Humidity is {humidity}
                    <span id="humidity"></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm border-primary">
              <div className="card-header py-3 text-bg-primary border-primary">
                <h4 className="my-0 fw-normal">Wind Info</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  <span id="wind_speed2">{wind_speed} </span>
                  <small className="text-body-secondary fw-light">km/h</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>
                    Wind Speed is {wind_speed}
                    <span id="wind_speed"></span>
                  </li>
                  <li>
                    Sunrise Time is {sunriseDate}
                    <span id="sunrise"></span>
                  </li>
                  <li>
                    Sunset Time is {sunsetDate}
                    <span id="sunset"></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* History Table */}
        <h2 className="display-6 text-center mb-4 text-light">
          Weather of Your Previous Places
        </h2>

        <Table
          responsive
          style={{ textAlign: "center" }}
          striped
          bordered
          hover
        >
          <thead>
            <tr>
              <th>#</th>
              {tableHeaders.map((name, index) => (
                <th key={index}>{name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {weatherHistory &&
              weatherHistory.map((data, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.name}</td>
                  <td>{data.cloud_pct}</td>
                  <td>{data.temp}</td>
                  <td>{data.feels_like}</td>
                  <td>{data.humidity}</td>
                  <td>{data.min_temp}</td>
                  <td>{data.max_temp}</td>
                  <td>{data.wind_speed}</td>
                  <td>{data.wind_degrees}</td>
                  <td>{data.sunriseDate}</td>
                  <td>{data.sunsetDate}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </main>
    </Container>
  );
};

export default Weather;
