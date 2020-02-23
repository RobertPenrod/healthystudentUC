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

import Nicketback from './Assets/look-at-this-graph.mp3';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      checked:false,
      weeks: null,
      weeks_sum: null,
      labels: "test",
      formInput: 'test'
    };

    this.getData(23)
  }

  toggleChecked = () => {
    var s = new Audio(Nicketback)
    s.play()
    this.setState({checked: !this.state.checked})
  };

  Checking() {
      console.log("checking")
      if (this.state.checked) {
        return <LineChart />;
      }
      return <BarChart />;
  }

  getTopDeparts = () => {
    var vals = this.state.weeks.weeks;
    console.log(vals);
  }

  getData = (householdNumber) => {
    fetch('https://us-central1-healthystudent.cloudfunctions.net/HealthyStudents-GetData?id=' + householdNumber)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({weeks:result});
                
                /*
                this.state.weeks.weeks.forEach((item) => {
                    console.log(item.week_num, item.week_sum, item.transactions);
                    this.state.labels.append()
                })
                */
                var labs = [];
                var x = [];
                for(var i=0; i < this.state.weeks.weeks.length; i++) {
                  console.log(this.state.weeks.weeks[i])
                  //this.state.dataLine.labels.append("Week " + i);
                  labs.push(this.state.weeks.weeks[i].week_num);
                  x.push(this.state.weeks.weeks[i].week_sum);
                }
                //console.log(week_sums)
                this.setState({labels: labs})
                this.setState({weeks_sum:x})
                  
                console.log(this.state.weeks_sum);
            }
        )
  }

  submitForm = (e) => {
    this.getData(this.state.formInput)
  }

  formChange = (e) => {
    this.setState({formInput: e.target.value})
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
            <Navbar.Brand href="#home" id="SiteName">
              Super-Marka-Metrics
            </Navbar.Brand>
            <div class=" ml-auto mr-1">
              <Form inline id="form" onSubmit = {this.submitForm}>
                <FormControl onChange={this.formChange}
                  type="text"
                  placeholder="Household Number"
                  className="mr-sm-2"
                  name='formInput'
                  
                />
                <Button type='submit' variant="dark">Enter</Button>
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
                {this.state.checked ? <LineChart data={this.state.weeks_sum} label={this.state.labels}/> : <BarChart />}
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
