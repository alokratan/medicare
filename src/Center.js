import React from 'react'

function Center() {
  return (
    <>
    <div className='clinic'>
       <div className="clinicL">
        <h1>Clinic With Innovative</h1>
        <h6>We provide the most full medical services, so every person could heave the oppurtunity to receive qualitative medical help.</h6>
       <button>
        Learn More
       </button>
       </div>
       <div className="clinicR">
      <div className="clinicRL">
        <div className="clinicRLT clinicdoc"><div className="doctor"></div><h3>Qualified Doctors</h3></div>
        <div className="clinicRLB clinicdoc"><div className="ambul"></div><h3>24 Hours Service</h3></div>
      </div>
      <div className="clinicRR">
      <div className="clinicRRM clinicdoc"><div className="doctor2"></div><h3>Emergency Care</h3></div>
     
      </div>

       </div>
    </div>
    </>
  )
}

export default Center;