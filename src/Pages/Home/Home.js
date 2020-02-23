import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Navbar, FormControl, NavItem, Nav, NavLink } from "react-bootstrap";
import Switch from "@material-ui/core/Switch";

import Spinner from 'react-bootstrap/Spinner';


import ShoppingList from "../../Components/ShoppingList/ShoppingList";
import BarChart from "../../Components/Charts/BarChart";
import LineChart from "../../Components/Charts/LineChart";
import Nicketback from "../../Assets/look-at-this-graph.mp3";

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          checked: false,
          weeks: null,
          weeks_sum: null,
          labels: null,
          selectedWeek: 0,
          loading: true,
          barData: null,
          barLabels: null
        };
        this.initCall = true
        this.spinner = <Spinner animation="border" variant="primary" />
        if(this.initCall){
            this.getData(23);
            this.initCall = false
        }
      }
    
      toggleChecked = () => {
        var s = new Audio(Nicketback);
        s.play();
        this.setState({ checked: !this.state.checked });
      };
    
      Checking() {
        if (this.state.checked) {
          return <LineChart />;
        }
        return <BarChart />;
      }
    
      handler = val => {
        console.log(val);
        this.setState({ selectedWeek: val });
        this.getTopDeparts();
      };
    
      getTopDeparts = () => {
        var week_data = this.state.weeks.weeks[this.state.selectedWeek];
        console.log(week_data);
        var dict = {};
        week_data.transactions.forEach(t => {
          if (t.commodity in dict) {
            dict[t.commodity] += parseFloat(t.cost);
          } else {
            dict[t.commodity] = parseFloat(t.cost);
          }
        });
    
        var labs = [];
        var vals = [];
    
        for (var k in dict) {
          var v = dict[k];
          labs.push(k);
          vals.push(v);
        }
    
        this.setState({ barData: vals, barLabels: labs });
        this.setState({ checked: false });
      };
    
      getData = householdNumber => {
          alert("https://us-central1-healthystudent.cloudfunctions.net/HealthyStudents-GetData?id=" + householdNumber);
        fetch(
          "https://us-central1-healthystudent.cloudfunctions.net/HealthyStudents-GetData?id=" + householdNumber
        )
          .then(res => res.json())
          .then(result => {
            this.setState({ weeks: result });
            /*
                    this.state.weeks.weeks.forEach((item) => {
                        console.log(item.week_num, item.week_sum, item.transactions);
                        this.state.labels.append()
                    })
                    */
            var labs = [];
            var x = [];
            for (var i = 0; i < this.state.weeks.weeks.length; i++) {
              //this.state.dataLine.labels.append("Week " + i);
              labs.push(this.state.weeks.weeks[i].week_num);
              x.push(this.state.weeks.weeks[i].week_sum);
            }
            //console.log(week_sums)
            this.setState({ labels: labs });
            this.setState({ weeks_sum: x });
            this.getTopDeparts();
            this.setState({ loading: false });
          });
      };
    
      submitForm = e => {
        alert('Getting data for house: ' + this.state.formInput);
        this.getData(this.state.formInput);
      };
    
      formChange = e => {
        this.setState({ formInput: e.target.value });
      };
    
      render() {
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
    
                  <div class=" ml-auto mr-1" id="form">
                    <Form inline>
                      <div class=" ml-auto">
                        <Nav id="tab" variant="tabs" defaultActiveKey="/home">
                          <Nav.Link id='navText'
                            style={{color: 'white'}}
                            activeStyle={{color: 'red'}} exact
                            href="/"
                          >
                            Home
                          </Nav.Link>
                        </Nav>
                      </div>
                      <div style={{ marginLeft: "5px", marginRight: "10px"}}>
                        <Nav id="tab" variant="tabs" defaultActiveKey="/calc">
                          <Nav.Link
                            style={{color: 'white'}}
                            activeStyle={{color: 'red'}}
                            href="/Calculator"
                          >
                            Calculator
                          </Nav.Link>
                        </Nav>
                      </div>
                      <FormControl
                        onChange={this.formChange}
                        type="text"
                        placeholder="Household Number"
                        className="mr-sm-2"
                        name="formInput"
                      />
                      <Button onClick={this.submitForm} variant="dark">
                        Enter
                      </Button>
                    </Form>
                  </div>
                </Navbar>
                <Row>
                  <Col id="groceryList">
                  {this.state.loading? this.spinner : <ShoppingList data={this.state.weeks.weeks} handler={this.handler}/>}
                  </Col>
    
                  <Col>
                    <div id="switch">
                      <label>Bar Chart</label>
    
                      <Switch
                        checked={this.state.checked}
                        onChange={this.toggleChecked}
                        value="checked"
                        trackColor={{ true: "primary", false: "secondary" }}
                        inputProps={{ "aria-label": "secondary checkbox" }}
                      />
    
                      <label>Line Chart</label>
                    </div>
                    <div id="chart">
                         {this.state.loading ? this.spinner : this.state.checked ? <LineChart data={this.state.weeks_sum} labels={this.state.labels}/> : <BarChart data={this.state.barData} labels={this.state.barLabels}/>}
                    </div>
                    <Row>
                      <Col>
                        <label id="xAxis">Percent of Daily Values</label>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <label id="numbersLabel">Number of Purchases</label>
                      </Col>
                      <Col>
                        <label id="numbersLabel">Price/Item</label>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <label id="numbers">{this.state.loading ? this.spinner : this.state.weeks.weeks[this.state.selectedWeek].transactions.length}</label>
                      </Col>
    
                      <Col>
                        <label id="numbers">{this.state.loading ? this.spinner : '$'+(parseFloat(this.state.weeks.weeks[this.state.selectedWeek].week_sum)/this.state.weeks.weeks[this.state.selectedWeek].transactions.length).toFixed(2)}</label>
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

export default Home;