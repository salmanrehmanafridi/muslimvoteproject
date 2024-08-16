import React, { useEffect, useRef, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { GoDotFill } from "react-icons/go";
function Form() {
  const [show, setShow] = useState(true);
  const [timer, setTimer] = useState("00:00:00");
  const timerRef = useRef(null);
  const electionDate = new Date("2024-11-08T00:00:00Z");

  const getTimeRemaining = (endTime) => {
    const total = Date.parse(endTime) - Date.parse(new Date());

    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    // Calculate months assuming an average month length of 30.44 days
    const months = Math.floor(days / 30.44);

    return {
      total,
      months,
      days: days % 30,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (endTime) => {
    let { total, months, days, hours, minutes, seconds } =
      getTimeRemaining(endTime);
    if (total >= 0) {
      setTimer(
        (months > 9 ? months : "0" + months) +
          ":" +
          (days > 9 ? days : "0" + days) +
          ":" +
          (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      startTimer(electionDate);
    }, 1000);
  };

  useEffect(() => {
    if (show) {
      clearTimer();
      return () => clearInterval(timerRef.current);
    }
  }, [show]);
  return (
    <>
      <Modal
        show={show}
        size="lg"
        centered
        aria-labelledby="contained-modal-title-vcenter"
        onHide={() => setShow(!show)}
        className="modal-bg"
      >
        <Modal.Header>
          <Modal.Title className="countdown-title">
             Election is Just Around the Corner!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "space-around",
              }}
              className="countdown-modal-container"
            >
              <div className="countdown-text">
                <span className="countdown-days">{timer.split(":")[0]}</span>{" "}
                Months
              </div>
              <div
                style={{
                  alignSelf: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <GoDotFill color="#ff3737" size={30} />
                <GoDotFill color="#ff3737" size={30} />
              </div>

              <div className="countdown-text">
                <span className="countdown-days">{timer.split(":")[1]}</span>{" "}
                Days
              </div>
              <div
                style={{
                  alignSelf: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
                className="dot-icons-res"
              
              >
                <GoDotFill color="#ff3737" size={30} />
                <GoDotFill color="#ff3737" size={30} />
              </div>
              <div className="countdown-text">
                <span className="countdown-days">{timer.split(":")[2]}</span>{" "}
                Hours
              </div>
              <div
                style={{
                  alignSelf: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
                className="modal-dot-icons dot-icons-res"
              
              >
                <GoDotFill color="#ff3737" size={30} />
                <GoDotFill color="#ff3737" size={30} />
              </div>
              <div className="countdown-text">
                <span className="countdown-days">{timer.split(":")[3]}</span>{" "}
                Minutes
              </div>
              <div
                style={{
                  alignSelf: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
                className="dot-icons-res"
              
              >
                <GoDotFill color="#ff3737" size={30} />
                <GoDotFill color="#ff3737" size={30} />
              </div>
              <div className="countdown-text">
                <span className="countdown-days">{timer.split(":")[4]}</span>{" "}
                Seconds
              </div>
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Form;
