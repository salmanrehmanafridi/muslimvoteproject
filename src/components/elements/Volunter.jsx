import React from "react";
import Contact1 from "../utils/Contact1";
import SubscriptionForm from "../utils/SubscriptionForm";

function Volunter() {
  return (
    <>
      <div className="container-fluid voter-heading">
        <div className="row row1">
          <div className="col-md-12 ">
            <h1 className="">
              volunteer <br /> with us
            </h1>
          </div>
        </div>
      </div>

      <div className="container voter-text pt-5 pb-5">
        <div className="row volunteer-row">
          <div className="col-md-6">
            <p>
              Volunteers are essential to sustaining many of our outreach
              programs and initiatives. If you are looking for an opportunity to
              make an impact in your community during an election, or throughout
              the year, we welcome you to join our national corps of volunteers.
              Here are a few opportunities for you to consider:
            </p>
            <p>
              We support state-based “anchors,” such as state nonprofit
              associations and civic engagement initiatives, who in turn recruit
              and support nonprofits to do on-the-ground voter
              engagement work with the Muslim communities. 
            </p>
            <img src="assets/12.jpg" alt="" className="w-100" />

            <p>
              For more information please email us at{" "}
              <a href="mailto:info@muslimvotes.org">info@muslimvotes.org</a>
            </p>

            <h1
              style={{
                fontWeight: "800",
                fontFamily: "raleway",
                color: "#233F8A",
                margin: "20px 0px",
                fontSize: "35px",
              }}
            >
              VOTER HOTLINE OPERATORS
            </h1>
            <p>
              888-MVP-VOTE is a hotline offering assistance to voters in 4 Asian
              languages! We need volunteers to assist voters with their
              questions.
            </p>
            <p>
              Volunteer shifts are 4 hours each and fairly easy. Simply keep
              your computer open in the background as you go about your day.
              Once you hear a chime, you know there’s a voter who needs your
              help.
            </p>
            <p>
              Volunteers are encouraged to sign up for multiple shifts. Once you
              sign up, we will reach out to you to get you trained.
            </p>
            <p>
              Sign up for a shift in any of the following languages: English,
               Bengali, Hindi/Urdu.
            </p>
            <h1
              style={{
                fontWeight: "800",
                fontFamily: "raleway",
                color: "#233F8A",
                margin: "20px 0px",
                fontSize: "35px",
              }}
            >
              PHONE AND TEXT BANKERS
            </h1>
            <p>
              Volunteer phone and text bankers help us communicate
              directly with million of Muslims across NYC to get them
              educated, prepared, motivated to vote and participate in the
              political process.
            </p>
            {/* <p>
              Help empower MVP this December! Sign up for a
              phonebanking shift here.
            </p> */}
          </div>
          <div className="col-md-6">
            <div className="mb-5">
          <Contact1/>
            </div>
            <div className="mb-5">
          <SubscriptionForm/>
            </div>
            {/* <img src="assets/12.jpg" alt="" className="w-100" /> */}

          </div>
        </div>
      </div>
    </>
  );
}

export default Volunter;
