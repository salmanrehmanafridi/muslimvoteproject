import React from "react";
import {BsArrowRight} from 'react-icons/bs'

function Partner() {
  return (
    <div className="container mb-5 pt-4 pb-5 mt-5 partner">
      <div className="row row-reverse">

        <div className="col-md-6 m-auto">
          <h1 className="res-text" data-aos="fade-down">Our Partners</h1>
          <p data-aos="fade-up">
            We have been joined by so many civic and local non profit organizations 
            who have been working to politically advanced the muslim community.

          </p>
          <a href="/becomepartner">
            <button  data-aos="zoom-in">Join our Civic table <BsArrowRight className="mx-1"/></button>
          </a>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5 ">
          <img src="assets/image19.svg" alt="" className="w-100 mb-4" style={{borderRadius:'12px'}}
          data-aos="zoom-in"
          />

        </div>
        {/* <div className="col-md-6 m-auto">
        <div className="logos">
          <div className="row">
            <div className="col-md-6 col-6">
            <a href="https://brooklynemerge.org/">
            <img
              src="https://img1.wsimg.com/isteam/ip/d46b8e2c-cafc-49af-9420-d21d2fd27642/7578FFF9-2FD7-4129-876A-B4125DD1331B.png/:/rs=w:400,h:400,cg:true,m/cr=w:400,h:400/qt=q:95"
              alt=""
              className="w-25"
            />
            <p>Brooklen <br /> Emerge</p>
          </a>
           
          <a href="https://emgageusa.org/">
            <img
              src="https://emgageusa.org/wp-content/themes/emgage/images/header_Logo.png"
              alt=""
              className="w-25 "
            />
            <p>Emgage</p>
          </a>
          
          <a href="https://payousa.org/">
            <img
              src="https://payousa.org/wp-content/uploads/2016/11/payo.png"
              alt=""
              className="w-25"
            />
            <p>Pakistani American Youth Organization</p>
          </a>
            </div>

            <div className="col-md-6 col-6">
            <a href="https://www.masjidquba.net/services/community">
            <img
              src="https://lirp.cdn-website.com/a03ccde6/dms3rep/multi/opt/Logo-480w.png"
              alt=""
              className="w-25 mt-3"
            />
            <p>Masjid <br /> Quba</p>
          </a>
          <a href="http://www.apnabrooklyn.com/">
            <img
              src="http://www.apnabrooklyn.com/wp-content/uploads/2018/06/apnacommunity-logo-001-TP-2x.png"
              alt=""
              className="w-25 mt-5"
            />
            <p> Apna Brooklyn Community Centre</p>
          </a> 
          <a href="https://www.peacechildrenacademy.org/">
            <img
              src="https://static.wixstatic.com/media/7adb0f_c9332a42f89a494c9026da4322a430ef~mv2.png/v1/fill/w_1475,h_252,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/7adb0f_c9332a42f89a494c9026da4322a430ef~mv2.png"
              alt=""
              className="w-25 mt-5"
            />
            <p>Peace Children <br /> Academy</p>
          </a>
            </div>
          </div>
    
       
        </div>
      </div> */}
      </div>

    </div>
  );
}

export default Partner;
