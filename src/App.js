import logo from './logo.svg';
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import NavV from './elements/index';
import Proceso from './elementos/proceso';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Inicio from './elementos/inicio'
import Login from './paginas/login';
import Cuenta from './elementos/cuenta';
import Preguntas from './elementos/preguntas';
import Venta from './elementos/venta'
import VntZap from './elementos/seccion4'
import { BrowserRouter , Switch, Route, Link } from 'react-router-dom';
import Footer from './elements/footer'


function App() {
  return (
    <div>

<BrowserRouter>
<NavV />
              <Switch>  

            
              
                <Route path='/inicio' exact={true}  component={Inicio} />                         
               
                <Route exact path="/login"  component={Login} />
     
                <Route exact path="/seccion4" component={VntZap} />

                <Route exact path="/cuenta" component={Cuenta} />

                <Route exact path="/venta" component={Venta} />

                <Route exact path="/proceso" component={Proceso} />

                <Route exact path="/preguntas" component={Preguntas} />
                                 
              </Switch>   
</BrowserRouter>
 <Container>
  <Row>
    <Col></Col>
  </Row>
</Container>





      <Footer />



    

      
    </div>
  );
}

export default App;
