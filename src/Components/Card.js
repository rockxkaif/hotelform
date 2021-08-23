
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import room from "../img/room.jpg";
import bgg from "../img/bgg.jpg";

import '../App.css';
import Modal from 'react-modal';



export default function Card() {
	const [modalIsopen, setModalisopen] = useState(false)

	return (
		<div>

			<div className="container-fluid banner" >
				<div className="row">
					<div className="col-md-12">
						<nav className="navbar navbar-md">
							<div className="navbar-brand">Luxury Hotel</div>
							<ul className="nav">
								<li className="nav-item">
									<a className="nav-link" href="#">HOME</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">ROOMS</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">ABOUT US</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">CONTACT</a>
								</li>
							</ul>
						</nav>
					</div>
					<div className="col-md-8 offset-md-2 info">

						<h1 className="text-center">
							Welcome To Our Luxury Rooms
						</h1>
						<p> Discover Our World's #1 Luxury Rooms For VIP.</p>
						<div class="col text-center">
							<button type="button" className="btn btn-warning text-white" style={{ textAlign: 'center' }} onClick={() => setModalisopen(true)}>Book Now</button>
						</div>
						<Modal isOpen={modalIsopen} onRequestClose={() => setModalisopen(false)} style={{
							overlay: {
								backgroundColor: 'goldenrod'
							}
						}} >


						 <div className="testbox">
    <form>
      <div className="banners">
        <h2>Hotel Reservation Form</h2>
      </div>
      <br/>
    
        <h3>Reservation Details</h3>
        <div className="columns">
          <div className="item">
            <label for="fname">First Name<span>*</span></label>
            <input id="fname" type="text" name="fname" />
          </div>
          <div className="item">
            <label for="lname"> Last Name<span>*</span></label>
            <input id="lname" type="text" name="lname" />
          </div>
          <div className="item">
            <label for="address">Address<span>*</span></label>
            <input id="address" type="text"   name="address" />
          </div>
          <div className="item">
            <label for="zip">Zip Code<span>*</span></label>
            <input id="zip" type="text"   name="zip" required/>
          </div>
          <div className="item">
            <label for="city">City<span>*</span></label>
            <input id="city" type="text"   name="city" />
          </div>
          <div className="item">
            <label for="state">State<span>*</span></label>
            <input id="state" type="text"   name="state" />
          </div>
          <div className="item">
            <label for="eaddress">Email Address<span>*</span></label>
            <input id="eaddress" type="text"   name="eaddress" />
          </div>
          <div className="item">
            <label for="phone">Phone<span>*</span></label>
            <input id="phone" type="tel"   name="phone" />
          
     </div>
      <br/>
     
      <legend>Dates</legend>
      
      <div className="item">
      <label for="checkindate">Check-in Date <span>*</span></label>
      <input id="checkindate" type="date" name="checkindate" />
      <i className="fas fa-calendar-alt"></i>
      </div>
      <div className="item">
      <label for="checkoutdate">Check-out Date <span>*</span></label>
      <input id="checkoutdate" type="date" name="checkoutdate" />
      <i className="fas fa-calendar-alt"></i>
      </div>
      <div className="item">
      <p>Check-in Time </p>
      <select>
      <option value="" disabled selected>Select time</option>
      <option value="1" >Morning</option>
      <option value="2">Afternoon</option>
      <option value="3">Evening</option>
      </select>
      </div>
      <div className="item">
      <p>Check-out Time </p>
      <select>
      <option  value="4" disabled selected>Select time</option>
      <option value="5" >Morning</option>
      <option value="6">Afternoon</option>
      <option value="7">Evening</option>
      </select>
      </div>    
      <div className="item">
      <p>How many adults are coming?</p>
      <select>
      <option value="8" disabled selected>Number of adults</option>
      <option value="9" >1</option>
      <option value="10">2</option>
      <option value="11">3</option>
      <option value="12">4</option>
      <option value="13">5</option>
      </select>
      </div>    
      <div className="item">
      <p>How many children are coming?</p>
      <select>
      <option value="14" disabled selected>Number of children</option>
      <option value="15" >0</option>
      <option value="16">1</option>
      <option value="17">2</option>
      <option value="18">3</option>
      <option value="19">4</option>
      <option value="19">5</option>
      </select>
      </div>   
     
      <div className="item">
      <p>Room 1 type</p>
      <select>
      <option value="20" selected></option>
      <option value="21">Standard</option>
      <option value="22">Deluxe</option>
      <option value="23">Suite</option>
      </select>
      </div>    
      <div className="item">
      <p>Room 2 type</p>
      <select>
      <option value="24"  selected></option>
      <option value="25">Standard</option>
      <option value="26">Deluxe</option>
      <option value="27">Suite</option>
      </select>
    
   
      </div>
      </div>
      <div className="item" style={{width:'100%'}}>
      <label for="room">Instruction</label>
    
      <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
      </div>
    </form>
    </div>
    <div className="text-center">
      <button className="btn btn-warning text-white w-100 m-auto  text-uppercase btn-lg " type="button">Book My Room</button>
      </div>
							<div>
								<buttons style={{fontSize:'30px',color:'red' }} onClick={() => setModalisopen(false)}><i class="fa fa-close"></i></buttons>
							</div>
						</Modal>
					</div>
				</div>
			</div>

		</div>
	)
}
