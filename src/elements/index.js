import React from 'react';

import  'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Form, FormControl, Button, NavDropdown } from 'react-bootstrap'
import { GrLocation } from "react-icons/gr";
import { GrUser } from "react-icons/gr";

import logop from '../drawable/logop.png';
import '../App.css';





const NavV= () => {
  return (
    <>
      <Navbar bg="navV " variant="dark"
        sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
          <img src={logop} className="ssize" />{' '}
        </Navbar.Brand>
        <Form className="centrado" inline>
<FormControl type="text" placeholder="Search" className="mr-sm-2" />
<Button variant="outline-success">Search</Button>
</Form> 
        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse className="icconprt2">
          <Nav >

            <Nav.Link href="/inicio">Inicio</Nav.Link>
            <Nav.Link href="/login">Logearse</Nav.Link>
            <Nav.Link href="/seccion4">Carrito</Nav.Link>
            <Nav.Link href="/cuenta">Cuenta</Nav.Link>
            <Nav.Link href="/venta">Ventas</Nav.Link>
       
            <Nav.Link href="/preguntas">Preguntas</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Navbar>

    </>
  );
};

export default NavV;