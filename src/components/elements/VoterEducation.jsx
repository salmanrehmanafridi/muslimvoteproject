import React from "react";
function VoterEducation() {
  return (
    <>
      <div className="container-fluid voter-heading education">
        <div className="row">
          <div className="col-md-6 text-center">
            <img src="assets/image 19.svg" alt="" className="res-img" />
          </div>

          <div className="col-md-6 m-auto">
            <h1>VOTER EDUCATION</h1>
            <p>
              A critical component of Muslims Vote Project mission is to educate and empower
              newer immigrants to participate in the electoral process. By
              conveying culturally appropriate and translated messages and
              engaging trusted messengers and outlets, we can effectively engage
              this base of voters.
            </p>
          </div>
        </div>
      </div>
      <div className="container voter-text pt-5 pb-5">
        <div className="row">
          <div className="col-md-6 ">
            {/* <img src="assets/13.jpg" alt="" className="rounded w-100" /> */}
          </div>

          <div className="col-md-6 m-auto">
            <p>
              Muslims Vote Project Communications Program is a multi-pronged effort, focusing
              on not just mainstream media, but also paying attention to ethnic
              media. Through long-term partnerships, Muslims Vote Project provides ethnic press
              with more tools, access to research and data, and information on
              the elections that they may not previously have had the capacity
              to cover. Their increased reporting and coverage of elections, on
              the other hand, will directly impact communities that depend on
              ethnic media.
            </p>
          </div>
        </div>

        <div className="row mt-5 pt-5">
          <div className="col-md-6 m-auto">
            <p>
              Muslims Vote Project electorate has found that 48% of the Muslim population consumes
              ethnic media, a number that rises to 55% in Muslim communities that
              are above fifty years of age. Thus, building rapport and an
              infrastructure with ethnic media is crucial to ensure that our
              communities are receiving accurate information on how to vote and
              how to follow the elections.
            </p>
            <p>
              This infrastructure has allowed Muslims Vote Project to purchase ads in ethnic
              media with our election protection work and specifically to
              advertise our election hotline, available in several languages.
              Building this permanent infrastructure not only increases the
              bandwidth of ethnic media coverage of elections, but also reaches
              more of our community who may be limited English proficient, to
              learn how to register to vote and the various ways one can vote.
            </p>
          </div>
          <div className="col-md-6">
            {/* <img src="assets/12.jpg" alt="" className="rounded w-100" /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default VoterEducation;
