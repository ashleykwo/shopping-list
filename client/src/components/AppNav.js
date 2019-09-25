import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class AppNav extends Component {
  render() {
    return (
      <Navbar color="light" light>
        <NavbarBrand href="/">Shopping List</NavbarBrand>
        <Nav navbar>
          <NavItem>
            <NavLink href="https://github.com/ashleykwo">Github</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default AppNav;