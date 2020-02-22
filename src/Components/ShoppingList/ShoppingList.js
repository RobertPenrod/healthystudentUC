import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class ShoppingList extends React.Component
{
    constructor() {
        super();
        this.state = {
          width:  800,
          height: 182
        }
      }
    
      /**
       * Calculate & Update state of new dimensions
       */
      updateDimensions() {
        if(window.innerWidth < 500) {
          this.setState({ width: 450, height: 102 });
        } else {
          let update_width  = window.innerWidth-100;
          let update_height = Math.round(update_width/4.4);
          this.setState({ width: update_width, height: update_height });
        }
      }
    
      /**
       * Add event listener
       */
      componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
      }
    
      /**
       * Remove event listener
       */
      componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
      }

    render()
    {
        const listStyle = {
            overflowY: 'scroll',
            height: '500px',
            horizontal: 'lg'
        }

        return (
            <>
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
            </>
        )
    }
}

export default ShoppingList;