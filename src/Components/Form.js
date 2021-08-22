import React from 'react'

export default function Form() {
    return (
        <div>
    
    <div className="testbox">
    <form>
      <div className="banner">
        <h1>Hotel Reservation Form</h1>
      </div>
      <br/>
    
        <legend>Reservation Details</legend>
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
      <div className="columns">
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
      <div className="item" style={{width:'100%'}}>
      <label for="room">Number of rooms</label>
      <input id="room" type="number" name="room" />
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
      <div className="item">
      <label for="instruction">Special Instructions</label>
      <textarea id="instruction" rows="3"></textarea>
      </div>
      <div className="btn-block">
      <button type="submit" href="/">Submit</button>
      </div>
      </div>
    </form>
    </div>
        </div>
    )
}
