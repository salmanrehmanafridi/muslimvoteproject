import React from "react";

function Protect() {
  return (
    <div className="container pt-5 pb-5 mt-5 mb-5 protect">
      <div className="row">
        <div className="col-md-7">
          <h1 className="res-text">
            Protecting Our <br />
            Voting Rights
          </h1>
          <p>
            More than a century after the right to vote was declared
            fundamental, that right is under attack. Efforts to make it harder
            for racial minorities to participate in the political process are
            proliferating across the country state by state- and we're fighting
            those efforts in court.
          </p>
        </div>
        {/* <div className="col-md-1"></div> */}
        <div className="col-md-5">
            <img src="assets/objects.svg" alt="" className="w-100" />
        </div>
      </div>
    </div>
  );
}

export default Protect;
