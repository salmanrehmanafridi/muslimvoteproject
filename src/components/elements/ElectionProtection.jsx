import React from "react";

function ElectionProtection() {
  return (
    <>
      <div className="container-fluid voter-heading">
        <div className="row row1">
          <div className="col-md-12 ">
            <h1 className="">VOTER <br /> PROTECTION</h1>

          </div>
        </div>
      </div>
      <div className="container voter-text pt-5 pb-5 election">
        <div className="row">
          <div className="col-md-6">
            <p>
              Muslims Vote Project works to ensure that our communities’ voices and priorities
              are included in legislation related to voter protection, voting
              rights and other important civic issues.
            </p>
            <p>Our Election Protection initiative entails the following:</p>
          </div>
          <div className="col-md-6">
            <img src="assets/objects.svg" alt="" />
          </div>

          </div>
     
     </div>
     <div className="container-fluid election">
     
          <div className="row">
          <div className="col-md-5 col-12 ">
            <ul>
              <li className="mt-2">
                We manage the 1-888-MVP-VOTE election protection and information
                hotline to answer state-specific questions or concerns about
                voting for callers in the language they are most comfortable in.
              </li>
              <li className="mt-5" style={{color:'red'}}>
                Through coalition-building, we coordinate responses to key
                policy decisions, ensuring that senators and representatives
                know that Muslim communities have a stake in key legislative
                decisions.
              </li>
              <li className="mt-5">
                We gather, analyze and disseminate data and research to
                policy-makers and stakeholders, providing them with the
                data-based evidence they need to make informed decisions
                regarding Muslim communities. A key initiative for this is the
                bi-annual Muslim Voter Survey (MVS).
              </li>
            </ul>
          </div>
            <div className="col-md-1 text-center displayBlock">
              <img src="assets/style.svg" alt="" className="style"/>
            </div>
          <div className="col-md-6">
            <ul>
            <li className="mt-2 text-start ma" style={{color:'#FF3737'}}>
                Along with local and national partners, we provide assistance in
                making sure appropriate in-language materials are made available
                to local election officials as they expand language
                accessibility in their jurisdictions. Under section 203 of the
                Voting Rights Act, this language accessibility is required when
                specific language population criteria are met.
              </li>
              <li className="mt-5 text-start">
                We provide a platform for elected officials, experts and
                community organizers to convene and share their knowledge and
                insights on the legislative and civic issues impacting Muslim
                communities.
              </li>
              <li className="mt-5 text-start" style={{color:'#ff3737'}}>
                Through amplifying Muslim voices and sharing stories that show the
                impact of crucial voting legislation, we spread awareness on how
                policies and legislation on voting affects the everyday lives of
                Muslims.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ElectionProtection;
