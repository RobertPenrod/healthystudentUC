import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import './ListItemRow.css';

class ListItemRow extends React.Component{

    render(){
        const fontStyle={
            fontWeight: this.props.isBold? 'bolder' : 'normal',
            fontSize: this.props.isBold? '20px' : '16px'
        }

        return(
            <div id='noPointerEvents'>
                <Row id='noPointerEvents'>
                    <Col id='noPointerEvents'>
                        <p id='noPointerEvents' style={fontStyle}>{this.props.item}</p>
                    </Col>
                    <Col id='noPointerEvents'>
                        <p id='noPointerEvents' style={fontStyle}>{this.props.price}</p>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ListItemRow
