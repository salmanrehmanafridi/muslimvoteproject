import React from "react";
import { BsArrowRight } from "react-icons/bs";


function Section4() {


  return (
    <div className="container-fluid sec4-bg pt-3 pb-5">
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-6">
            <h2 className="res-text" data-aos="fade-left">Join the movement & make a history</h2>
            <h1 data-aos="fade-right">
              Muslims are the
              fastest growing demographic <br /> in the United States, there are 1.2 million Muslims in NY. If we translate
              our number into votes we can be the <span style={{color:'blue', fontWeight:'800'}}>Game Changers.</span>  
            </h1>
            <a href="/contact" >
            <button data-aos="zoom-in">
              Get Involved <BsArrowRight className="mx-2" />
            </button>
            </a>
          </div>

          <div className="col-md-6 contact" data-aos="zoom-in-left">
            <img src="assets/4.svg" alt="" className="res-img" />

          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
