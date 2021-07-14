import React from 'react';

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { CardGroup } from 'react-bootstrap';

import { GrCar } from "react-icons/gr";
import { AiFillCamera } from "react-icons/ai";
import { GrDeploy, GrToast, GrBriefcase, GrCoatCheck } from "react-icons/gr";
import { FiHeart } from "react-icons/fi";


const Seccion3 = () =>{

    return (
        <div>

<Container  >

<Container >
  <Row >
    <Col>
    
    <CardGroup className="icconprt">


    <Card  border="success" >
    <Card.Header><GrCar className="iconport"/></Card.Header>
    <Card.Body >
    <Card.Text className="tamCard">
      Autos, Motos y Otros
    </Card.Text>
    </Card.Body>
  </Card>

  <Card border="success" style={{ width: '18rem' }}>
    <Card.Header><AiFillCamera className="iconport"/></Card.Header>
    <Card.Body>
    <Card.Text className="tamCard">
      Camara y accesorios
    </Card.Text>

    </Card.Body>
  </Card>

  <Card border="success" style={{ width: '18rem' }}>
    <Card.Header><GrDeploy className="iconport"/></Card.Header>
    <Card.Body>
    <Card.Text className="tamCard">
      Consola y videojuegos
    </Card.Text>
    </Card.Body>
  </Card>

  <Card border="success" style={{ width: '18rem' }}>
    <Card.Header><GrToast className="iconport"/></Card.Header>
    <Card.Body>
    <Card.Text className="tamCard">
      Electrodomesticos
         
    </Card.Text>
    </Card.Body>
  </Card>

  <Card border="success" style={{ width: '18rem' }}>
    <Card.Header><GrBriefcase className="iconport"/></Card.Header>
    <Card.Body>
    <Card.Text className="tamCard">
      Hogar muebles
    </Card.Text>
    </Card.Body>
  </Card>

  <Card border="success" style={{ width: '18rem' }}>
    <Card.Header><GrCoatCheck className="iconport"/></Card.Header>
    <Card.Body>
    <Card.Text className="tamCard">
      Vestuario calzado
    </Card.Text>
    </Card.Body>
  </Card>

  <Card border="success" style={{ width: '18rem' }}>
    <Card.Header><FiHeart className="iconport"/></Card.Header>
    <Card.Body>
    <Card.Text className="tamCard">
      Belleza y cuidado personal
    </Card.Text>
    </Card.Body>
  </Card>


  </CardGroup>
    
    
    </Col>
  </Row>
</Container>

<Container>
  <Row>
    <Col>
    
    <CardGroup className="icconprt">


    <Card border="success" >
    <Card.Header><GrCar className="iconport"/></Card.Header>
    <Card.Body>
    <Card.Text className="tamCard">
      Autos, Motos y Otros
    </Card.Text>
    </Card.Body>
  </Card>

  <Card border="success" style={{ width: '18rem' }}>
    <Card.Header><AiFillCamera className="iconport"/></Card.Header>
    <Card.Body>
    <Card.Text className="tamCard">
      Camara y accesorios
    </Card.Text>

    </Card.Body>
  </Card>

  <Card border="success" style={{ width: '18rem' }}>
    <Card.Header><GrDeploy className="iconport"/></Card.Header>
    <Card.Body>
    <Card.Text className="tamCard">
      Consola y videojuegos
    </Card.Text>
    </Card.Body>
  </Card>

  <Card border="success" style={{ width: '18rem' }}>
    <Card.Header><GrToast className="iconport"/></Card.Header>
    <Card.Body>
    <Card.Text className="tamCard">
      Electrodomesticos
         
    </Card.Text>
    </Card.Body>
  </Card>

  <Card border="success" style={{ width: '18rem' }}>
    <Card.Header><GrBriefcase className="iconport"/></Card.Header>
    <Card.Body>
    <Card.Text className="tamCard">
      Hogar muebles
    </Card.Text>
    </Card.Body>
  </Card>

  <Card border="success" style={{ width: '18rem' }}>
    <Card.Header><GrCoatCheck className="iconport"/></Card.Header>
    <Card.Body>
    <Card.Text className="tamCard">
      Vestuario calzado
    </Card.Text>
    </Card.Body>
  </Card>

  <Card border="success" style={{ width: '18rem' }}>
    <Card.Header><FiHeart className="iconport"/></Card.Header>
    <Card.Body>
    <Card.Text className="tamCard">
      Belleza y cuidado personal
    </Card.Text>
    </Card.Body>
  </Card>


  </CardGroup>
    
    
    </Col>
  </Row>
</Container>

</Container>


            


        </div>


    )

}


export default Seccion3;