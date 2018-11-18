import React from 'react'
import { Card, CardText, CardBody, CardTitle, Button } from 'reactstrap'

const NewsCard = ({ image, title, text, toggleModal }) => (
  <Card className="my-3">
    <CardBody>
      <div className="d-flex">
        <img
          src={image}
          style={{
            width: 150,
            minWidth: 150,
            height: 150,
            marginRight: '1rem'
          }}
        />

        <div className="d-flex flex-column justify-content-between align-items-start">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardText>{text}</CardText>
          </div>

          <Button color="primary" onClick={toggleModal}>
            Read More
          </Button>
        </div>
      </div>
    </CardBody>
  </Card>
)

export default NewsCard
