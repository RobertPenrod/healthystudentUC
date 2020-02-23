import React from 'react';
import './ShoppingList.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ListItemRow from '../ListItemRow/ListItemRow';

class ShoppingList extends React.Component
{
    constructor(){
        super();
        this.state = {
            weeks: null
        }
        this.handleClick = this.handleClick.bind(this);
        //this.getData()
    }
    
    getData = (householdNumber) => {
        fetch('https://us-central1-healthystudent.cloudfunctions.net/HealthyStudents-GetData?id=' + householdNumber)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({weeks:result});
                    console.log(this.state.weeks);
                    this.state.weeks.weeks.forEach((item) => {
                        console.log(item.week_num, item.week_sum, item.transactions);
                    })
                }
            )
    }

    totalPrice

    generateList = () => {

        const listGroupItemStyle = {
            borderTop: '2px solid #D3D3D3',
            borderBottom: '2px solid #D3D3D3',
            zIndex: 1
        }

        var comps = []
        var prices = []
        var itemCount = 50
        for(var i = 0; i < itemCount; i++) {
            prices.push(i);
            comps.push(
            <ListGroup.Item style={listGroupItemStyle}>
                <ListItemRow item={i} price={'$' + prices[i]} button={<Button index={i} onClick={this.handleClick}>Get Data</Button>} />
            </ListGroup.Item>
            );
        }

        /* Get the total price and add listItemRow component containing it.*/
        this.totalPrice = 0
        for(var i = 0; i < itemCount; i++) {
            this.totalPrice += prices[i]
        }

        return comps;
    }

    handleClick = function(e) {
        var i = e.target.getAttribute("index")
        this.props.handler(i);
    }

    render()
    {
        const listStyle = {
            overflowY: 'scroll',
            overflowX: 'hidden',
            height: '400px',
            horizontal: 'lg'
        }

        return (
            <div>
                <Col>
                    <label id="title">Weekly Overview</label>
                    <hr/>
                    <ListItemRow isBold={true} item='Week' price='Expenses'/>
                    <ListGroup variant='flush' style={listStyle}>
                        {this.generateList()}
                    </ListGroup>
                    <hr/>
                    <ListItemRow isBold={true} item='Total:' price={'$' + this.totalPrice}/>
                </Col>
                <p></p>
            </div>
        )
    }
}

export default ShoppingList;