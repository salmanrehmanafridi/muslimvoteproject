import React, {useState} from 'react'
// import { getFirestore } from "firebase/firestore";
// import { app } from "../../db/Config";
// import {  setDoc, doc } from "firebase/firestore";

function Contact3() {
    const [address, setAddress ] = useState("");
    const [orgName, setOrgName] = useState("")
    const [number, setNumber] = useState(0);
  const [error, setError] = useState('');

    // const db = getFirestore(app);
    const submitData = () => {
      if(!number.trim() || !orgName.trim() || !address.trim() ){
        setError("Please fill the fields")
        return
      }
      // setDoc(doc(db, "Partners", orgName), {
      //   Address: address,
      //   Organization: orgName,
      //   Phone: number,
      // })
      //   .then(() => {
      //     alert('thanks');
      
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      alert('thanks');
    };
  return (
    <div className="container pt-5 pb-5">
        <div className="row">
        {/* <form style={{ width: "500px" }} className="m-auto"> */}
          <div className="col-md-12">
            <h1 className='text-center mb-5'
            style={{fontFamily:'raleway', fontSize:'35px', fontWeight:'800', color:'#00438e'}}
            >Join Our Civic Table</h1>
            <label htmlFor="email" className='label'>Organization Name*</label>
            <input
              type="text"
              name=""
              id=""
              className="w-100 form-control"
              placeholder=""
              onChange={(e) => setOrgName(e.target.value)}
            />
            <label htmlFor="" className='label'>Address*</label>
            <input
              type="text"
              name=""
              id=""
              className="w-100 form-control"
              placeholder=""
              onChange={(e) => setAddress(e.target.value)}
            />

           
        
            <label htmlFor="" className='label'>Phone Number*</label>
            <input
              type="text"
              name=""
              id=""
              className="w-100 form-control"
              onChange={(e) => setNumber(e.target.value)}
            />
            <p className='text-danger'>{error}</p>
          <button
            onClick={submitData}
            className="btn btn-outline-secondary mt-3 w-100"
            style={{backgroundColor:'#7A74FF',color:'#fff'}}
          >
            Submit
          </button>
          </div>

        {/* </form> */}
        </div>
    </div>
  )
}

export default Contact3