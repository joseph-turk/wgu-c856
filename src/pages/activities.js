import React from 'react'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'

import Hero from '../components/hero'
import PlaceholderModal from '../components/placeholder-modal'

import HeroImage from '../images/activities/hero.jpg'
import BeachImage from '../images/activities/beach.jpg'
import JungleImage from '../images/activities/jungle.jpg'
import VolcanoImage from '../images/activities/volcano.jpg'
import BoatImage from '../images/activities/boat.jpg'
import ArcadeImage from '../images/activities/arcade.jpg'

class Activities extends React.Component {
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
      <div>
        <Hero
          image={HeroImage}
          title="Activities"
          subtitle="Find your perfect vacation!"
          height="40vh"
        />

        <Container className="mt-5">
          <div className="row">
            <div className="col-md-4 d-flex flex-column justify-content-end">
              <h2>Relaxation</h2>

              <p>
                Taniti is famous for its white sand beaches that encircle Yellow
                Leaf Bay. These beaches are easily accessible from Taniti City.
              </p>

              <p>
                Lay out your towel, grab a good book, and spend your day being
                serenaded by the sound of the sea.
              </p>
            </div>

            <div className="col-md-8 h-100">
              <img
                src={`.${BeachImage}`}
                alt="White sand beach on Yellow Leaf Bay"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="row" style={{ marginTop: '5rem' }}>
            <div className="col-12">
              <h2>Natural Wonders</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <img
                src={`.${JungleImage}`}
                alt="Lush, tropical tanitian rain forest"
                className="img-fluid"
              />
            </div>

            <div className="col-md-4">
              <img
                src={`.${BoatImage}`}
                alt="Fishing in Yellow Leaf Bay"
                className="img-fluid"
              />
            </div>

            <div className="col-md-4">
              <img
                src={`.${VolcanoImage}`}
                alt="Tanitian volcano erupting"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-12">
              <p>
                The small island of Taniti is packed full of natural beauty. It
                features a lush, tropical rain forest, rugged mountains, and an
                active volcano.
              </p>

              <p>
                Options for enjoying the island's abundant scenery include
                taking a chartered fishing tour, snorkeling in the bay,
                zip-lining through the rain forest, taking a helicopter ride,
                and seeing the volcano up close. To book guided excursions to
                partake in Taniti's scenery, contact one of the official,
                government-approved agencies{' '}
                <a href="javascript:void(0)" onClick={this.toggleModal}>
                  here
                </a>
                .
              </p>

              <p>
                For information about ground transportation on Taniti, visit{' '}
                <Link to="/essential-information">Essential Information</Link>.
              </p>
            </div>
          </div>

          <div className="row" style={{ marginTop: '5rem' }}>
            <div className="col-md">
              <h2>Local Culture</h2>

              <p>
                Tanitian culture is vibrant and welcoming. There are many things
                to do, including visiting a local history museum, visiting
                several pubs, including a microbrewery, dancing at a new dance
                club, seeing a movie, playing at an arcade, visiting art
                galleries, and bowling.
              </p>
            </div>

            <div className="col-md">
              <img
                src={`.${ArcadeImage}`}
                alt="Tanitian arcade"
                className="img-fluid"
              />
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

export default Activities
