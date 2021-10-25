import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Department from '../Department/Department';
import './OurDepartment.css';

const OurDepartment = () => {
    const [department ,setDepartment]=useState([]);
    useEffect(()=>{
        fetch('/fakeDataDepartment.json')
        .then(res=> res.json())
        .then(data=> setDepartment(data));
    },[])
    


    return (    
        <div>
           <div>
               <h2 className="mt-5 text-center">Our Departments</h2>
             <div className="row row-cols-1 row-cols-md-3 g-4  ">
             {
                 department.map(dp=> <Department
                 department={dp}
                 key={dp.id}
                 ></Department>)
             }
        </div>
         </div> 
        </div>
    );
};

export default OurDepartment;