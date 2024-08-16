import React from "react";
import { BsArrowRight } from "react-icons/bs";
function Section1() {
  return (
    <div className="container-fluid sec1-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-5 ">
            {/* <img src="assets/2.svg" alt="" className="w-100" /> */}
            <img src="assets/111.jpg" alt="" className="w-100" data-aos="fade-down"/>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6 m-auto">
            <div className="">
              <h1 data-aos="fade-down">
                Together We <br /> Can Do It.
              </h1>
              {/* <p>as a community</p> */}
              <h2  className='color-text text-start' data-aos="fade-left">
              We can not do this huge task without your help. We need to get together and part of the movement
            to organise and mobilize the muslim community. <br />  
            </h2>
         
              <a href="/update-info">
                <button
                  className=" mt-3"
                  style={{ textDecoration: "none" }}
                  data-aos="zoom-in"
                >
                  Update Your Voter Info <BsArrowRight size={27} className="mx-2" />
                </button>
              </a>
              <h2 className="mt-3">If you have not registered to vote please register.</h2>
              <a href="/contact2">
                <button
                  className=" mt-3"
                  style={{ textDecoration: "none" }}
                data-aos="zoom-in"
                >
                  Register To Vote <BsArrowRight size={27} className="mx-2" />
                </button>
              </a>
        
          
            </div>
          </div>
        </div>

        {/* <div className="row mt-5 pt-5">
          <div className="col-md-6 m-auto">
            <h2>
              Vote for your community. Muslim communities tend to face
              particularly challenging issues: racial profiling by law
              enforcement, gentrification and housing affordability, unsafe
              workplaces, segregated public schools, immigration raids. These
              issues will only be addressed equitably when muslim voices are at
              the table. That means turning out to vote, and supporting
              candidates that understand the community and the issues we all
              face.
            </h2>
          </div>
          <div className="col-md-1">
            <div className="vertical-line"></div>
          </div>
            <div className="col-md-5">
            <h2>
              Because if you don’t, others will. Maybe you’re not that into
              politics but guess what? Your boss is. Your landlord is. Your
              insurance company is. And every day they’re using political power
              to keep your pay low, raise your rent, and deny you coverage. When
              you don’t vote, decisions will get made that affect you, but you
              won’t have a say.
            </h2>
            </div>
        </div> */}
      </div>
    </div>
  );
}

export default Section1;
