import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import Routes from "./Routes";
import "./App.css";

function App() {
  return (
    <div className="App container">
      <Navbar expand="lg" bg="light" >
        <Navbar.Brand as={Link} to="/">login-demo</Navbar.Brand>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;
