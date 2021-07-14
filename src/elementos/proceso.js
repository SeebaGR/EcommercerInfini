import React from 'react';
import { Container } from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure'
import Merca from '../drawable/mercado.png'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'



function Proceso() {
    return (
      <div>


<Container className="cssProceso">
<Figure className="cssFigure2">
  <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    src={Merca}
  />

</Figure>
</Container>

<Container style={{backgroundColor:'#E8F7F8', marginTop:'20px'}}>


<Form className="csFormUltimo">
  <Row>
    <Col>
      <Form.Control placeholder="Marca" />
    </Col>
    <Col>
      <Form.Control placeholder="Modelo" />
    </Col>
  </Row>
</Form>


<Form className="csFormUltimo">
  <Row>
    <Col>
      <Form.Control placeholder="Talla" />
    </Col>
    <Col>
      <Form.Control placeholder="Color" />
    </Col>
  </Row>
</Form>

    <Form.Control className="csFormUltimo2"
      as="textarea"
      placeholder="Descripcion del producto"
      style={{ height: '70px' }}
    />
 




<Container >

<Row >
        <Col>
        <Button className="estiloboton" size="lg" variant="outline-info" href="./proceso">Procesar</Button>{' '}
       
        <Button className="estiloboton2" size="lg" variant="outline-info" href="./inicio">Volver</Button>{' '}
        
 
        </Col>
 </Row>



</Container>
<br/>
</Container>



<div style={{height:'100px'}}></div>


      </div>


    ) 

}



export default Proceso;