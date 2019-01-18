import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { Menu, Container, Button, Icon } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from 'react-router-dom';
// import SignedOutMenu from '../Menus/SignedOutMenu';
// import SignedInMenu from '../Menus/SignedInMenu';
// import { openModal } from '../../modals/modalActions'
// import { logout } from '../../auth/authActions'

class NavBar extends Component {
  render() {
    return (
      <Menu inverted fixed="top">
        <Container>
        <Menu.Item as={Link} to="/" header>
            <Icon name='wpforms' size='big' />
            Form Manager
          </Menu.Item>
          <Menu.Item as={NavLink} to="/dashboard" name="Dashboard" />
          <Menu.Item as={NavLink} to="/test" name="Test" />
          <Menu.Item>
            <Button
              as={Link}
              to="/createForm"
              floated="right"
              positive
              inverted
              content="Create Form"
            />
          </Menu.Item>
        </Container>
      </Menu>
    )
  }
}

export default NavBar