import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import uuid from 'uuid';
import './ShoppingList.css';

class ShoppingList extends Component {
  state = {
    items : [
      { id: uuid.v4(), name : 'steak'},
      { id: uuid.v4(), name : 'chicken'},
      { id: uuid.v4(), name : 'eggs'}
    ]
  }
  render() {
    const { items } = this.state;
    return (
      <Container>
        <ListGroup>
          {items.map(item => {
            return <ListGroupItem id={ item.id }>{ item.name }</ListGroupItem>
          })}
        </ListGroup>
        <Button>Add Item</Button>
      </Container>
    );
  }
}

export default ShoppingList;