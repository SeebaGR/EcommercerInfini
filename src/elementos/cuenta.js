import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import foto from '../drawable/usuario.png'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const Cuenta = () =>{

    return (
        <div>
               
<Container>
  <Row className="justify-content-md-center">
    <Col xs lg="2">
     
    </Col>
    <Col md="auto"><img
      className="fotoCon"
      src={foto}
      alt="Third slide"
    /></Col>
    <Col xs lg="2">
    
    </Col>
  </Row>
  
</Container> 

<Container>


<Row>
    <Col></Col>
    <Col xs={6}>
        
        
        
    <Container className="containerCuent" >

    <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>ID Usuario</Form.Label>
    <Form.Control type="text" placeholder="Usuario " />

  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Correo Contacto</Form.Label>
    <Form.Control type="text" placeholder="Correo" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Nombre completo</Form.Label>
    <Form.Control type="text" placeholder="Nomber del usuario completo (opcional)" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Telefono</Form.Label>
    <Form.Control type="number" placeholder="Telefono" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Tarjeta</Form.Label>
    <Form.Control type="text" placeholder="Vinculacion de tarjeta de credito" />
  </Form.Group>

        <Col className="spce"> </Col>



    <Container className="containerSpc">

    <Row className="paddinSpc">
    <Col>
    
    <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Av. Oriente 12XX</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Parque sin Esperanza</Card.Subtitle>
    <Card.Text>
      Biobìo, Los Angeles
    </Card.Text>
    <Card.Text>
      Telefono de contacto: X.XXX.XXX
    </Card.Text>

  </Card.Body>
</Card>
    
    
    
    </Col>





    <Col>
    

    
  <Button className="cssButonCuenta" variant="info" size="lg">
    Agregar 
  </Button>
  
  <Button className="cssButonCuenta2" variant="info" size="lg">
    Editar
  </Button>



    
    
    
    
    
    </Col>
  </Row>

    </Container>




</Form>



    </Container>
        
        
        
        
        
        
        </Col>
    <Col></Col>
  </Row>



</Container>



<br/><br/>


        </div> //final
        
    )
}


export default Cuenta;