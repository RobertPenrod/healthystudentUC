import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <div id = "form">
        <Form>
          <Form.Group as={Row} controlId="formPlaintextHouseholdNumber">
              <Col sm="10" md={{ span: 4, offset: 4 }}>
                <Row>
                  <Form.Control type="householdnumber" placeholder="HouseholdNumber" />
                </Row>
              </Col>
              <Col sm="1">
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
              </Col>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}
export default App;
