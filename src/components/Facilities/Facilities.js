import React from 'react';
import { Card, CardGroup, Col } from 'react-bootstrap';

const Facilities = (props) => {
    const {id,img}=props.facilities;
    return (
        <div>
            <div>
           

    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>Our Facilities</Card.Title>
          <Card.Text>
          Most health services are found in hospitals, clinics and medical centers run either by the government or the private sector. ... Health facilities play a very significant role in the mitigation of disasters because of their particular function in treating the injured and handling outbreaks of disease.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
 

            </div>
        </div>
    );
};

export default Facilities;