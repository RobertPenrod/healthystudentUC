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
        var total = 0
        for(var i = 0; i < this.props.data.length; i++) {
            console.log(this.props.data[i])
            var price = parseFloat(this.props.data[i].week_sum)
            total += price;
            var s_price = price.toFixed(2);
            prices.push(i);
            comps.push(
            <Button id='button' index={i} onClick={this.handleClick}>
                <ListItemRow item={this.props.data[i].week_num} price={'$' + s_price} />
            </Button>
            );
        }

        /* Get the total price and add listItemRow component containing it.*/
        this.totalPrice = total;
        this.average = total/this.props.data.length;
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
                    <ListItemRow isBold={true} item='Cost/Week: ' price={'$' + (this.average.toFixed(2))} />
                </Col>
                <p></p>
            </div>
        )
    }
}

export default ShoppingList;