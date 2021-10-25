import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Department.css';

const Department = (props) => {
  const { id, name, image, description } = props.department;
  return (
    //     <div>
    //         <div>


    // <Col>
    //   <Card className="  card-width shadow">
    //     <Card.Img className="" variant="top" src={image} />
    //     <Card.Body>
    //       <Card.Title>{name}</Card.Title>
    //       <Card.Text>
    //         {description}
    //       </Card.Text>
    //       <Link to={`/department/${id}`}>
    //       <Button  className="btn-primary" variant="outline-secondary">Details</Button>
    //       </Link>
    //     </Card.Body>
    //   </Card>
    // </Col>

    //         </div>
    //     </div>

    <div >

      <div class="col">
        <div class="card w-75  mx-auto shadow">
          <img src={image} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{description}</p>
            <Link to={`/department/${id}`}> <button className="btn-primary">Details</button></Link>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Department;