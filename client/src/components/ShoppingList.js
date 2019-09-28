import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { PropTypes } from "prop-types";

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
    return (
      <Container>
        <ListGroup>
          {items.map(({_id, name}) => {
            return (
              <ListGroupItem key={ _id }>
                { name }
                <Button 
                  style={{ float: 'right' }}
                  onClick={this.onDeleteClick.bind(this, _id)}>×</Button>
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