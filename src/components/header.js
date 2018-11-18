import React from 'react'
import { NavLink as NL } from 'react-router-dom'
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

class Header extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpen: false
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle () {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render () {
    return (
      <header>
        <Navbar color="light" light expand="md" fixed="top">
          <Container>
            <NavbarBrand tag={NL} to="/" className="mr-auto">
              Travel Taniti
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />

            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={NL} to="/getting-here">
                    Getting Here
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={NL} to="/essential-information">
                    Essential Information
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={NL} to="/activities">
                    Activities
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={NL} to="/faq">
                    FAQ
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    )
  }
}

export default Header
