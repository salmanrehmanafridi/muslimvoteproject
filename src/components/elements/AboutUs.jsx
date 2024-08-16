import React from "react";

function AboutUs() {
  return (
    <>
      <div className="container-fluid voter-heading">
        <div className="row row1">
          <div className="col-md-12 ">
            <h1 className="">About Us</h1>
          </div>
        </div>
      </div>
      <div className="container pt-5 pb-5 about-text">
        <div className="row">
          <div className="col-md-6">
            <p>
              Muslim Vote Project (MVP) is a nonprofit 501(c) dedicated to
              engaging, educating, and empowering Muslim communities to
              strengthen their voices and create impact in every election. <br /><br /> For
              years, MVP has been at the forefront of a rising movement to
              ensure Muslims are represented and heard, leading to historic
              voter turnout and advancing equity for Muslim communities. <br /> <br /> As
              Muslim Vote Project continues to grow, we would like to remind our
              members, friends, partners and supporters that our objectives go
              beyond just voting in principle. Our key priorities include:
            </p>
            <h3
              style={{
                fontWeight: "800",
                fontFamily: "raleway",
                color: "#233F8A",
                margin: "20px 0px",
                fontSize: "35px",
              }}
            >
              Investing in our youth:
            </h3>

            <ul>
              <li>
                Encouraging a more cooperative environment between diverse
                communities and organizations
              </li>
              <li>
                Establishing a stronger institutional presence for Muslims in
                America
              </li>
              <li>Providing sound information to the public</li>
              <li>Making America a better place for all. </li>
            </ul>
            <p>
              These are our higher objectives here at MVP. They revolve around
              empowering and building our human resources to effect positive
              change in our community. All the roadmaps we draw, whether
              purchasing a building, opening a school, or planning an event,
              lead to one destination: the development, refinement and growth of
              our human resources.
            </p>
            <p>
              We invite you to check out our core departments: Youth, Tarbiya,
              and Outreach. These three departments represent the structure and
              methodology by which MVP seeks to develop our human resources.
              Please join us by contributing to this mission in any way you can.
              Your support of any MVP project, program, or initiative will
              ultimately benefit these three departments and their mission. Your
              time and commitment keeps us moving.
            </p>
            <p>
              Serving our community’s needs – like funding for good schools for
              our children. Fair districting gives us the opportunity to come
              together and advocate for the future of our community and our
              children. By joining together to demand that we are included in
              the process of drawing fair district lines, we can ensure we have
              the opportunity to elect leaders who will truly represent us.
              Speak out for your community, your family, and your future today!
            </p>
          </div>

          <div className="col-md-6">
            {/* <img src="assets/about.jpg" alt="" className="w-100 rounded" /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
