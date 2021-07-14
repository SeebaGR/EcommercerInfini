import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import foto14 from '../drawable/foto16.PNG'
import foto15 from '../drawable/foto15.png'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Button from 'react-bootstrap/Button'


const VntZap = () =>{

    return (
        <div style={{ backgroundColor:'#c2c5c5'}}>

<Container style={{ backgroundColor:'#c2c5c5'}}  >

<Container fluid="xlContainer"   >

<Row  className="carr4" >
    <Col className="tituloventa"> <h1 >Bienvenido a la compra de su producto</h1></Col>
  </Row>
  
  <Row  style={{ backgroundColor:'white'}}>
    
    <Col  >
    
    <img
      className="fotoSeccion4"
      src={foto14}
      alt="Third slide"
    />
    
    
    </Col>


    <Col style={{  marginRight: '10px'}} >



      <Container  >

 
<Row style={{marginBottom:'20px'}} >
<Card border="primary" className="carr" style={{ marginLeft:'60px', width: '18rem'}}>
    <Card.Header>Zapatilla adidas Modelo ZXY</Card.Header>
    <Card.Body >
      <Card.Title>Precio $46.990</Card.Title>
      <p className="cssp2"></p>
      <DropdownButton variant="info" style={{ marginTop: '15px' }}   title="Cantidad">
            <Dropdown.Item href="#/action-1">1</Dropdown.Item>
            <Dropdown.Item href="#/action-2">2</Dropdown.Item>
            <Dropdown.Item href="#/action-3">3</Dropdown.Item>
        </DropdownButton>

        <DropdownButton variant="info" style={{ marginTop: '15px' }}   title="Talla">
            <Dropdown.Item href="#/action-1">32</Dropdown.Item>
            <Dropdown.Item href="#/action-2">33</Dropdown.Item>
            <Dropdown.Item href="#/action-3">34</Dropdown.Item>
            <Dropdown.Item href="#/action-3">40</Dropdown.Item>
            <Dropdown.Item href="#/action-3">44</Dropdown.Item>
        </DropdownButton>

        <DropdownButton variant="info" style={{ marginTop: '15px' }}   title="Color">
            <Dropdown.Item href="#/action-1">Rojo</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Azul</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Negro</Dropdown.Item>
        </DropdownButton>
      
        <p className="cssp2" style={{ marginTop: '15px' }}></p>
      <Card.Text style={{ marginTop: '15px' }}>
        Zapatilla con materiales ultra resistente que aportan una buena ventilacion y duracion del producto.
      </Card.Text>
      
   
      
    </Card.Body>
  </Card>    


</Row>

<Row> 



</Row>

      </Container>
    
    
    </Col>
  

    

<Container>
<Row>
    <Col style={{backgroundColor:'red' , marginLeft:'10px'}}>
    
    

    </Col>
    <Col xs={8}>
      
      
      <Container className="cntt3" style={{ textAlign: 'center',marginTop:'100px'}}>
      <Row>
      <Col style={{height:'2px', backgroundColor: 'red',marginBottom:'20px'}}></Col>
      </Row>
  <Row className="carr3">
    <Col style={{ fontSize: '20px'}}>Seleccione su comuna</Col>
    <Col>
    <Form.Control placeholder="Ingrese comuna" style={{ width:'300px'}}/>
    
    </Col>
  </Row>

<Row>
  <Col style={{height:'10px'}}></Col>
</Row>

  <Row className="carr4">
    <Col style={{ fontSize: '20px'}}>Cupon de descuento</Col>
    <Col>
    
    <Form >
  <Row >
    <Col  >
      <Form.Control placeholder="Cupòn" style={{ width:'300px', margintop: '20px'}}/>
    </Col>

  </Row>
</Form>
    
    
    </Col>
  </Row>
  <Row>
      <Col style={{height:'20px', }}></Col>
      </Row>
  <Row>
      <Col style={{height:'2px', backgroundColor: 'red', margintop:'10px'}}></Col>
      </Row>


      <Row className="carr5">
      <Col style={{ fontSize: '45px'}}>Total Valor + Envìo</Col>
        
    <Col>
    <Form.Control placeholder="Valor total" style={{ width:'300px'}}/>
    
    </Col>
      </Row>

      <Row >
        <Col>
        <Button className="estiloboton" size="lg" variant="outline-info">Tarjeta credito</Button>{' '}
        <Button className="estiloboton" size="lg" variant="outline-info">Transeferencia</Button>{' '}
        <Button className="estiloboton" size="lg" variant="outline-info" href="./inicio">Volver</Button>{' '}
 
        </Col>
      </Row>

      <Row>
        <Col>
        <img
      className="fotoweb"
      src={foto15}
      alt="Third slide"
    />
        </Col>
      </Row>



</Container></Col>
    <Col style={{backgroundColor:'red' , marginRight:'10px'}}></Col>
    </Row>
</Container>



  
  
  </Row>
</Container>



</Container>



    </div>
    


    )



}

export default VntZap;