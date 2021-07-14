import React from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import CardGroup from 'react-bootstrap/CardGroup' 
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BiStar } from "react-icons/bi";
import Form from 'react-bootstrap/Form'
import CardColumns from 'react-bootstrap/CardColumns'
import '../App.css'

import foto8 from '../drawable/foto8.jpg';
import foto9 from '../drawable/foto9.jpg';
import foto10 from '../drawable/foto10.jpg';
import foto11 from '../drawable/foto11.jpg';
import foto12 from '../drawable/foto12.jpg';
import foto14 from '../drawable/foto14.png';







const Filtross = () =>{

    return (
        <div>


<Container className="cntt" >
  <Row >
  <Col sm={4} className="cntt6">
      
  <Row>
    <Col><h1 style={{ color: 'white' }}>Precio</h1></Col>
    </Row>
    <Row>
    <Col>
    
    <Form>
  <Row>
    <Col>
      <Form.Control placeholder="Minimo $$$" />
    </Col>
    <Col>
      <Form.Control placeholder="Maximo $$$" />
    </Col>
  </Row>
</Form>
    
    </Col>
    </Row>

    <Row>
    <Col>
    
    <Form  className="cntt2">
  {['checkbox'].map((type) => (
    <div key={`default-${type}`} className="mb-3">
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={`$0-$9.990 (55)`}
      />    
    </div>
  ))}
    </Form>

    <Form className="cntt2">
  {['checkbox'].map((type) => (
    <div key={`default-${type}`} className="mb-3">
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={`$10.000-$19.990 (55)`}
      />    
    </div>
  ))}
    </Form>

    <Form className="cntt2">
  {['checkbox'].map((type) => (
    <div key={`default-${type}`} className="mb-3">
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={`$20.000-$34.990 (55)`}
      />    
    </div>
  ))}
    </Form>

    <Form className="cntt2">
  {['checkbox'].map((type) => (
    <div key={`default-${type}`} className="mb-3">
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={`$35.000-$49.990 (55)`}
      />    
    </div>
  ))}
    </Form>

    <Form className="cntt2">
  {['checkbox'].map((type) => (
    <div key={`default-${type}`} className="mb-3">
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={`$50.000-$64.990 (55)`}
      />    
    </div>
  ))}
    </Form>

    <Form className="cntt2">
  {['checkbox'].map((type) => (
    <div key={`default-${type}`} className="mb-3">
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={`$65.000-$99.990 (55)`}
      />    
    </div>
  ))}
    </Form>

    <Form className="cntt2">
  {['checkbox'].map((type) => (
    <div key={`default-${type}`} className="mb-3">
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={`$100.000-$149.990 (55)`}
      />    
    </div>
  ))}
    </Form>

    <Form className="cntt2">
  {['checkbox'].map((type) => (
    <div key={`default-${type}`} className="mb-3">
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={`$150.000-$249.990 (55)`}
      />    
    </div>
  ))}
    </Form>





    
    </Col>
    </Row>

  


  </Col>
    <Col sm={8} className="cntt4">


    <Row>
    <Col><h1 style={{ color: 'white' }}>Mejores artìculos de venta</h1></Col>
    </Row>

    <CardGroup >
  <Card >
    <Card.Img  variant="top"  src={foto8} />
    <Card.Body>
      <Card.Title>Pantalla Retina Macbook Pro</Card.Title>
      <Card.Text>
        Pantalla retina macbook pro de Apple
      </Card.Text>
      <Card.Text>
        <BiStar/><BiStar/><BiStar/><BiStar/><BiStar/>
      </Card.Text>
      <Card.Text>
        $1.290.000
      </Card.Text>
    </Card.Body>

  </Card>
  <Card>
    <Card.Img variant="top" src={foto9} />
    <Card.Body>
      <Card.Title>Pantalla Retina Macbook Pro</Card.Title>
      <Card.Text>
        Pantalla retina macbook pro de Apple
      </Card.Text>
      <Card.Text>
        <BiStar/><BiStar/><BiStar/><BiStar/><BiStar/>
      </Card.Text>
      <Card.Text>
        $1.290.000
      </Card.Text>
    </Card.Body>

  </Card>
  <Card>
    <Card.Img variant="top" src={foto10} />
    <Card.Body>
      <Card.Title>Pantalla Retina Macbook Pro</Card.Title>
      <Card.Text>
        Pantalla retina macbook pro de Apple
      </Card.Text>
      <Card.Text>
        <BiStar/><BiStar/><BiStar/><BiStar/><BiStar/>
      </Card.Text>
      <Card.Text>
        $1.290.000
      </Card.Text>
    </Card.Body>

  </Card>
  <Card>
    <Card.Img variant="top"  src={foto12} />
    <Card.Body>
      <Card.Title>Pantalla Retina Macbook Pro</Card.Title>
      <Card.Text>
        Pantalla retina macbook pro de Apple
      </Card.Text>
      <Card.Text>
        <BiStar/><BiStar/><BiStar/><BiStar/><BiStar/>
      </Card.Text>
      <Card.Text>
        $1.290.000
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


export default Filtross;