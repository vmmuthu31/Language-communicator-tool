/*import logo from './logo.svg';*/
import '../static/css/style.css';

function Footer() {
  return (
    <>
      {/* ======= Footer ======= */}
      <a href="/" className="back-to-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>
      <footer id="footer" className="bg-dark">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>USR</h3>
                <p>
                  LTRC Lab, IIIT CAMPUS <br/>
                  Gachibowli, Hyderabad- 500032<br/>
                  Telangana, India <br/><br/>
                  <strong>Phone:</strong> +91 0000 00000 00<br/>
                  <strong>Email:</strong> info@example.com<br/>
                </p>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="/">Home</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="/">About us</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="/">Features</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="/">Research</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="/">People</a></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="/">Service-1</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="/">Service-2</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="/">Service-3</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="/">Service-4</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="/">Service-5</a></li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Join Our Newsletter</h4>
                <p>Content required</p>
                <form >
                  <input type="email" name="email"/> <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="container d-md-flex py-4">

          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
              &copy; Copyright <strong><span>USR</span></strong> All Rights Reserved
            </div>
            <div className="credits">
              Designed by <a href="/">LTRC Team and Others</a>
            </div>
          </div>
        </div>
      </footer>

      {/* End Footer */}
      

  </>
  );
}

export default Footer;
