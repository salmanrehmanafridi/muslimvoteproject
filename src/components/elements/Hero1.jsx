import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function Hero1() {
  return (
    <div className="container-fluid hero1 ">
      <div className="row">
        <div className="col-md-6 m-auto">
          <h2
            className="color-text"
            style={{ fontSize: "48px", lineHeight: "55px" }}
            data-aos="fade-right"
          >
            We want an America <br className="line-break" /> where
            <span className="span1" style={{ fontWeight: "900" }}>
              {" "}
              Muslims{" "}
            </span>
            can <br className="line-break" /> become
            <span className="span2" style={{ fontWeight: "900" }}>
              {" "}
              City Council, Mayors,{" "}
            </span>
            <span className="span1" style={{ fontWeight: "900" }}>
              Member of <br className="line-break" /> Congress{" "}
            </span>
            and{" "}
            <span className="span2" style={{ fontWeight: "900" }}>
              US Presidents
            </span>
          </h2>

          {/* <h2>
            We want to prepare our next generation of Muslim leadership at local
            and national levels to represent the under represented and
            underserved Muslim community.
          </h2> */}

          <Link to="/contact2" >
            <button className=" mb-4 mt-4 bounce-button">
              Register yourself &nbsp; <BsArrowRight />{" "}
            </button>
          </Link>
        </div>

        <div
          className="col-md-6 no-res-col hero1-img"
          style={{ paddingLeft: "0px" }}
        >
          <img
            src="assets/american-poling.jpg"
            alt=""
            className="w-100"
            data-aos="flip-right"
            style={{
              height:'100%'
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero1;
