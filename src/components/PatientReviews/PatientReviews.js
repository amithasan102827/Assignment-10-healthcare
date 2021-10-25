import React from 'react';
import features1 from '../../project images/features-1 (2).jpg';
import features2 from '../../project images/features-2 (2).jpg';
import './PatientReviews.css';

const PatientReviews = () => {
    return (
        <div className='row backgroundcolor mt-4'>
            <h2 className="text-center">Patients Reviews</h2>
            <div className='col-md-6'>

                <div class="card mb-3 shadow mx-4 " >
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={features1} class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Name: Rahim</h5>
                                <p class="card-text">Excellent visit. This was for a second opinion and an attempt to see what help an injection would do. I would have happily had him do the surgery if I lived closer. </p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>




            <div className='col-md-6'>

                <div class="card mb-3 shadow ms-2 me-4" >
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={features2} class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Name: Karim</h5>
                                <p class="card-text">Dr. Castañeda is a confident, caring, informative provider that I have complete faith and trust in. My care has been top-notch, and I recommend her any chance I can.</p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>

    );
};

export default PatientReviews;