import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <nav className={`navbar navbar-expand-lg header py-0 `}>
      <div className="container-fluid  nav-cont">
        <a className="navbar-brand" href="/">
          <img src="assets/logo.svg" alt="" width={200} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <div className="dropdown">
              <li className="nav-item">
                <p className="nav-link">inititative</p>
              </li>
              <div className="dropdown-content">
                <Link to="/voter-engagement">
                  Voter Engagement
                </Link>
                <Link  to="/voter-education">
                  Voter Education
                </Link>
                <Link  to="/election-protection">
                Voter Protection
              </Link>
              </div>
            </div>
            <li className="nav-item">
              <Link className="nav-link " to="/mission">
                Mission & Vision
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link " to="/partner">
                Partner With Us
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link " to="/volunteer">
                Volunteer with us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
          </ul>
          {/* <button className="btn btn-outline-danger ">Donate Now</button> */}
        </div>
      </div>
    </nav>
  );
}

export default Header;
