import React from "react";
import "./Calculator.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, FormControl, NavItem, Nav } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import CostPrediction from '../../Components/CostPrediction/CostPrediction'

class Calculator extends React.Component {
    render() {
        return (
            <div id="app">>
                <Navbar id="navBar">
                  <Navbar.Brand href="#home" id="SiteName">
                    Super-Marka-Metrics
                  </Navbar.Brand>
    
                  <div class=" ml-auto mr-1" id="form">
                    <Form inline onSubmit={this.submitForm}>
                      <div class=" ml-auto">
                        <Nav id="tab" variant="tabs" defaultActiveKey="/home">
                          <Nav.Link
                            style={{color: 'white'}}
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
                      <Button type="submit" variant="dark">
                        Enter
                      </Button>
                    </Form>
                  </div>
                </Navbar>
                <CostPrediction/>
            </div>
        )
    }
}

export default Calculator;