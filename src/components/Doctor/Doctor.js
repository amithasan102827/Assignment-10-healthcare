import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Doctor = (props) => {
  const {id,name,cost,img,department}=props.doctor;
    return (
        <div>
           
  
    <Col>
      <Card className="mx-5">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>Department: {department}</Card.Title>
          <h3> Name: {name}</h3>
          <h5>cost: {cost}</h5>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        <Link to={`/doctor/${id}`}> <button className ='btn-primary'>APPOITNMENT</button> </Link>
        </Card.Body>
      </Card>
    </Col>
  

        </div>
    );
};

export default Doctor;