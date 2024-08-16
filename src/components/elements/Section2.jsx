import React from "react";
import { BsArrowRight } from "react-icons/bs";
function Section1() {
  return (
    <div className="container-fluid sec2-bg pt-5 pb-5 ">
      <div className="container ">
        <div className="row">
          <div className="col-md-6 m-auto">
            <div className="">
              <h1
                style={{ fontSize: "76px", fontWeight: "800" }}
                className="mb-0"
                data-aos="fade-down"
              >
                Get Involved:
              </h1>
              <h2 className="color-text vlounter " data-aos="fade-left">
                <span className="span1" style={{ fontWeight: "900" }}>
                  By mobilizing{" "}
                </span>{" "}
                the power of{" "}
                <span className="span2" style={{ fontWeight: "900" }}>
                  volunteers
                </span>{" "}
                we can create an impact. Volunteers are essential to fulfilling
                our purpose to
                <span className="span2" style={{ fontWeight: "900" }}>
                  {" "}
                  strengthen
                </span>{" "}
                <span className="span1" style={{ fontWeight: "900" }}>
                  communities{" "}
                </span>{" "}
                and able to positively impact lives in significant and lasting
                ways.
              </h2>
            </div>

            <a href="/volunteer">
              <button className=" mb-4 mt-4">
                Become a Volunteer &nbsp; <BsArrowRight />{" "}
              </button>
            </a>
          </div>
          {/* <div className="col-md-1"></div> */}

          <div
            className="col-md-6 "
            data-aos="fade-up"
            // data-aos-anchor-placement="center-center"
          >
            <img
              src="assets/business-conference.jpg"
              alt=""
              className="w-100"
              style={{
                height: '100%',
                objectFit: 'cover',
                borderRadius: '10px'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
