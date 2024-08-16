import React from "react";
import {BsArrowRight} from 'react-icons/bs'
function Quote() {

  return (
    <div className="container-fluid ban1-bg" style={{backgroundColor:'#353a40'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="">
              {/* <ImQuotesLeft size={100} color='#fff' className="svg1" /> */}
              <h1
                className="color-text text-center res-text"
                style={{ color: "#fff", fontSize: "48px", lineHeight: "56px" }}
              >
                We find part time
                <span className="span2" style={{ fontWeight: "800" }}>
                  jobs and internship{" "}
                </span>{" "}
                programs for our{" "}
                <span className="span1" style={{ fontWeight: "800" }}>
                  Muslim{" "}
                </span>
                youth in the local city council, borough{" "}
                <span className="span2" style={{ fontWeight: "800" }}>
                  president
                </span>{" "}
                and{" "}
                <span className="span1" style={{ fontWeight: "800" }}>
                  mayor office{" "}
                </span>{" "}
                to build a pipeline for our{" "}
                <span className="span2" style={{ fontWeight: "800" }}>
                  future political leadership{" "}
                </span>
                in the city.
              </h1>
              <a href="/contact" style={{textDecoration:'none'}}>

              <button className="m-auto d-block mt-4" style={{
                    background: '#ff3737',
                    borderRadius: '100px',
                    padding: '17px 32px',
                    fontFamily: "Raleway",
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '20px',
                    lineHeight: '23px',
                    color: '#fdfcfc', 
                    border:'none'               
              }}>
                
              Join The Movement <BsArrowRight className="mx-2" />
            </button>
            </a>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quote;
