import React from 'react';
import './ShoppingList.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';

class ShoppingList extends React.Component
{
    render()
    {
        const listStyle = {
            overflowY: 'scroll',
            height: '500px',
            horizontal: 'lg'
        }

        return (
            <div>
                <label id="title">Shopping List</label>
                <ListGroup style={listStyle}>
                    <ListGroup.Item>Grocery Item...</ListGroup.Item>
                    <ListGroup.Item>Grocery Item...</ListGroup.Item>
                    <ListGroup.Item>Grocery Item...</ListGroup.Item>
                    <ListGroup.Item>Grocery Item...</ListGroup.Item>
                    <ListGroup.Item>Grocery Item...</ListGroup.Item>
                    <ListGroup.Item>Grocery Item...</ListGroup.Item>
                    <ListGroup.Item>Grocery Item...</ListGroup.Item>
                    <ListGroup.Item>Grocery Item...</ListGroup.Item>
                    <ListGroup.Item>Grocery Item...</ListGroup.Item>
                    <ListGroup.Item>Grocery Item...</ListGroup.Item>
                    <ListGroup.Item>Grocery Item...</ListGroup.Item>
                    <ListGroup.Item>Grocery Item...</ListGroup.Item>
                    <ListGroup.Item>Grocery Item...</ListGroup.Item>
                    <ListGroup.Item>Grocery Item...</ListGroup.Item>
                    <ListGroup.Item>Grocery Item...</ListGroup.Item>
                    <ListGroup.Item>Grocery Item...</ListGroup.Item>
                    <ListGroup.Item>Grocery Item...</ListGroup.Item>
                    <ListGroup.Item>Grocery Item...</ListGroup.Item>
                    <ListGroup.Item>Grocery Item...</ListGroup.Item>
                    <ListGroup.Item>Grocery Item...</ListGroup.Item>
                </ListGroup>
            </div>
        )
    }
}

export default ShoppingList;