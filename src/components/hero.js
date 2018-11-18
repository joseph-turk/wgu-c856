import React from 'react'
import { Container } from 'reactstrap'

const Hero = ({ image, title, subtitle, height }) => (
  <div
    className="bg-dark"
    style={{
      backgroundImage: `url(.${image})`,
      backgroundSize: 'cover',
      minHeight: height,
      backgroundPosition: 'bottom center',
      position: 'relative'
    }}
  >
    <Container
      fluid
      style={{
        position: 'absolute',
        bottom: '2rem',
        textShadow: '0 0 4px #333'
      }}
      className="text-light text-center"
    >
      <h1 className="display-2">{title}</h1>
      <h2 className="font-italic">{subtitle}</h2>
    </Container>
  </div>
)

export default Hero
