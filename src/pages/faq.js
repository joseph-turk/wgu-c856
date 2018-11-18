import React from 'react'
import { Container } from 'reactstrap'

import Hero from '../components/hero'

import HeroImage from '../images/faq/hero.jpg'

const FAQ = () => (
  <div>
    <Hero
      image={HeroImage}
      title="Frequently Asked Questions"
      subtitle="What do visitors often ask?"
      height="40vh"
    />

    <Container className="mt-5">
      <h2>Do I need to bring a power adapter?</h2>

      <p>
        Power outlets are 120 volts and use US-style plugs. If you are visiting
        from the United States, you will not need to bring any special adapters
        to use Tanitian outlets.
      </p>

      <p>
        For visitors from other locations, including the European Union, Japan,
        Canada, and Mexico, you will need an adapter to plug your electronic
        devices into Tanitian outlets. However, because the voltage is lower
        than what it is in your home countries, a power converter is not
        required.
      </p>

      <h2>Do I need to speak Tanitian?</h2>

      <p>
        You can have a wonderful time in Taniti without knowing the language.
        Many younger Tanitians are fluent in English, and though older Tanitians
        and those in rural areas may not speak it well, they are happy to work
        around the language barrier.
      </p>

      <h2>How safe is Taniti?</h2>

      <p>
        Violent crime is very rare on Taniti, but as tourism increases, there
        are more reports of pickpocketing and other petty crimes. As long as you
        take care with your belongings, you should be perfectly safe during your
        visit.
      </p>

      <h2>When are businesses open?</h2>

      <p>
        Most businesses are open seven days a week, and are usually open at
        least from 9:00 AM to 7:00 PM.
      </p>

      <p>
        However, Taniti enjoys a large number of national holidays, and many
        tourist attractions and restaurants will be closed on holidays, so
        visitors should plan accordingly.
      </p>

      <h2>How can I pay for things?</h2>

      <p>
        The official currency of Taniti is the US Dollar. However, many
        merchants will be happy to accept either Euro or Yen as well.
      </p>

      <p>
        Currency exchange can be performed at the airport upon arrival, as well
        as at several of the larger banks on the island. Many businesses accept
        major credit cards including Visa and Mastercard. If you are unsure of
        whether cards will be accepted, feel free to ask!
      </p>
    </Container>
  </div>
)

export default FAQ
