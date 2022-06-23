import React from 'react'

function Header() {
  return (<>
    <div className="header">
      <div className="logomedi">
        <h3>MEDI<span>CARE+</span></h3>
      </div>
      <div className="navbarmedi">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">ABOUT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">SERVICE</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">NEWS</a>
              </li>
              <button>
                CONTACT
              </button>
            </ul>

          </div>
        </nav>
      </div>



    </div>

    <br />
    <div className="headmain">
      <div className="headcon">
        <h5>Welcome to MediCare+ Clinic</h5>
        <h1>Best Specialists</h1>
        <h6>We are on the leading edge of cancer care. Providing the full continuum of cancer treatments and supportive care services in a single convenient location.</h6>
        <div className="buttons"><button className='but1'>Make an Appointment</button><button className='but2'>Departments</button>
        </div>

      </div>
      <div className="headcon2">
        <div className="abc"></div>
      </div>
    </div>

    
  </>
  )
}

export default Header