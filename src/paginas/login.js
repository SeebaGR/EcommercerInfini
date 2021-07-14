import React from 'react';

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logop from '../drawable/logop.png'
import google from '../drawable/google.png'
import facebook from '../drawable/facebook.png'
import instagram from '../drawable/instagram.png'
import Container from 'react-bootstrap/Container'



const Login = () =>{

    return (
        
  
  
  
  <div style={{backgroundColor:'#81c4c9'}}>

<div style={{ height: '35px'}}></div>

<Container  className="logincss">

  <Row   ><Col   >

<Form  className="formmlo">
<img src={logop} className="csslogoLogin" />

  <Form.Group className="cssll" controlId="formBasicEmail">
    <Form.Label  >Correo Electronico</Form.Label>
    <Form.Control type="email" />
 
  </Form.Group>

  <Form.Group className="cssll" controlId="formBasicPassword">
    <Form.Label>Contraseña</Form.Label>
    <Form.Control type="password" />
    <Form.Text >
      ¿Olvidaste la contraseña?
    </Form.Text>
  </Form.Group>
  
  
  <Button  className="botonLog" variant="info" type="submit">
    Ingresar
  </Button>

  
  <Form.Group className="cssll" controlId="formBasicPassword">
    <Form.Text >
      ----  O iniciar sesiòn con  ----
    </Form.Text>
  </Form.Group>

  <Form.Group className="cssll" controlId="formBasicPassword">
    <Form.Text >
    <img src={instagram} className="iconosLogin" />
    <img src={facebook} className="iconosLogin" />
    <img src={google} className="iconosLogin" />
    </Form.Text>
  </Form.Group>


</Form>
</Col></Row>

</Container>

<div style={{height:'700px'}}></div>
    
    
    
    </div>





    )

}
export default Login;