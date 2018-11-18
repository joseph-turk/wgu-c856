import React from 'react'
import { Container } from 'reactstrap'

import Hero from '../components/hero'
import NewsCard from '../components/news-card'
import PlaceholderModal from '../components/placeholder-modal'

import HeroImage from '../images/home/hero.jpg'
import BeachImage from '../images/home/beach.jpg'
import GolfImage from '../images/home/golf.jpg'
import AirplaneImage from '../images/home/airplane.jpg'

class Home extends React.Component {
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
          title="Welcome!"
          subtitle="your paradise awaits"
          image={HeroImage}
          height="70vh"
        />
        <Container>
          <div className="row mt-5">
            <div className="col-sm">
              <h2>About Taniti</h2>
              <p>
                Taniti is a small, tropical island in the Pacific. While the
                island has an area of less than 500 square miles, the terrain is
                varied and includes both sandy and rocky beaches, a small but
                safe harbor, lush tropical rainforests, and a mountainous
                interior that includes a small, active volcano. Taniti has an
                indigenous population of about 20,000. Until a recent increase
                in tourism, most the Tanitian economy was dominated by fishing
                or agriculture.
              </p>
            </div>

            <div className="col-sm">
              <img src={BeachImage} className="img-fluid" />
            </div>
          </div>

          <div className="mt-5">
            <h2>Latest News</h2>
            <NewsCard
              toggleModal={this.toggleModal}
              image={GolfImage}
              title="Golf Course Opening"
              text="The Taniti City Chamber of Commerce is thrilled to announce the opening of a brand new nine-hole golf course! This course is located just minutes from Taniti City center..."
            />

            <NewsCard
              toggleModal={this.toggleModal}
              image={AirplaneImage}
              title="Expanded Flight Options"
              text="Starting this year, the Taniti Airport will feature even more flight options. The expansion project for the airport that began last year is coming to a close, and new flight..."
            />
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

export default Home
