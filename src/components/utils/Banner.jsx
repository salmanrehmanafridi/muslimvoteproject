import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter, FaTelegram} from 'react-icons/fa'

function Banner() {
  return (
    <div className="container-fluid baner-bg">

    <div className="container p-2" >
        <div className="row">
            <div className="col-md-12 text-end">
                <FaFacebook/>
                <FaInstagram/>
                <FaTwitter/>
                <FaTelegram/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Banner