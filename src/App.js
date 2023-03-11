import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import * as Icon from 'react-bootstrap-icons';

function SendIRCommand(command) {
  return fetch("http://192.168.1.72:1338/playIR/"+command)
}

function App() {
  return (
    <Container>
      <Row className="m-2 justify-content-md-center">
        <Col></Col>
        <Col><Button onClick={() => SendIRCommand("ReceiverOnOff")}><Icon.Power /></Button></Col>
        <Col></Col>
      </Row>
      <Row className="m-2 justify-content-md-center">
        <Col><Button onClick={() => SendIRCommand("ReceiverVolUp")}><Icon.CaretUpFill/></Button></Col>
        <Col><Button onClick={() => SendIRCommand("ReceiverInput2")}>TV</Button></Col>
        <Col><Button onClick={() => SendIRCommand("ReceiverInput3")}><Icon.Xbox /></Button></Col>
      </Row>
      <Row className="m-2 justify-content-md-center">
        <Col>Volym</Col>
        <Col></Col>
        <Col></Col>
      </Row>
      <Row className="m-2 justify-content-md-center">
        <Col><Button onClick={() => SendIRCommand("ReceiverVolDown")}><Icon.CaretDownFill/></Button></Col>
        <Col><Button onClick={() => SendIRCommand("ProjectorOnOff")}><Icon.Power /><br></br><Icon.ProjectorFill /></Button></Col>
        <Col><Button onClick={() => SendIRCommand("ReceiverInput1")}><Icon.Laptop/></Button></Col>
      </Row>
    </Container>
  );
}

export default App;
