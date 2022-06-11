
import React from 'react'
import '../static/css/style.css';

export default function ContactUs() {
  return (
    <>
    {/* ======= Contact Section ======= */}
    <section id="contact" className="top-margin contact" >
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
          <p>For more information contact Here</p>
        </div>
        <div className="row mt-5 justify-content-center">
          <div className="col-lg-10">
            <div className="info-wrap">
              <div className="row">
                <div className="col-lg-4 info">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>LTRC, IIIT<br/>Gachibowli, Hyderabad-500032</p>
                </div>
                <div className="col-lg-4 info mt-4 mt-lg-0">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>info@example.com<br/>contact@example.com</p>
                </div>
                <div className="col-lg-4 info mt-4 mt-lg-0">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+91 0000 00000 00<br/>+91 0000 00000 00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 justify-content-center">
          <div className="col-lg-10">
            <form action="forms" method="post" roleForm="form" className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>
        </div>
        
      </div>
    </section>
    {/* End Contact Section */}
    </>
  )
}
