import React from "react";
function Hero() {
  return (
    <div className="container-fluid hero-bg" style={{overflowX:'hidden'}}>
      <div className="row hero-row">
        <div className="col-md-6 no-res-col" style={{ paddingLeft: "0px" }} data-aos="fade-right">
          <img src="assets/istock.jpg" alt="" className=" w-100" style={{height:'100%'}} />
        </div>
        {/* <div className="col-md-12">
       
          </div> */}

        <div className="col-md-6 m-auto">
          <h1 className=" textDisplayBlock text-center" data-aos="fade-left">
            Your vote is <br /> your power <br className="line-break line-br-1" /> to
            empower <br /> your <br /> community.
          </h1>
          <h2 className="text-center"
            style={{ fontSize: "28px", lineHeight: "25px", color: "#0054b2" }}
            data-aos="fade-left"
          >
            Your vote means more funding <br /> and resources for the Muslim Community.
          </h2>
          {/* <a href="/voter-engagement" style={{textDecoration:'none'}}>
          <button className=" mt-3 d-block m-auto mb-4" >Read More &nbsp; <BsArrowRight/></button>
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
