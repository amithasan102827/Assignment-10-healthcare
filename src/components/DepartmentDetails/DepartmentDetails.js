import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './DepartmentDetails.css';

const DepartmentDetails = () => {
    const { detailsId } = useParams();
    const [details, setDetails] = useState([])

    useEffect(() => {
        fetch('/fakeDataDepartment.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])
    const matchDetails = details.find(de => de.id == detailsId)
    return (
     
        <div className="">
            <Row xs={1} md={2} className="g-4 details-container  ">

                <Col>
                    <Card className="shadow ">
                        <Card.Img variant="top" src={matchDetails?.image} />
                        <Card.Body>
                            <Card.Title>{matchDetails?.name}</Card.Title>
                            <Card.Text>
                                {matchDetails?.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
           
        </div>
    );
};

export default DepartmentDetails;