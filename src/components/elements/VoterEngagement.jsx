import React from "react";
// import BottomBanner from "./BottomBanner";
import {BsArrowRight} from 'react-icons/bs'
function VoterEngagement() {
  return (
    <>
      <div className="container-fluid voter-heading">
        {/* <div className="row row1">
          <div className="col-md-12 ">
            <h1 className="">
              Voter <br /> Engagement
            </h1>
          </div>
        </div> */}
    
      </div>
      <div className="container voter-text pt-5 pb-5">
      <div className="row" style={{background:'#fff'}}>
          <div className="col-md-5 m-auto engage">
            {/* <img src="assets/vector.svg" alt="" /> */}
            <h1>VOTER ENGAGEMENT</h1>
            <p>
              Muslim Vote Project Alliance for Civic Engagement (ACE) is a national
              network of local and state-anchored partners who engage Muslims 
              communities to conduct grassroots voter contact and education
              programs.
            </p>
          </div>
          <div className="col-md-7">
            {/* <img src="assets/picture.svg" alt="" className="w-100" /> */}
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12">
            <p>
            <strong> Voter engagement </strong> is a critical part of our work because it not
              only empowers the people and the communities we serve, but it also
              helps us further our missions.
              Voter engagement makes us relevant both during and after
              elections, helping to make us part of critical public policy
              discussions and allowing us to weigh in on our issues. Voting is
              associated with personal agency, cohesive communities, more
              effective advocacy, and more.
             
            </p>
          </div>

      
        </div>

        <div className="row mt-4">
        <div className="col-md-6 ">
            <img src="assets/2.jpeg" alt="" className="rounded w-100" />
          </div>
          <div className="col-md-6">
           <p>
              Our grassroots voter contact and education program works with and
              provides direct funding to our network of community-based partners
              to implement our multitouch voter engagement program that aims to
              contact voters through phone and text banking, multiple rounds of
              targeted translated mailers, coordination of door-to-door
              canvassing, and investments in ethnic media, targeted social media
              advertisements and content.
            </p>

            <p>
              By establishing and sustaining a culture of voting among
              voters, both old and new, <span style={{color:"blue", fontWeight:'800'}}>
              we are working to give our communities a
              stronger political voice, so that the issues we care about are
              heard by politicians and elected officials.
                </span> 
            </p>
            <a href="/contact" >
            <button className=" custom-btn">
              Join The Movement <BsArrowRight className="mx-2" />
            </button>
            </a>
          </div>
        </div>
      </div>
      {/* <BottomBanner /> */}
    </>
  );
}

export default VoterEngagement;
