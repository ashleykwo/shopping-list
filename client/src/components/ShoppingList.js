import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { PropTypes } from "prop-types";

import uuid from 'uuid';

import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";

const mapStateToProps = (state) => ({
  item : state.item
});

class ShoppingList extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = id => {
    this.props.deleteItem(id);
  };

  render() {
    const { items } = this.props.item;
    console.log(this.props.item.items);
    return (
      <Container>
        <Button 
          style={{ margin: '2rem 0' }}
          onClick={() => {
            const name = prompt('Enter new item');
            if (name) {
              this.setState(state => ({
                items : [...state.items, { id : uuid.v4(), name }]
              }))
            }
          }}>
            Add Item
        </Button>
        <ListGroup>
          {items.map(({id, name}) => {
            return (
              <ListGroupItem key={ id }>
                { name }
                <Button 
                  style={{ float: 'right' }}
                  onClick={this.onDeleteClick.bind(this, id)}>×</Button>
              </ListGroupItem>
            )
          })}
        </ListGroup>
      </Container>
    );
  }
}

ShoppingList.propTypes = {
  getItems : PropTypes.func.isRequired,
  item : PropTypes.object.isRequired
}

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);