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
      labels: null,
      selectedWeek: 0,
      loading: true,
      barData: null,
      barLabels: null
    }

    this.getData(23)
  }

  toggleChecked = () => {
    var s = new Audio(Nicketback)
    s.play()
    this.setState({checked: !this.state.checked})
  };

  Checking() {
      if (this.state.checked) {
        return <LineChart />;
      }
      return <BarChart />;
  }

  handler = (val) => {
    console.log(val);
    this.setState({selectedWeek: val});
    this.getTopDeparts();
  }

  getTopDeparts = () => {
    var week_data = this.state.weeks.weeks[this.state.selectedWeek];
    console.log(week_data)
    var dict = {}
    week_data.transactions.forEach((t) => {
      if(t.commodity in dict) {
        dict[t.commodity] += parseFloat(t.cost);
      }
      else {
        dict[t.commodity] = parseFloat(t.cost);
      }
    });

    var labs = []
    var vals = []

    for (var k in dict) {
      var v = dict[k]
      labs.push(k);
      vals.push(v);
    }

    this.setState({barData: vals, barLabels:labs});
    this.setState({checked:false});
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
                  //this.state.dataLine.labels.append("Week " + i);
                  labs.push(this.state.weeks.weeks[i].week_num);
                  x.push(this.state.weeks.weeks[i].week_sum);
                }
                //console.log(week_sums)
                this.setState({labels: labs})
                this.setState({weeks_sum:x})
                this.getTopDeparts();
                this.setState({loading:false})
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

  var component;

  if(this.state.loading) {
    component = <p>loading</p>
  }
  else {
    if(this.state.checked){
      component = <LineChart data={this.state.weeks_sum} />
    }
    else {
      component = <BarChart key={Math.random()} data={this.state.barData} labels={this.state.barLabels} redraw/>
    }
  }

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
              <ShoppingList handler={this.handler}/>
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
                {this.state.loading ? <p>loading</p> : this.state.checked ? <LineChart data={this.state.weeks_sum} labels={this.state.labels}/> : <BarChart data={this.state.barData} labels={this.state.barLabels}/>}
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
