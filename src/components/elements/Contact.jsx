import React from "react";
import Contact1 from "../utils/Contact1";

function Contact() {

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-12">
          <h1 className=" text-center"
            style={{fontFamily:'raleway', fontSize:'35px', fontWeight:'800', color:'#00438e'}}
          
          >
            Get Involved
          </h1>
        </div>

        <Contact1/>
      </div>

    </div>
  );
}

export default Contact;
