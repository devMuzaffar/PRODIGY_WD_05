import { Container } from "react-bootstrap";
import NavigationBar from "./components/navigationBar/NavigationBar";
import Weather from "./components/weather/Weather";

const App = () => {
  return (
    <Container style={{ height: "100vh" }} className="p-0 bg-dark" fluid>
      <NavigationBar />
      <Weather />
    </Container>
  );
};

export default App;
