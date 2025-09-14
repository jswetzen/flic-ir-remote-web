import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import * as Icon from 'react-bootstrap-icons';
import { SiKodi } from 'react-icons/si';

function SendIRCommand(command) {
  return fetch("http://192.168.1.72:1338/playIR/"+command)
}

function App() {
  return (
    <Container>
      <Row className="m-2 justify-content-md-center">
        <Col></Col>
        <Col><Button onClick={() => SendIRCommand("ReceiverOnOff")}><Icon.Power/></Button></Col>
        <Col></Col>
      </Row>
      <Row className="m-2 justify-content-md-center">
        <Col><Button onClick={() => SendIRCommand("ReceiverVolUp")}><Icon.CaretUpFill/></Button></Col>
        <Col><Button onClick={() => SendIRCommand("ReceiverInput2")}><Icon.Apple/></Button></Col>
        <Col><Button onClick={() => SendIRCommand("ReceiverInput3")}><Icon.Playstation/></Button></Col>
      </Row>
      <Row className="m-2 justify-content-md-center">
        <Col>Volym</Col>
        <Col></Col>
        <Col></Col>
      </Row>
      <Row className="m-2 justify-content-md-center">
        <Col><Button onClick={() => SendIRCommand("ReceiverVolDown")}><Icon.CaretDownFill/></Button></Col>
        <Col><Button onClick={() => SendIRCommand("ProjectorOnOff")}><Icon.Power/><br/><Icon.ProjectorFill/></Button></Col>
        <Col><Button onClick={() => SendIRCommand("ReceiverInput1")}><SiKodi/></Button></Col>
      </Row>
    </Container>
  );
}

export default App;
