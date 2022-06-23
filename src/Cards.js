import React from 'react'

function Cards() {
  return (
    <>
    <div className="medium">
      <div className="mediumtop">
        <h1>Our Services</h1>
        <h5>We provide the most full medical services, so every person could<br/> heave the oppurtunity to receive qualitative medical help.</h5>
      </div>
      <div className="mediumcenter">
        
        <div className="cardmedi">
          <div className="teeth tlbs"></div>
          <h3 className="cardss">Dental Care</h3>
          <h5 className='learn lear'>Learn More <span>></span></h5>
        </div>
        <div className="cardmedi">
        <div className="lungs tlbs"></div>
          <h3 className="cardss">Pulmonary</h3>
          <h5 className='learn lear'>Learn More <span>></span></h5>
          </div>
          <div className="cardmedi">

            <div className="brain tlbs"></div>
          <h3 className="cardss">Neurological</h3>
          <h5 className='learn lear'>Learn More<span>></span></h5>
          </div>

          <div className="cardmedi">
          <div className="sheet tlbs"></div>
          <h3 className="cardss">Prediatrics</h3>
          <h5 className='learn lear'>Learn More <span>></span></h5>
          </div>

      </div> 

    </div> 
    </>
  )
}

export default Cards