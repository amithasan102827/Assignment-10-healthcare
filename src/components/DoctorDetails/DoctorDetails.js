import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './DoctorDetails.css';

const DoctorDetails = () => {
    const {doctorDetailsId}=useParams();
    const [doctorDetails,setDoctorDetails]=useState([]);

    useEffect(()=>{
        fetch('/fakeDataDoctors.json')
        .then(res=>res.json())
        .then(data=>setDoctorDetails(data));
    },[])

    const matchDoctor=doctorDetails.find(dc=>dc.id==doctorDetailsId)
    return (
        <div>
            <Row xs={1} md={2} className="g-4 doctor-details ">

    <Col>
      <Card className="shadow">
        <Card.Img variant="top" src={matchDoctor?.img} />
        <Card.Body>
          <Card.Title>{matchDoctor?.department}</Card.Title>
          <Card.Text>
           <h3>Name: {matchDoctor?.name}</h3>
           <h4>cost: {matchDoctor?.cost}</h4>

          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
 
</Row>
        </div>
    );
};

export default DoctorDetails;