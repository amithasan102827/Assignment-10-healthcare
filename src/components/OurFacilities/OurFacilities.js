import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Facilities from '../Facilities/Facilities';

const OurFacilities = () => {
    const [facilities,setFacilities]=useState([]);
    useEffect(()=>{
        fetch('/fakeDataFacilities.json')
        .then(res=>res.json())
        .then(data=>setFacilities(data))
    },[])
    return (
        <div>
            <div>
            <Row xs={1} md={2} className="g-4">
               {
                facilities.map(fa=><Facilities
                 facilities={fa}
                 key={fa.id}
                ></Facilities>)
               }

        </Row>
            </div>
        </div>
    );
};

export default OurFacilities;