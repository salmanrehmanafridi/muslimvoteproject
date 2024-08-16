import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
function Footer() {
  return (
    <div className="container-fluid footer-bg">
      <div className="container  pt-5">
        <div className="row">
          <div className="col-md-4">
            <img src="assets/Logo.svg" alt="" width={230} /> <br />
            <p>
              Muslim Vote Project (MVP) is a nonprofit 501(c) dedicated to
              engaging, educating, and empowering Muslim communities to
              strengthen their voices and create impact in every election. For
              years, MVP has been at the forefront of a rising movement to
              ensure Muslims are represented and heard, leading to historic
              voter turnout and advancing equity for Muslim communities.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <ul className="list-unstyled">
              <li>
                <a href="/mission">Mission & Vision</a>
              </li>
              <li>
                <a href="/election-protection">Voter Protection</a>
              </li>
              <li>
                <a href="/voter-engagement">Voter Engagement</a>
              </li>
              <li>
                <a href="/voter-education">Voter Education</a>
              </li>
              <li>
                <a href="/volunteer">Volunteer With Us</a>
              </li>
              <li>
                <a href="/partner">Partner With Us</a>
              </li>
              {/* <li>
                <a href="/contact">Become a Volunteer</a>
              </li> */}
            </ul>
            <ul></ul>
          </div>

          <div className="col-md-4 ">
            {/* <h4>Join Us</h4> */}
            <div className="social-icons">
              <a href="https://www.facebook.com/profile.php?id=100087803119750">
                <FaFacebook />
              </a>
              <a href="/">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/company/91524607/admin/">
              <FaLinkedin />
              </a>
              <a href="https://twitter.com/muslims_vote">
                <FaTwitter />
              </a>
            </div>
          </div>
          <hr style={{ height: "3px" }} className="mt-5" />
          <div className="col-md-6">
            <p>© 2022 Muslims Vote Project, All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
