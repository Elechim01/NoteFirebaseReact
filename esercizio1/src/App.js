import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './Components/Home';
import {Navbar,Container} from 'react-bootstrap';

function App() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>Note Interessanti</Navbar.Brand>
    </Container>
  </Navbar>
   <Home/>
   </>
  );
}

export default App;
