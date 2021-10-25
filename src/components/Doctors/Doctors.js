import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctor,setDoctor]=useState([]);
    useEffect(()=>{
        fetch('/fakeDataDoctors.json')
        .then(res=>res.json())
        .then(data=>setDoctor(data));
    },[])
    return (
        <div>

            <div>
            <Row xs={1} md={2} className="g-4">
                {
                    doctor.map(dc=><Doctor
                    doctor={dc}
                    key={dc.id}
                    ></Doctor>)
                }
                </Row>
            </div>
            
        </div>
    );
};

export default Doctors;