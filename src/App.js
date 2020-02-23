import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Navbar, FormControl, NavItem, Nav } from "react-bootstrap";

import ShoppingList from "./Components/ShoppingList/ShoppingList";
import BarChart from "./Components/Charts/BarChart";
import LineChart from "./Components/Charts/LineChart";
import Nicketback from "./Assets/look-at-this-graph.mp3";

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Calculator from './Pages/Calculator/Calculator';

function App() {
  return(
    <div className="App">
      
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/calculator" component={Calculator} exact />
        </Switch>
    </div>
  );
}
export default App;
