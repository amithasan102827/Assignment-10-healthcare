import React from 'react';
import './OurFeatures.css';
import { Card, CardGroup } from 'react-bootstrap';
import features1 from '../../project images/features-1.jpg';
import features2 from '../../project images/features-2.jpg';
import features3 from '../../project images/features-3.jpg';


const OurFeatures = () => {
  return (
    // <div>
    //   <div>
    //     <h2 classNameName='mt-5 text-center'>Our Features</h2>
    //     <CardGroup classNameName="w-75 mx-auto" >
    //       <Card classNameName=' shadow   '>
    //         <Card.Img variant="top" src={features1} />
    //         <Card.Body>
    //           <Card.Title>Emergency Care</Card.Title>
    //           <Card.Text>
    //             This is a wider card with supporting text  below as a natural lead-in to
    //             additional content. This content is a little bit longer.
    //           </Card.Text>
    //         </Card.Body>

    //       </Card>
    //       <Card classNameName='  shadow '>
    //         <Card.Img variant="top" src={features2} />
    //         <Card.Body>
    //           <Card.Title>Qualified Doctors</Card.Title>
    //           <Card.Text>
    //             This card has supporting text below as a natural lead-in to additional
    //             content.{' '}
    //           </Card.Text>
    //         </Card.Body>

    //       </Card>
    //       <Card classNameName= ' shadow '>
    //         <Card.Img variant="top" src={features3} />
    //         <Card.Body>
    //           <Card.Title>24/7 Hours Service</Card.Title>
    //           <Card.Text>
    //             This is a wider card with supporting text below as a natural lead-in to
    //             additional content. This card has even longer content than the first to
    //             show that equal height action.
    //           </Card.Text>
    //         </Card.Body>

    //       </Card>
    //     </CardGroup>
    //   </div>
    // </div>

    <div className="mt-4 mx-4">
      <h2 className="text-center">Our Features</h2>
    <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card shadow">
      <img src={features1} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Emergency Care</h5>
        <p className="card-text">Emergency medical services (EMS), also known as ambulance services or paramedic services, are emergency services that provide urgent pre-hospital treatment and stabilisation for serious illness and injuries and transport to definitive care.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow">
      <img src={features2} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Qualified Doctors</h5>
        <p className="card-text">Service is work done for others or repairs provided. ... Service is defined as someone or something that is intended to provide help to those providing assistance to others. An example of service  is meant to be used by medical staff.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow">
      <img src={features3} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">24/7 Hours Service</h5>
        <p className="card-text">EMS is available 24 hours a day, 7 days a week, every day of the year across Alberta. Over 550,000 events occur each year, involving more than 500 ambulance vehicles with 5,500 EMS practitioners providing care.</p>
      </div>
    </div>
  </div>
  </div>
</div>
  );
};

export default OurFeatures;
