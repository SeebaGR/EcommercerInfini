import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logop from '../drawable/logop.png';
import { FiInstagram } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import Logo from '../drawable/logop.png'
import Figure from 'react-bootstrap/Figure'
import { Nav, Navbar, Form, FormControl, Button, NavDropdown } from 'react-bootstrap'
import { GrLocation } from "react-icons/gr";
import { GrUser } from "react-icons/gr";
import Insta from '../drawable/instagram.png';
import facebook from '../drawable/facebook.png';
import Google from '../drawable/google.png';



function Footer () {

    return (


        <div>






<Navbar bg="navV " className="containerfull" variant="dark"
        sticky="top"  collapseOnSelect>
        <Navbar.Brand>
       
        </Navbar.Brand>
        <Navbar.Brand style={{marginLeft:'40px'}}>
        <Figure.Image
        width={300}
        height={320}
        alt="171x180"
        src={Logo}
  />
        </Navbar.Brand>
        <Navbar.Brand  expanded="lg"className="brand">
          
    <h1>Contactanos</h1>
    <h3>Contacto@contacto.cl</h3>
        </Navbar.Brand>
        
        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse className="icconprt2">
          <Nav className="brand2" >
          <Navbar.Brand expanded="lg"  >
          
          
          <h3 style={{color:'white'}}><a href="https://www.instagram.com/infinideasagencia/"><Figure.Image
        width={150}
        height={150}
        alt="171x180"
        src={facebook}
  /></a>
  <a href="https://www.instagram.com/infinideasagencia/"><Figure.Image
        width={150}
        height={150}
        alt="171x180"
        src={Insta}
  /></a>
  <a href="https://www.instagram.com/infinideasagencia/"><Figure.Image
        width={150}
        height={150}
        alt="171x180"
        src={Google}
  /></a>
  
  
  
  </h3>
         
        </Navbar.Brand>
              
       
    
          </Nav>
        </Navbar.Collapse>

      </Navbar>


</div>






    )
}


export default Footer;