import React from 'react';
import image from '../../project images/about us/bermix-studio-b8mwvvFs8Ak-unsplash.jpg'
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div>
            <div className="row my-5 background-color">
                <div className="col-md-8 p-4">
                    <h6 className="text-start ms-5">About us</h6>
                    <h1 className="text-start ms-5">50 Years of Experience in Medical</h1>
                    <p className="text-start ms-5"><span>This is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer. This is simply dummy text of the printing and type setting industry.</span></p>

                    <div className="d-flex"> 
                        <div className='mx-4 my-2'>
                            <i class="fas fa-user-tie fa-3x"></i>
                        </div>
                        <div className="my-2">
                            <h5 className="text-start">Professional Staff</h5>
                            <span className="text-start">Medical professionals include doctors, nurses, hospice workers, emergency medical technicians, and other trained caregivers.</span>
                        </div>
                    </div>

                    <div className="d-flex">
                        <div className='mx-4'>
                        <i class="fas fa-calendar-check fa-3x"></i>
                        </div>
                        <div>
                            <h5 className="text-start">98% Success Rate</h5>
                            <span className="text-start">The overall success rate of medical management quoted in the literature is highly variable, ranging from 96–98 % in clinical practice and even as high as 98 % in small research studies, </span>
                        </div>
                    </div>

                    <div className="d-flex"> 
                        <div className='mx-3 my-2'>
                        <i class="fas fa-vials fa-3x"></i>
                        </div>
                        <div className="my-2">
                            <h5 className="text-start"> Modern Equipments</h5>
                            <span className="text-start">Equipment includes: a needle holder, forceps (used to hold the lacerated tissue), sterile towels (to drape off non sterile areas of the body), scissors, and small bowls (that hold antiseptic solutions).</span>
                        </div>
                    </div>

                </div>
                <div className="col-md-4 p-4">
                  <img className="w-75" src="https://i.ibb.co/8B25DDf/medical-g5a24c2823-1280.png" alt="" />
                </div>

            </div>
        </div>
    );
};

export default AboutUs;