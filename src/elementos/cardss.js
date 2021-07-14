import React from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import CardGroup from 'react-bootstrap/CardGroup' 

import CardColumns from 'react-bootstrap/CardColumns'
import '../App.css'
import foto4 from '../drawable/foto4.jpg';
import foto5 from '../drawable/foto5.png';
import foto6 from '../drawable/foto6.jpg';
import foto7 from '../drawable/foto7.jpg';




import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import { GrCar } from "react-icons/gr";
import { AiFillCamera } from "react-icons/ai";
import { GrDeploy, GrToast, GrBriefcase, GrCoatCheck } from "react-icons/gr";
import { FiHeart } from "react-icons/fi";


const Cardss = () =>{

    return (
        <div>
            


<Container >
  <Row >
    <Col>
    
    <CardGroup className="icconprt">


    <Card  border="success" >
    <Card.Img variant="top" src={foto4} className="image2"/>
    <Card.Header><Card.Title>Ropa e indumentaria </Card.Title>  </Card.Header>
    <Card.Body >
    <Card.Text style={{ fontSize: '12px' }} >
        Accesorios
      </Card.Text>
      <Card.Text style={{ fontSize: '12px' }}>
        Pantalones
      </Card.Text>
      <Card.Text style={{ fontSize: '12px' }}>
        Moda infantil
      </Card.Text>
      <Card.Text style={{ fontSize: '12px' }}>
        Moda Verano
      </Card.Text>
    </Card.Body>
  </Card>

  <Card border="success" style={{ width: '18rem' }}>
  <Card.Img variant="top" className="image2"  src={foto5} />
    <Card.Header><Card.Title>Jardìn y cocina</Card.Title></Card.Header>
    <Card.Body>
    <Card.Text style={{ fontSize: '12px' }}>
        Utensilios de cocina{' '}
      </Card.Text>
      <Card.Text style={{ fontSize: '12px' }}>
        Decoraciòn{' '}
      </Card.Text>
      <Card.Text style={{ fontSize: '12px' }}>
        Mueble{' '}
      </Card.Text>
      <Card.Text style={{ fontSize: '12px' }}>
        Herramienta de jardìn{' '}
      </Card.Text>

    </Card.Body>
  </Card>

  <Card border="success" style={{ width: '18rem' }}>
  <Card.Img variant="top" className="image2" src={foto6} />
    <Card.Header><Card.Title>Polerones</Card.Title></Card.Header>
    <Card.Body>
    <Card.Text style={{ fontSize: '12px' }}>
        Poleron Varòn
      </Card.Text>
      <Card.Text style={{ fontSize: '12px' }}>
        Poleron Mujer
      </Card.Text>
      <Card.Text style={{ fontSize: '12px' }}>
        Polar Varon
      </Card.Text>
      <Card.Text style={{ fontSize: '12px' }}>
        Poleron Mujer
      </Card.Text>
    </Card.Body>
  </Card>

  <Card border="success" style={{ width: '18rem' }}>
  <Card.Img variant="top" className="image2"  src={foto7} />
    <Card.Header><Card.Title>Zapatillas</Card.Title></Card.Header>
    <Card.Body>
    <Card.Text style={{ fontSize: '12px' }}>
        Zapato Casual
      </Card.Text>
      <Card.Text style={{ fontSize: '12px' }}>
        Zapatos Formales
      </Card.Text>
      <Card.Text style={{ fontSize: '12px' }}>
        Zapatillas Urbanas
      </Card.Text>
      <Card.Text style={{ fontSize: '12px' }}>
        Zapatillas ofertas
      </Card.Text>
    </Card.Body>
  </Card>

  

  
  


  </CardGroup>
    
    
    </Col>
  </Row>
</Container>




        </div>

    )

}

export default Cardss;