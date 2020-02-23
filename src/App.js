import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Navbar, FormControl} from 'react-bootstrap';
import { FormControlLabel } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';

import ShoppingList from './Components/ShoppingList/ShoppingList';
import BarChart from './Components/Charts/BarChart';
import LineChart from './Components/Charts/LineChart';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      checked:false
    }
  }

  toggleChecked = () => {
    this.setState({checked: !this.state.checked})
  };

  Checking() {
      console.log("checking")
      if (this.state.checked) {
        return <LineChart />;
      }
      return <BarChart />;
  }
  
render(){
  return (
    <div id="app">
      <div className="App">
        <div
          id="form"
          style={{
            textAlign: "center"
          }}
        >
          <Navbar id="navBar">
            <Navbar.Brand href="#home" id="healthyStudent">
              HealthyStudent
            </Navbar.Brand>
            <div class=" ml-auto mr-1">
              <Form inline id="form">
                <FormControl
                  type="text"
                  placeholder="Household Number"
                  className="mr-sm-2"
                />
                <Button variant="dark">Enter</Button>
              </Form>
            </div>
          </Navbar>
          <Row>
            <Col id="groceryList">
              <ShoppingList />
            </Col>

            <Col>
              <div id="switch">
                <label>
                  Bar Chart
                </label>
              
                <Switch
                  checked={this.state.checked}
                  onChange={this.toggleChecked}
                  value="checked"
                  trackColor={{true: 'primary', false: 'secondary'}}
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              
                <label>
                  Line Chart
                </label>
              </div>
              <div id ="chart">
                {this.state.checked ? <LineChart /> : <BarChart />}
              </div>
              <Row>
                <Col>
                  <label id="xAxis">Percent of Daily Values</label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <label id="numbersLabel">Number of Servings</label>
                </Col>
                <Col>
                  <label id="numbersLabel">Price/Meal</label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <label id="numbers">25</label>
                </Col>

                <Col>
                  <label id="numbers">25</label>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
  }
}
export default App;
