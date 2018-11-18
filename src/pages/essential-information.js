import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap'

import Hero from '../components/hero'
import PlaceholderModal from '../components/placeholder-modal'

import HeroImage from '../images/essential-information/hero.jpg'
import HotelImage from '../images/essential-information/hotel.jpg'
import BusImage from '../images/essential-information/buses.jpg'
import FoodImage from '../images/essential-information/food.jpg'

class EssentialInformation extends React.Component {
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
          title="Essential Information"
          subtitle="Know before you go"
          height="40vh"
        />

        <Container className="mt-5">
          <div className="row my-4">
            <div className="col-12">
              <h2>Getting Here</h2>

              <p>
                You can get to Taniti by plane or cruise ship. For residents of
                most countries, no visa is needed. For a full list of countries
                with visa restrictions, visit the{' '}
                <a href="javascript:void(0)" onClick={this.toggleModal}>
                  Taniti Embassy
                </a>{' '}
                website.
              </p>

              <p>
                For more information about how to get to Taniti, visit{' '}
                <Link to="/getting-here">Getting Here</Link>.
              </p>
            </div>
          </div>

          <div className="row my-4">
            <div className="col">
              <h2>Lodging</h2>

              <p>
                Taniti has a wide variety of lodging that ranges from an
                inexpensive hostel to one large, four-star resort. There are
                many small, family-owned hotels and a growing number of bed and
                breakfasts. All types of lodging are strictly regulated and
                regularly inspected by the Tanitian government.
              </p>

              <h2>Currency</h2>

              <p>
                The official currency of Taniti is the US Dollar. However, many
                merchants will be happy to accept either Euro or Yen as well.
              </p>

              <p>
                Currency exchange can be performed at the airport upon arrival,
                as well as at several of the larger banks on the island. Many
                businesses accept major credit cards including Visa and
                Mastercard. If you are unsure of whether cards will be accepted,
                feel free to ask!
              </p>
            </div>

            <div className="col">
              <img src={HotelImage} className="img-fluid" />
            </div>
          </div>

          <div className="row my-4">
            <div className="col">
              <h2>Transportation</h2>

              <p>
                Public buses serve Taniti City and run from 5 a.m. to 11 p.m.
                every day. Private buses serve the rest of the island. Taxis are
                available in Taniti City, and rental cars can be rented from a
                local rental agency near the airport. Bikes and helmets are
                available to rent from several vendors (helmets are required by
                law). Taniti City is fairly flat and very walkable. Many
                tourists stay in the area surrounding Merriton Landing: this
                area is easy to explore on foot.
              </p>
            </div>

            <div className="col">
              <img
                src={BusImage}
                alt="Buses in Taniti City"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="row my-4">
            <div className="col">
              <h2>Food and Drink</h2>

              <p>
                Taniti currently has 11 restaurants: five serve mostly local
                fish and rice, three serve American-style meals, and two serve
                Pan-Asian cuisine.
              </p>

              <p>
                Taniti has two supermarkets, two smaller grocery stores, and one
                convenience store that is open 24 hours a day.
              </p>

              <p>
                The legal age for buying and consuming alcohol in Taniti is 18.
                Alcohol is not served or sold between midnight and 9 AM.
              </p>
            </div>

            <div className="col">
              <img
                src={FoodImage}
                alt="Food from a Tanitian restaurant"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="row my-4">
            <div className="col">
              <h2>Medical Facilities</h2>

              <p>
                There is one hospital and several clinics. The hospital has many
                multilingual employees.
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

export default EssentialInformation
