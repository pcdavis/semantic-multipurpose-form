import React, { Component } from 'react'
import { Menu, Container, Button } from 'semantic-ui-react';

class NavBar extends Component {
  render() {
    return (
      <Menu inverted fixed="top">
        <Container>
            <Menu.Item header>
                Multipurpose Form
            </Menu.Item>
        </Container>
      </Menu>
    )
  }
}

export default NavBar