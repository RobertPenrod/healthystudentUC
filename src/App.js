import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormLabel from 'react-bootstrap/FormLabel';
import ListGroup from 'react-bootstrap/ListGroup';
import { HorizontalBar } from 'react-chartjs-2';
import { MDBContainer } from 'mdbreact';

function App() {
  const state = {
    dataHorizontal: {
      labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Grey'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [22, 33, 55, 12, 86, 23, 14],
          fill: false,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
        }
      ]
    }
  };
  
  return (
    <div className="App">
      <div id = "form">
        <Form>
          <Form.Group as={Row} controlId="formPlaintextHouseholdNumber">
            <Col sm="2" md={{ offset: 1, span: 2 }} id ="groceryList">
              <Row>
                <FormLabel>
                  List
                </FormLabel>
              </Row>
              <Row>
                <ListGroup id = "list">
                  <ListGroup.Item>This is bread</ListGroup.Item>
                  <ListGroup.Item>Some soup</ListGroup.Item>
                  <ListGroup.Item>Maybe a bagel?</ListGroup.Item>
                  <ListGroup.Item>Probably some water</ListGroup.Item>
                  <ListGroup.Item>Probably some water</ListGroup.Item>
                  <ListGroup.Item>Probably some water</ListGroup.Item>
                  <ListGroup.Item>Probably some water</ListGroup.Item>
                  <ListGroup.Item>Probably some water</ListGroup.Item>
                  <ListGroup.Item>Probably some water</ListGroup.Item>
                  <ListGroup.Item>Probably some water</ListGroup.Item>
                  <ListGroup.Item>Probably some water</ListGroup.Item>
                  <ListGroup.Item>Probably some water</ListGroup.Item>
                  <ListGroup.Item>Probably some water</ListGroup.Item>
                  <ListGroup.Item>Probably some water</ListGroup.Item>
                </ListGroup>
              </Row>
            </Col>

            <Col sm="10" md={{ span: 4}}>
              <Row>
                <Form.Control type="householdnumber" placeholder="HouseholdNumber" />
              </Row>
              
              <Row>
                <MDBContainer>
                  <h3 className='mt-5'>Bar chart</h3>
                  <HorizontalBar
                    data={state.dataHorizontal}
                    options={{ responsive: true }}
                  />
                </MDBContainer>
              </Row>
              
              <Row>
                <label>
                  Percent of Daily Values Reached Per Meal
                </label>
              </Row>
              
              <Row>
                <Col>
                  <label>
                    Number of Servings
                  </label>
                </Col>

                <Col>
                  <label>
                    Number of Servings
                  </label>
                </Col>
              </Row>

              <Row>
                <Col>
                  <label>
                    25
                  </label>
                </Col>

                <Col>
                  <label>
                    25
                  </label>
                </Col>
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
