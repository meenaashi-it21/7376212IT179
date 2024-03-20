import React from 'react';
import './Contact.css';
const Contact = () => {
  return (
    <div className="container">
      <div style={{textAlign: "center"}}>
        <h2>Contact Us</h2>
        <p>For any issues:</p>
      </div>
      <div className="row">
        <div className="column">
          <img src="https://www.mbarendezvous.com/images/top-stories-img/bannerimage_1558164178.jpg" style={{width: "100%"}} alt="img" />
        </div>
        <div className="column">
          <form action="">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.." />
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
            <label htmlFor="country">Country</label>
            <select id="country" name="country">
              <option value="australia">India</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>
            <label htmlFor="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.." style={{height: "170px"}}></textarea>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;