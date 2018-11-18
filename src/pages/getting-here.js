import React from 'react'
import { Container } from 'reactstrap'

import Hero from '../components/hero'
import PlaceholderModal from '../components/placeholder-modal'

import HeroImage from '../images/getting-here/hero.jpg'
import AirplaneImage from '../images/getting-here/airplane.jpg'
import CruiseShipImage from '../images/getting-here/cruise-ship.jpg'

class GettingHere extends React.Component {
  constructor (props) {
    super(props)

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
      <div>
        <Hero
          image={HeroImage}
          title="Getting Here"
          subtitle="It's easier than you think!"
          height="40vh"
        />

        <Container>
          <div className="row mt-5">
            <div className="col">
              <h2>By Air</h2>

              <p>
                Most visitors will find air travel the easiest way to get to
                Taniti. Taniti Airport is fairly small, so the planes that fly
                in and out are smaller jets and propeller planes. With a recent
                renovation project nearing completion, the options for
                connecting to major cities around the world will greatly
                increase.
              </p>

              <p>
                For more information, visit the{' '}
                <a href="javascript:void(0)" onClick={this.toggleModal}>
                  official website
                </a>{' '}
                for Taniti Airport.
              </p>
            </div>

            <div className="col">
              <img src={`.${AirplaneImage}`} className="img-fluid" />
            </div>
          </div>

          <div className="row mt-5">
            <div className="col">
              <img src={`.${CruiseShipImage}`} className="img-fluid" />
            </div>

            <div className="col">
              <h2>By Sea</h2>

              <p>
                If air travel doesn't sound like your perfect way to get to
                paradise, there is another option. A small cruise ship stops in
                the harbor at Yellow Leaf Bay once per week.
              </p>
            </div>
          </div>
        </Container>

        <PlaceholderModal
          showModal={this.state.showModal}
          toggleModal={this.toggleModal}
        />
      </div>
    )
  }
}

export default GettingHere
