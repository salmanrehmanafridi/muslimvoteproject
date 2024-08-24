import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Marquee from "react-fast-marquee";
import { LiaStarSolid } from "react-icons/lia";
function Hero1() {
  return (
    <>
      <Marquee pauseOnHover style={{ background: 'red', color: 'white' }}>
      <p style={{ display: 'flex', alignItems: 'center', paddingRight: '20px', margin: 0 }}>
        <span style={{ width: '10px', height: '10px', backgroundColor: 'white', display: 'inline-block', marginRight: '10px' }}></span>
        At least 59 Palestinians killed since dawn, 100,000 displaced in two days.
      </p>
      <p style={{ display: 'flex', alignItems: 'center', paddingRight: '20px', margin: 0 }}>
        <span style={{ width: '10px', height: '10px', backgroundColor: 'white', display: 'inline-block', marginRight: '10px' }}></span>
        Israeli forces shoot, injure two children in West Bank town.
      </p>
      <p style={{ display: 'flex', alignItems: 'center', paddingRight: '20px', margin: 0 }}>
        <span style={{ width: '10px', height: '10px', backgroundColor: 'white', display: 'inline-block', marginRight: '10px' }}></span>
        ISIL claims Germany stabbing attack was ‘revenge for Muslims in Palestine’
      </p>
    </Marquee>
      <div className="container-fluid hero-slider-container">
        <div className="row">
          <div className="col-md-12">
            <Carousel showThumbs={false} autoPlay infiniteLoop={true}>
              <div>
                <div className="hero-slider-bg">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "7px",
                    }}
                  >
                    <div className="dashes"></div>
                    <div>
                      <LiaStarSolid size={30} color="red" />
                      <LiaStarSolid size={30} color="red" />
                      <LiaStarSolid size={30} color="blue" />
                      <LiaStarSolid size={30} color="blue" />
                      <LiaStarSolid size={30} color="red" />
                      <LiaStarSolid size={30} color="red" />
                    </div>
                    <div className="dashes"></div>
                  </div>
                  <h1>
                    Are you ready to <br /> <span>Vote?</span>
                  </h1>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "7px",
                    }}
                  >
                    <div className="dashes"></div>
                    <div>
                      <LiaStarSolid size={30} color="red" />
                      <LiaStarSolid size={30} color="red" />
                      <LiaStarSolid size={30} color="blue" />
                      <LiaStarSolid size={30} color="blue" />
                      <LiaStarSolid size={30} color="red" />
                      <LiaStarSolid size={30} color="red" />
                    </div>
                    <div className="dashes"></div>
                  </div>
                  <Link to="/contact2">
                    <button className=" mb-4 mt-4 bounce-button">
                      Register yourself &nbsp; <BsArrowRight />{" "}
                    </button>
                  </Link>
                </div>
                {/* <img src="assets/heroslider.jpg" /> */}
              </div>
              {/* Second Page */}
              <div className="carousel-slide video-container">
                <video className="background-video" autoPlay loop muted preload='auto' playsInline> 
                  <source src="assets/hero-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="video-overlay"></div>
                <div className="overlay-content">
                  <h2
                    className="color-text"
                    style={{ fontSize: "48px", lineHeight: "55px" }}
                    data-aos="fade-right"
                  >
                    We want an America where
                    <span className="span1" style={{ fontWeight: "900" }}>
                      {" "}
                      Muslims{" "}
                    </span>
                    can become
                    <span className="span2" style={{ fontWeight: "900" }}>
                      {" "}
                      City Council, Mayors,{" "}
                    </span>
                    <span className="span1" style={{ fontWeight: "900" }}>
                      Member of Congress{" "}
                    </span>
                    and{" "}
                    <span className="span2" style={{ fontWeight: "900" }}>
                      US Presidents
                    </span>
                  </h2>
                </div>
              </div>
             
            </Carousel>
          </div>
        </div>
      </div>
    </>

    // <div className="container-fluid hero1 ">
    //   <div className="row">
    //     <div className="col-md-6 m-auto">
    //       <h2
    //         className="color-text"
    //         style={{ fontSize: "48px", lineHeight: "55px" }}
    //         data-aos="fade-right"
    //       >
    //         We want an America <br className="line-break" /> where
    //         <span className="span1" style={{ fontWeight: "900" }}>
    //           {" "}
    //           Muslims{" "}
    //         </span>
    //         can <br className="line-break" /> become
    //         <span className="span2" style={{ fontWeight: "900" }}>
    //           {" "}
    //           City Council, Mayors,{" "}
    //         </span>
    //         <span className="span1" style={{ fontWeight: "900" }}>
    //           Member of <br className="line-break" /> Congress{" "}
    //         </span>
    //         and{" "}
    //         <span className="span2" style={{ fontWeight: "900" }}>
    //           US Presidents
    //         </span>
    //       </h2>

    //       {/* <h2>
    //         We want to prepare our next generation of Muslim leadership at local
    //         and national levels to represent the under represented and
    //         underserved Muslim community.
    //       </h2> */}

    //       <Link to="/contact2" >
    //         <button className=" mb-4 mt-4 bounce-button">
    //           Register yourself &nbsp; <BsArrowRight />{" "}
    //         </button>
    //       </Link>
    //     </div>

    //     <div
    //       className="col-md-6 no-res-col hero1-img"
    //       style={{ paddingLeft: "0px" }}
    //     >
    //       <img
    //         src="assets/american-poling.jpg"
    //         alt=""
    //         className="w-100"
    //         data-aos="flip-right"
    //         style={{
    //           height:'100%'
    //         }}
    //       />
    //     </div>
    //   </div>
    // </div>
  );
}

export default Hero1;
