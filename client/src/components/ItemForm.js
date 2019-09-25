import React, { Component } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

import uuid from 'uuid';

const mapStateToProps = (state) => ({
  item : state.item
});

class ItemForm extends Component {
  onSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id : uuid.v4(),
      name : this.state.name
    };

    this.props.addItem(newItem);
  }

  onChange = (e) => {
    this.setState({ [e.target.name] : e.target.value })
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label className="mt-3">Item Name</Label>
            <Input
              type="text"
              name="name"
              placeholder="Text Here"
              onChange={this.onChange}
            />
            <Button className="mt-3">Add Item</Button>
          </FormGroup>
        </Form>
      </Container>
    )
  }
}

export default connect(mapStateToProps, { addItem })(ItemForm);