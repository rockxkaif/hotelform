import React from 'react'



import single from "../img/single.jpg";
import double from "../img/double.jpg";
import deluxx from "../img/deluxx.jpg";






export default function Footer() {
    return (
        <>
            <div className="container my-4 mb-2">

                <div className="row featurette justify-content-center align-items-center" style={{ color: 'black' }}>
                    <div className="col-md-7">
                        <h4 className="featurette-heading text-center">Stay With Our Luxury Rooms<span className="text-muted" > Stay And Enjoy</span></h4>
                        <h4 className="text-muted text-center">Up To 60% OFF<span className="featurette-heading" > On Online Booking</span></h4>
                    </div>           
                </div>
            <div class="row mb-3" style={{color:'black'}}    >
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                        <img src={single} class="img-fluid" />
                        <h3>Single Bedroom</h3>
                        <p className="text-muted">Spacious single bedroom with attached toilet and bathroom. Free Wi-fi available throughout the stay. 2500rs per night. Breakfast included.</p>
                            <a href="#" class="btn btn-danger">Book Now</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                        <img src={double} class="img-fluid" />
                        <h3>Double Bedroom</h3>
                        <p className="text-muted">Spacious double bedroom with attached toilet and bathroom. Free Wi-fi available throughout the Hotel. 3500rs per night. Breakfast included.</p>
                            <a href="#" class="btn btn-danger">Book Now</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                        <img src={deluxx} class="img-fluid" />
                      <h3>Family Bedroom</h3>
                      <p className="text-muted">Spacious family bedroom with attached toilet and bathroom. Free Wi-fi available throughout the stay. 5500rs per night. Breakfast included.</p>
                     
                            <a href="#" class="btn btn-danger">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>
            
           </div>
        
        </>
    )
}
