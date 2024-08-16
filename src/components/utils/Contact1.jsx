import React, { useState } from "react";
// import { getFirestore } from "firebase/firestore";
// import { app } from "../../db/Config";
// import {  setDoc, doc } from "firebase/firestore";
import  {Spinner } from 'react-bootstrap'


function Contact1() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(0);
  const [err, setErr] = useState('');

  const [loader, setLoader] = useState(false);


  // const db = getFirestore(app);
  const submitData = () => {
    if (!fname.trim() || !email.trim() || !number.trim() || !lname.trim() ) {
      setErr("Please fill all the fields");
        return
    }

    // setDoc(doc(db, "Get invloved", fname), {
    //   FirstName: fname,
    //   LastName: lname,
    //   Email: email,
    //   Phone: number,
    //   // Age: age,
    // })
    //   .then(() => {
    //     setLoader(true);
    //     setTimeout(() => {
    //       setLoader(false);
    //     }, 2000);
    //   })
    //   .then(() => {
    //     // navigate("/contact4");
    //     alert("Your response is submitted")
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    setLoader(true)
    alert("Your response is submitted")
  };

  return (
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
            last name*
          </label>
          <input
            type="text"
            name=""
            id=""
            className="w-100 form-control"
            placeholder=""
            required
            onChange={(e) => setLname(e.target.value)}
          />
          <label htmlFor="email" className="label">
            email*
          </label>
          <input
            type="text"
            name=""
            id=""
            required
            className="w-100 form-control"
            placeholder=""
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="" className="label">
            phone number*
          </label>
          <input
            type="text"
            name=""
            id=""
            className="w-100 form-control"
            onChange={(e) => setNumber(e.target.value)}
          />
        <p className="text-danger">{err}</p>
          <button
            onClick={submitData}
            className="btn btn-outline-secondary mt-3 w-100"
            style={{ backgroundColor: "#7A74FF", color: "#fff" }}
          >
                    {loader && (
                      <Spinner/>
          )}
            {!loader && <span> Submit</span>}
          </button>
        </div>

        {/* </form> */}
      </div>
    </div>
  );
}

export default Contact1;
