import React from 'react';
import './ShoppingList.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ListItemRow from '../ListItemRow/ListItemRow';

class ShoppingList extends React.Component
{
    totalPrice

    getData = () => {
        fetch('https://us-central1-healthystudent.cloudfunctions.net/HealthyStudents-GetData')
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                }
            )
    }

    generateList = () => {

        const listGroupItemStyle = {
            borderTop: '2px solid #D3D3D3',
            borderBottom: '2px solid #D3D3D3'
        }

        var comps = []
        var prices = []
        var itemCount = 50
        for(var i = 0; i < itemCount; i++) {
            prices.push(i);
            comps.push(
            <ListGroup.Item style={listGroupItemStyle}>
                <ListItemRow item={i} price={'$' + prices[i]}/>
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
    render()
    {
        this.getData()

        const listStyle = {
            overflowY: 'scroll',
            overflowX: 'hidden',
            height: '500px',
            horizontal: 'lg'
        }

        return (
            <div>
                <Col>
                    <label id="title">Shopping List</label>
                    <hr/>
                    <ListItemRow isBold={true} item='Item' price='Price'/>
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