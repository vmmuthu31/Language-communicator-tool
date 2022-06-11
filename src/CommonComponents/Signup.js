
import React from 'react'
import '../static/css/style.css';
import '../static/css/bootstrap-icons.css';
import { Link } from 'react-router-dom';
//import { Link } from 'react-router-dom';

let x="Bilal";
console.log(x)


export default function Signup() {
  return (
    <>
    <div className="container top-margin">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card border-0 shadow rounded-3 my-5">
          <div className="card-body p-4 p-sm-5">
            <h5 className="card-title text-center mb-5 fw-light fs-5">Sign Up</h5>
            <form>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label htmlFor="floatingInput">Email ID</label>
              </div>
              <div className="form-floating mb-3">
                <input type="firstname" className="form-control" id="floatingInput" placeholder="First Name"/>
                <label htmlFor="floatingInput">First Name</label>
              </div>
              <div className="form-floating mb-3">
                <input type="secondname" className="form-control" id="floatingInput" placeholder="Second Name"/>
                <label htmlFor="floatingInput">Second Name</label>
              </div>
              <div className="form-floating mb-3">
                <input type="affiliation" className="form-control" id="floatingInput" placeholder="Affiliation"/>
                <label htmlFor="floatingInput">Affiliation</label>
              </div>
              <div className="form-floating mb-3">
              <select id="inputState" class="form-select">
                <option selected>Region</option>
                <option>North</option>
                <option>South</option>
                <option>East</option>
                <option>West</option>
              </select>
              </div>
              <div className="form-floating mb-3">
                <input type="purposeofusage" className="form-control" id="floatingInput" placeholder="Purpose of Usage"/>
                <label htmlFor="floatingInput">Purpose Of Usage</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label htmlFor="floatingPassword">Password</label>
              </div>

              <div className="d-grid">
                <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign Up</button>
              </div>
              <hr className="my-4"/>
              {/* <div className="d-grid mb-2">
                <button className="btn btn-google btn-login text-uppercase fw-bold" type="submit">
                  <i className="fab bi-google me-2"></i> Sign in with Google
                </button>
              </div>
              <div className="d-grid">
                <button className="btn btn-facebook btn-login text-uppercase fw-bold" type="submit">
                  <i className="fab bi-facebook me-2"></i> Sign in with Facebook
                </button>
              </div> */}
              <p className="my-3">Have an Account <Link to="/login">Login</Link></p>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

