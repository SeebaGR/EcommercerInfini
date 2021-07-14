import  'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Form, FormControl, Button, NavDropdown } from 'react-bootstrap'
import { GrLocation } from "react-icons/gr";
import { GrUser } from "react-icons/gr";

import logop from '../drawable/logop.png';

function Navv() {
   
<Navbar bg="navV" variant="dark">
<Navbar.Brand>
  <img src={logop} className="ssize" ></img>
</Navbar.Brand>
<Form className="centrado" inline>
<FormControl type="text" placeholder="Search" className="mr-sm-2" />
<Button variant="outline-success">Search</Button>
</Form>
<Nav >
  <Nav.Link href="inicio">Inicio</Nav.Link>
  <Nav.Link href="inicio">Tiendas</Nav.Link>
  
  <Nav.Link href="inicio"> <GrLocation/>Tienda</Nav.Link>
  <Nav.Link href="inicio"><GrUser/>Acceso</Nav.Link>
</Nav>
</Navbar>

}

export default Navv;
