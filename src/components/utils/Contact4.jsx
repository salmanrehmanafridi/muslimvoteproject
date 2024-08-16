import React from "react";
function Contact4() {
  return (
    <div className="container pt-5 pb-5 contact4">
      <div className="row">
        <div className="col-md-12">
          <div style={{ width: "500px" }} className="m-auto">
            <img src="assets/logo.svg" alt="" className="m-auto d-block pb-4" />
            <h1>
              We just opened the New York online voter registration website in
              another tab
            </h1>
            <p>
              You will need to follow the workflow and fill out all the required
              fields. Come back here when you're done!
            </p>
            <p>
              If anything goes wrong, you can still print and mail a paper form.
            </p>

            <a href="https://voterreg.dmv.ny.gov/MotorVoter/">
              <button>Register Online (Recommended)</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact4;
