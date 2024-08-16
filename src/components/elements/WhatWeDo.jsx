import React from "react";

function WhatWeDo() {
  return (
    <div className="container-fluid whatwedo pt-5 pb-5 bt-baner">
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto">
            {/* <h1 className="res-text" data-aos="fade-up">The Muslim Youth</h1> */}
            <img
              src="assets/arab-people.jpg"
              alt=""
              style={{ width: "200px", height: "100px", borderRadius: "10px", objectFit:'cover' }}
              data-aos="zoom-in"
            />
            <h2
              className="color-text"
              style={{ color: "#fff" }}
              data-aos="fade-up"
            >
              Our future is in our{" "}
              <span className="span1" style={{ fontWeight: "800" }}>
                Youth,
              </span>{" "}
              we are building{" "}
              <span className="span1" style={{ fontWeight: "800" }}>
                leadership pipeline{" "}
              </span>{" "}
              for them by getting opportunities and internships in the mayor
              office, borough president office and local city councils. We want
              to get the{" "}
              <span className="span1" style={{ fontWeight: "800" }}>
                Muslim youth
              </span>{" "}
              chair on the table where decisions are made.
            </h2>
          </div>
          <div className="col-md-6" data-aos="flip-right">
            <img
              src="assets/istock-1.jpg"
              alt=""
              className="w-100"
              style={{
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
