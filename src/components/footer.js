import React from 'react'
import { NavLink as NL } from 'react-router-dom'
import { Container, Nav, NavItem, NavLink } from 'reactstrap'

import PlaceholderModal from './placeholder-modal'

class Footer extends React.Component {
  constructor () {
    super()

    this.state = {
      showModal: false
    }

    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal () {
    this.setState({ showModal: !this.state.showModal })
  }

  render () {
    return (
      <footer
        style={{
          height: 256,
          width: '100%',
          paddingTop: '2rem',
          paddingBottom: '2rem'
        }}
        className="bg-secondary text-light mt-5"
      >
        <Container className="d-flex align-items-end justify-content-between h-100">
          <div>
            <ul className="list-unstyled">
              <li>
                <a
                  href="javascript:void(0)"
                  onClick={this.toggleModal}
                  className="text-light"
                >
                  Privacy Policy
                </a>
              </li>
              <li>&copy; {new Date().getFullYear()} Joseph Turk</li>
            </ul>
          </div>

          <div>
            <Nav vertical className="text-right text-light">
              <NavItem>
                <NavLink tag={NL} to="/" className="p-0 text-light">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={NL} to="/getting-here" className="p-0 text-light">
                  Getting Here
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={NL}
                  to="/essential-information"
                  className="p-0 text-light"
                >
                  Essential Information
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={NL} to="/activities" className="p-0 text-light">
                  Activities
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={NL} to="/faq" className="p-0 text-light">
                  FAQ
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </Container>

        <PlaceholderModal
          showModal={this.state.showModal}
          toggleModal={this.toggleModal}
        />
      </footer>
    )
  }
}

export default Footer
