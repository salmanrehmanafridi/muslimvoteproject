import React from "react";
function Banner1() {
  return (
    <div className="container-fluid ban1-bg">
      <div className="row">
        <div className="col-md-12" data-aos="fade-up">
          <h1
            className="color-text text-center res-text"
            style={{ color: "#fff", fontSize: "48px", lineHeight: "56px" }}
          >
            There are{" "}
            <span className="span1" style={{ fontWeight: "900" }}>
              {" "}
              <span style={{ fontSize: "36px" }}>1.2</span> Million Muslims
            </span>{" "}
            in NYC. Out of $101 billion of NY State budget{" "}
            <span className="span1" style={{ fontWeight: "900" }}>
              we contribute <span style={{ fontSize: "34px" }}>$17</span>{" "}
              billion{" "}
            </span>
            towards it's revenue but how much of our taxes and revenue is coming
            back to our community is{" "}
            <span className="span1" style={{ fontWeight: "900" }}>
              negligible.{" "}
            </span>{" "}
            You can{" "}
            <span className="span1" style={{ fontWeight: "900" }}>
              change{" "}
            </span>{" "}
            it by actively participating in the political system and electing
            our own Muslim candidates into these offices.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Banner1;
