import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logop from '../drawable/logop.png';
import { FiInstagram } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";




const Footer = () =>{

    return (
        <div style={{backgroundColor:'#127f86'}}>



<Container className="footerImg">
<Row>
    <Col sm><img src={logop} className="ssize2" ></img></Col>
    <Col sm className="aligTxt"><h4>Servicio al cliente</h4></Col>
    
    
    
    <Col sm><AiFillInstagram className="iconport2"/><FaFacebook className="iconport2"/><AiFillTwitterCircle className="iconport2"/></Col>
  </Row>
</Container>


</div>


    )


}

export default Footer