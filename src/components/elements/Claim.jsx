import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import Section from "../utils/Section";

function Claim() {
  return (
    <div className="container-fluid">

    <div className="container pt-5 claim">
      <div className="row">
        <div className="col-md-12">
          <h1>CLAIM YOUR POWER</h1>
          {/* <p className="text-center">
            That Growth Comes The Power To Impact The Decisions Being Made At
            All Levels Of Government. If We Vote, Organize, And Fight For The
            Things We Believe In, With Our Numbers, We Can Effect Real Change.
           
          </p> */}
        </div>
      </div>

      <div className="row displayNone">
        <div className="col-md-12">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              // date="2011 - present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title caro-title">
                Fastest Growing Population
              </h3>
              <p className="caro-para">
                In the past two decades, Muslim Americans have become one of the
                fastest growing racial or ethnic groups in the United States
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date=""
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            >
              <h3
                className="vertical-timeline-element-title caro1-title"
                style={{ color: "#FF3737" }}
              >
                We Shape Elections
              </h3>

              <p className="text-start">
                The Muslim Americans electorate is a formidable community with
                the power to shape and influence elections down the ticket
                throughout the state New York.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date=""
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title caro-title">
                Representation Matters
              </h3>

              <p className="caro-para">
                The decisions made by policymakers and our representatives at
                all levels of government impacts our day-to-day lives – from how
                much funding local schools get to policies around crime
                prevention and gun safety.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date=""
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title caro1-title">
                Impactful Economic Strength
              </h3>

              <p className="text-start">
                The growth of MVP influence and power extends beyond the
                political sphere, into all aspects of American society.
              </p>
            </VerticalTimelineElement>
            {/* <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="April 2013"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              // icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Content Marketing for Web, Mobile and Social Media
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Online Course
              </h4>
              <p>Strategy, Social Media</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="November 2012"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              // icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Agile Development Scrum Master
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Certification
              </h4>
              <p>Creative Direction, User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2002 - 2006"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              // icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Bachelor of Science in Interactive Digital Media Visual Imaging
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Bachelor Degree
              </h4>
              <p>Creative Direction, Visual Design</p>
            </VerticalTimelineElement> */}
        
          </VerticalTimeline>
        </div>
      </div>
      </div>
      <Section/>
    </div>
  );
}

export default Claim;
