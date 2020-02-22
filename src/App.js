import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { HorizontalBar } from 'react-chartjs-2';
import { MDBContainer } from 'mdbreact';

import ShoppingList from './Components/ShoppingList/ShoppingList';

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
      <div id = "form" style={{
                        textAlign:"center"
                      }}>
        <label>
          Healthy Student
        </label>
        <Form>
          <Form.Group as={Row} controlId="formPlaintextHouseholdNumber">
            <Col sm="2" md={{ offset: 1, span: 2 }} id ="groceryList">
              <Row>
                <ShoppingList />
              </Row>
            </Col>

            <Col sm="10" md={{ span: 6}}>
              <Row>
                <Form.Control type="householdnumber" placeholder="HouseholdNumber" />
              </Row>
              
              <Row>
                <MDBContainer>
                    <h3 id="chartTitle">Nutritional Information</h3>
                  <HorizontalBar
                    data={state.dataHorizontal}
                    options={{ responsive: true }}
                  />
                </MDBContainer>
              </Row>
              
              <Row>
                <Col>
                  <label id="xAxis">
                    Percent of Daily Values
                  </label>
                </Col>
              </Row>
              
              <Row>
                <Col>
                  <label id="numbersLabel">
                    Number of Servings
                  </label>
                </Col>

                <Col>
                  <label id="numbersLabel">
                    Number of Servings
                  </label>
                </Col>
              </Row>

              <Row>
                <Col>
                  <label id="numbers">
                    25
                  </label>
                </Col>

                <Col>
                  <label id="numbers">
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
