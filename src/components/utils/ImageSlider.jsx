import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const ImageSlider = () => {
  const images = [
    "assets/image3.svg",
    "assets/image4.svg",
    "assets/5.svg",
  ];

  return (
    <Slide autoplay={false}>
      <div className="each-slide-effect">
        <div
          style={{
            backgroundImage: ` url(${images[0]})`,
            backgroundColor: "#2E639E",
            // background-blend-mode: multiply;
          }}
          className="slider-bg-img"
        >
          <span>
            We want an America where<span className="span1">Muslims</span> can
            become City Council, Mayors, Member of Congress and US President.
          </span>
        </div>
      </div>
      <div className="each-slide-effect">
        <div
          style={{
            backgroundImage: ` url(${images[1]})`,
            backgroundColor: "#2E639E",
          }}
        >
          <span>
            We envision to prepare our next generation of <span className="span1">Muslim leadership</span> at
            local and national levels to represent the under-represented &
            underserved <span className="span1">Muslim</span> Community.
          </span>
        </div>
      </div>
      <div className="each-slide-effect">
        <div
          style={{
            backgroundImage: ` url(${images[2]})`,
            backgroundColor: "#2E639E",
          }}
        >
          <span>We want to get the <span className="span1">Muslim Youth</span> the chair on table where decisions are made.</span>
     
        </div>
      </div>
{/* 
      <div className="each-slide-effect">
        <div
          style={{
            backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6) ),url(${images[4]})`,
          }}
        >
          <span>WE ARE A NEW COALESCING FORCE</span>
          <p>
            We remain a uniting force in the movement,{" "}
            <br className="line-break" /> coalescing together leading voices and
            organizations <br className="line-break" /> to collaborate on
            initiatives that
            <br className="line-break" /> bring us closer to the future we all
            envision.
          </p>
        </div>
      </div> */}
    </Slide>
  );
};

export default ImageSlider;
