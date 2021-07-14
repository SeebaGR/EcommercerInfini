import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Merca from '../drawable/mercado.png'
import Seguro from '../drawable/seguro-de-coche.png'
import Inmueble from '../drawable/activos.png'
import Servicio from '../drawable/servicio-al-cliente.png'

import Figure from 'react-bootstrap/Figure'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Venta = () =>{

    return (
        <div>
        
        <div className="cssVenta"> <h1>Venta de productos</h1></div>


        <div  > 



        <Container className="conVent">
  
  <Figure className="cssFigure">
  <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    src={Merca}
  />
  <Figure.Caption>
  <h1 style={{textAlign:'center', color:'black'}}>Productos <Form.Check

      /></h1>
  </Figure.Caption>
</Figure>

<Figure className="cssFigure">
  <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    src={Seguro}
  />
  <Figure.Caption>
    <h1 style={{textAlign:'center', color:'black'}}>Autos <Form.Check
 
      /></h1>
  </Figure.Caption>
</Figure>

<Figure className="cssFigure">
  <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    src={Inmueble}
  />
  <Figure.Caption>
  <h1 style={{textAlign:'center', color:'black'}}>Inmuebles <Form.Check

      /></h1>
  </Figure.Caption>
</Figure>

<Figure className="cssFigure">
    
  <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    src={Servicio}
    
    

  />
  <Figure.Caption>
   
  <h1 style={{textAlign:'center', color:'black'}}>Servicios
  <Form.Check

      /></h1>
  </Figure.Caption>
</Figure>


</Container>

</div>

<div style={{marginTop:'50px'}}>
<Container><Row>  <Col style={{height:'2px', backgroundColor: 'red'}}></Col></Row></Container>

</div>


<div style={{marginTop: '50px'}} className="divSegundo">

        <h1 className="lll" style={{textAlign:'center'}}>Metodos de pago</h1>

        <Form className="csfomr">
  
      <Form.Check
        inline
        label="Transferencias"
        
 
      />
        <div style={{width:'100px'}}></div>
      <Form.Check
        inline
        label="Tarjetas"

      />

</Form>

</div>

<div style={{marginTop:'50px'}}>
<Container><Row>  <Col style={{height:'2px', backgroundColor: 'red'}}></Col></Row></Container>

</div>

<div style={{marginTop: '50px'}} className="csfomr2">

        <h1 className="lll" style={{textAlign:'center'}}>Metodos de envìo</h1>

        <Form className="csfomr">
  
      <Form.Check
        inline
        label="Chilexpress"
        
 
      />
        <div style={{width:'100px'}}></div>
      <Form.Check
        inline
        label="Correos de Chile"

      />

</Form>
<Form className="csfomr">
  
      <Form.Check
        inline
        label="Chilexpress"
        
 
      />
        

</Form>

<Container style={{marginTop:'50px'}}>

<Row >
        <Col>
        <Button className="estiloboton" size="lg" variant="outline-info" href="./proceso">Procesar</Button>{' '}
       
        <Button className="estiloboton2" size="lg" variant="outline-info" href="./inicio">Volver</Button>{' '}
        
 
        </Col>
 </Row>



</Container>




</div>

<br/>
<br/>
<br/>
<br/>
<br/>


     
            



        </div>


    )

}


export default Venta;