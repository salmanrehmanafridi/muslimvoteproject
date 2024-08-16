import React from 'react'

function Mission() {
  return (
    <> 
    <div className="container-fluid voter-heading">
        <div className="row row1">
            <div className="col-md-12 ">
                <h1 className=''>Mission & <br /> Vision</h1>
            </div>
        </div>
        </div>

        <div className="container voter-text pt-5 pb-5 ">
            <div className="row">
                <div className="col-md-6 m-auto">
                    <h1 style={{
                fontWeight: "800",
                fontFamily: "raleway",
                color: "#233F8A",
                margin: "20px 0px",
                fontSize: "35px",
              }}>Mission</h1>
                    {/* <p>To foster the development of the Muslim community, interfaith relations, civic engagement, and better understanding of Islam.</p> */}
<p>Organizing and mobalizing the muslim community to take active part in the political process NYC and claim 
    their power by sitting on the table where decisions are made.

</p>
                    <h1 style={{
                fontWeight: "800",
                fontFamily: "raleway",
                color: "#233F8A",
                margin: "20px 0px",
                fontSize: "35px",
              }}>Vision</h1>
                    {/* <p>We envisage communities are empowered, social obligations are fulfilled. To meet the infrastructure and staffing needs that can provide education and health facilities, alas halal meals in every school of the district.</p> */}
                <p>We want an America where muslims can become City Council, Mayors, Member of Congress and US Presidents. 

                </p>
                </div>
                <div className="col-md-6">
                    <img src="assets/111.svg" alt="" className='w-100 rounded'/>
                </div>
            </div>
        </div>
    </>

  )
}

export default Mission