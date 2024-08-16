import React from "react";
import Contact3 from '../utils/Contact3'

function PartnerWithUs() {
  return (
    <>
      <div className="container-fluid voter-heading">
        <div className="row row1">
          <div className="col-md-12 ">
            <h1 className="">Partner <br /> With Us</h1>

          </div>
        </div>
      </div>

      <div className="container pb-5 partner-content">
      <div className="row">
          <div className="col-md-12">
            <Contact3/>

            <h1 style={{
                fontWeight: "800",
                fontFamily: "raleway",
                color: "#233F8A",
                margin: "20px 0px",
                fontSize: "35px",
              }}>What we expect from our partners</h1>
            <ul>
              <li>
                Believe democracy should be accessible to all and are ready to
                engage their staff, clients, members, and community in the
                democratic process
              </li>
              <li>
                Would benefit from direct assistance in planning and
                implementing voter engagement activities
              </li>
            </ul>

            <h1 style={{
                fontWeight: "800",
                fontFamily: "raleway",
                color: "#233F8A",
                margin: "20px 0px",
                fontSize: "35px",
              }}>What our partners can expect from us</h1>
            <ul>
              <li>
                <strong>Direct Strategic Support –</strong> Gain access to
                expert knowledge on  nonpartisanship, voter engagement, engaging
                with candidates, and issue advocacy to build a strategic plan
              </li>
              <li>
                <strong>Personalized Webinars – </strong> Receive webinars
                tailored specifically to your needs
              </li>
              <li>
                <strong>In-Person Training –</strong> Our expert staff can
                provide interactive, personalized training sessions to your
                organization and affiliates
              </li>
              <li>
                <strong>Customized Toolkits and Resources – </strong> We can
                develop voter engagement toolkits or personalized resources that
                fit the needs of your organization.Toolkits and resources can
                cover any topics related to voter and candidate engagement or
                staying nonpartisan.
              </li>
              <li>
                <strong>Publicity for Your Organization –</strong> Your logo
                will be featured prominently on our website and you will be
                given the opportunity to be highlighted across our
                communications platforms
              </li>
              <li>
                <strong>Connect with Civic Nonprofit Leaders –</strong> Joining
                our network affords you the opportunity to connect with other
                voter engagement leaders committed to improving democracy.
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h4>
              We integrate voter engagement into their ongoing activities and
              services. In doing so, we work to promote higher voter and civic
              participation, especially among populations new to the process or
              with a recent history of lower voter turnout.
            </h4>
            <h4>
              We know that you are unique and ideally positioned to effectively
              engage yourself and the communities you serve in democracy. We
              want to help you get there.
            </h4>
            <h4>
              We want to make sure that you have the information you need, your
              staff needs, and your community needs to play a key role in
              promoting equity in democracy for all.
            </h4>
            <h4>
              We are always seeking national, state, or regional service-based
              nonprofits to join us as partners in voter engagement. Now is the
              perfect time to join us in making sure democracy is accessible to
              everyone.
            </h4>
          </div>
        </div>
      

        <div className="row mt-5">
          <div className="col-md-7">
            <h1 style={{
                fontWeight: "800",
                fontFamily: "raleway",
                color: "#233F8A",
                margin: "20px 0px",
                fontSize: "35px",
              }}>PARTNERS IN THE MOVEMENT</h1>
            <h5>Does this sound like your organization? <a href="mailto:info@muslimvotes.org">Partner with us</a></h5>
          </div>
          <div className="col-md-6">
            
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-2">
            <a href="https://brooklynemerge.org/">
              <img
                src="https://img1.wsimg.com/isteam/ip/d46b8e2c-cafc-49af-9420-d21d2fd27642/7578FFF9-2FD7-4129-876A-B4125DD1331B.png/:/rs=w:400,h:400,cg:true,m/cr=w:400,h:400/qt=q:95"
                alt=""
                className="w-75"
              />
            </a>
          </div>
          <div className="col-md-2">
            <a href="https://emgageusa.org/">
              <img
                src="https://emgageusa.org/wp-content/themes/emgage/images/header_Logo.png"
                alt=""
                className="w-100 mt-5"
              />
            </a>
          </div>
          <div className="col-md-2 text-center">
            <a href="https://payousa.org/">
              <img
                src="https://payousa.org/wp-content/uploads/2016/11/payo.png"
                alt=""
                className="w-75"
              />
            </a>
          </div>

          <div className="col-md-2">
            <a href="https://www.masjidquba.net/services/community">
              <img
                src="https://lirp.cdn-website.com/a03ccde6/dms3rep/multi/opt/Logo-480w.png"
                alt=""
                className="w-100 mt-3"
              />
            </a>
          </div>

          <div className="col-md-2">
            <a href="http://www.apnabrooklyn.com/">
              <img
                src="http://www.apnabrooklyn.com/wp-content/uploads/2018/06/apnacommunity-logo-001-TP-2x.png"
                alt=""
                className="w-100 mt-5"
              />
            </a>
          </div>
          <div className="col-md-2">
            <a href="https://www.peacechildrenacademy.org/">
              <img
                src="https://static.wixstatic.com/media/7adb0f_c9332a42f89a494c9026da4322a430ef~mv2.png/v1/fill/w_1475,h_252,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/7adb0f_c9332a42f89a494c9026da4322a430ef~mv2.png"
                alt=""
                className="w-100 mt-5"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default PartnerWithUs;
