import React from 'react';
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
                <h2>Shopping List</h2>
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