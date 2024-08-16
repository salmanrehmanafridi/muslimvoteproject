import React, {  useState } from "react";
// import { getFirestore } from "firebase/firestore";
// import { app } from "../../db/Config";
// import {  setDoc, doc } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";
import { Loading } from "notiflix";
import { Modal } from "react-bootstrap";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function SubscriptionForm() {
  const [fname, setFname] = useState("");
  const [number, setNumber] = useState(0);
  const [birthday, setBirthday] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [err, setErr] = useState("");


  // const navigate = useNavigate();

  // const db = getFirestore(app);
  const submitData = () => {
    if (!fname.trim() || !number.trim()) {
      setErr("Please fill all the fields");
      return;
    }

    // setDoc(doc(db, "Subscription Form", fname), {
    //     FirstName: fname,
    //     Phone: number,
    //     Birthday:birthday,
    // })
    //   .then(() => {
    //     Loading.circle();
    //     setTimeout(() => {
    //       Loading.remove();
    //       //   Notiflix.Report.success(
    //       //     "Your campaign has been approved",
    //       //     "Salam! This is Salman from the Muslim Votes Project(MVP) working to involve more young muslims in local politics.",
    //       //     "Thanks"
    //       //   );
    //       handleShow();
    //     }, 2000);
    //     setErr("");
    //     setFname("");
    //     setNumber("");
    //     navigate("/volunteer");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    Loading.circle();
    setTimeout(() => {
      Loading.remove();
      //   Notiflix.Report.success(
      //     "Your campaign has been approved",
      //     "Salam! This is Salman from the Muslim Votes Project(MVP) working to involve more young muslims in local politics.",
      //     "Thanks"
      //   );
      handleShow();
    }, 2000);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <label htmlFor="" className="label">
              first name*
            </label>
            <input
              type="text"
              name=""
              id=""
              className="w-100 form-control"
              placeholder=""
              required
              onChange={(e) => setFname(e.target.value)}
            />
            <label htmlFor="" className="label">
              phone number*
            </label>
            <input
              type="number"
              name=""
              id=""
              className="w-100 form-control"
              onChange={(e) => setNumber(e.target.value)}
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            />
            <label htmlFor="" className="label">
              Birthday*
            </label>
           
             <ReactDatePicker selected={birthday} onChange={(date)=> setBirthday(date)} className="form-control"
             placeholderText="mm/dd/yyyy (example: 06/12/2022)"
             dateFormat={"dd/MM/yyyy"}
             showYearDropdowns
             scrollableYearDropdown
             yearDropdownItemNumber={50}
             />
            <input type="checkbox" />
            <label htmlFor="" className="label mx-2 checkbox-text">
              Terms and Conditions
            </label>
            <p className="subcription-terms"> I agree to receive promotional messages sent via on and this
              agreement lant a condition of any purchase. I also agree to Tea of
              Sanics and Prac Policy 4 Mags Month. Msg & Data rates may apply</p>
            <p className="text-danger">{err}</p>
            <button
              onClick={submitData}
              className="btn btn-outline-secondary mt-3 w-100"
              style={{ backgroundColor: "#7A74FF", color: "#fff" }}
            >
              Subscribe Now
            </button>
            <p className="text-center mt-4">SMS marketing powered by <a href="https://simpletexting.com/">SimpleTexting</a></p>
          </div>

          {/* </form> */}
        </div>
      </div>

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-campaign">
          <img
            src="assets/texting.png"
            className="w-25 text-center d-block m-auto"
            alt="image"
          />
          <h1>Your campaign has been approved!</h1>
          <p>
            In an effort to prevent spam, the first couple of messages from new
            accounts-and occasionally other messages-undergo a quick review from
            our compliance monitoring system. Your campaign was approved If you
            scheduled it for later, it will send at the time and date you
            selected. If you chose to send it immediately, your message is on
            its way to subscribers right now!
          </p>
          <h2>Campaign name:</h2>
          <h4>Muslim Vote Project Youth</h4>
          <h2>Message:</h2>
          <h4>
            Salam! This is Salman from the Muslims Vote Project (MVP) working to
            involve more young Muslims in local politics. You've been selected
            for our Young Muslim Democratic Club. <br /> Register at{" "}
            <a href="https://cutt.ly/85wmXdb">https://cutt.ly/85wmXdb</a>
            <br /> Follow us on Insta.{" "}
            <a href="https://cutt.ly/85wmPzm">https://cutt.ly/85wmPzm</a> <br />
            Twitter: <a href="https://cutty/15wmFxS">https://cutty/15wmFxS</a>
          </h4>
          <h2>Sent to:</h2>
          <h4>Brooklyn Emerge, Youth District-40, Youth District-45</h4>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default SubscriptionForm;
