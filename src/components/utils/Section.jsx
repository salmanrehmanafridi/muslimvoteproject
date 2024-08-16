import React from "react";

function Section() {
  return (
    <div className="container-fluid pt-2 pb-5 displayBlock">
      <div className="row">
        <div className="col-md-5 mt-5 pt-5 text-end">
          <h1 className="caro-title" data-aos="fade-down">
            Fastest Growing Population
          </h1>
          <p className="caro-para" data-aos="fade-up">
            In the past two decades, Muslim Americans have become one of the
            fastest growing racial or ethnic groups in the United States
          </p>

          <img
            src="assets/11.svg"
            alt=""
            style={{ marginTop: "100px" }}
            className="mb-4"
            data-aos="zoom-in"
          />

          <div className="text-start mt-5 pt-5">
            <h1 className="caro-title  mt-5 pt-5" data-aos="fade-down">Representation Matters</h1>
            <p className="caro-para " data-aos="fade-up">
              The decisions made by policymakers and our <br /> representatives
              at all levels of government impacts <br /> our day-to-day lives –
              from how much funding local <br /> schools get to policies around
              crime prevention and <br />
              gun safety.
            </p>
          </div>
          <img
            src="assets/economics.svg"
            alt=""
            style={{ marginTop: "108px" }}
            // className="mb-4"
            data-aos="zoom-in"
          />
        </div>
        <div className="col-md-2 text-center mt-5">
          <img src="assets/line.svg" alt="" data-aos="fade-down" />
        </div>
        <div className="col-md-5">
          <img src="assets/sun.svg" alt="" />
          <div className="text-start mt-5 pt-5">
            <h1 className="caro-title text-start mt-5 pt-5" data-aos="fade-down">
              We Shape Elections
            </h1>
            <p className="caro-para text-start" data-aos="fade-up">
              The Muslim Americans electorate is a formidable community with the
              power to shape and influence elections down the ticket throughout
              the <br /> state New York.
            </p>
          </div>
          <img
            src="assets/11.svg"
            alt=""
            style={{ marginTop: "200px" }}
            data-aos="zoom-in"
          />

          <div className="text-start mt-5 pt-5">
            <h1 className="caro-title text-start mt-5" data-aos="fade-down"> 
              Impactful Economic Strength
            </h1>
            <p className="caro-para text-start" data-aos="fade-up">
              The growth of MVP influence and power extends beyond the political
              sphere, into all aspects of American society.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
