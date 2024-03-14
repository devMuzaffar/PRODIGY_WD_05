import { useContext, useRef } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { weatherContext } from "../../context/weatherContext";
import getWeather from "../../API/weather";

const NavigationBar = () => {
  // Show Alert Message on Click
  const aboutMessage = () => alert("This App was made by Muzaffar Khan");

  // Set New Weather Data in Context
  const { setWeatherData } = useContext(weatherContext);

  // For Getting Form Value
  const formValue = useRef(null);

  // Setting Weather Data upon Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const weatherData = await getWeather(formValue.current.value);
    if (weatherData) {
      setWeatherData({ ...weatherData, name: formValue.current.value });
    }
    formValue.current.value = "";
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">Weather <span className="text-primary">React</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>Home</Nav.Link>
            <Nav.Link onClick={aboutMessage}>About</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              ref={formValue}
            />
            <Button
              variant="success"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
