import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Board from "./Board";
import NavBar from "./NavBar";
import './App.css'

function App() {
  const [toggle, setToggle] = useState(true);

  const handleAll = () => {
    setToggle(true);
  };
  const handleRandom = () => {
    setToggle(false);
  };

  return (
    <>
      <NavBar handleAll={handleAll} handleRandom={handleRandom} />
      <Container className="mt-5 pt-4">
        <Board isViewAll={toggle} />
      </Container>
    </>
  );
}

export default App;
