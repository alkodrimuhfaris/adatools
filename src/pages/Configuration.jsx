import React from 'react'
import Switch from "react-switch"
import { Dropdown } from 'react-bootstrap'

export default function Configuration() {

  const [pairMove, setPairMove] = React.useState(false)
  const [notif, setNotif] = React.useState(false)

  const handleChangeMove = () => {
    setPairMove(!pairMove)
  }
  const handleChangeNotif = () => {
    setNotif(!notif)
  }

  return (
    <div className="body-body pb-5">

      <div className="container">
        <div className="top-search-title pt-4">
          <div className="text-white">
            <h6>OTHERS {'>'}
              <span className="text-blue ">
                CONFIGURATION
              </span>
            </h6> 
            <p>Parameters to configure ADA Tools</p>
          </div>
        </div>
        
        <div className="row mt-4 text-white user-card-wrapper">
          <div className="col-md-4 col-sm-12"></div>
          <div className="col-md-4 col-sm-12">
            <div className="card card-dark">
              <div className="card-body">
                <div className="centering-element">
                  <h5 >CONFIGURABLE <span className="fw-bolder">PARAMETERS</span> </h5>
                </div>
                <hr />

                <div className="px-3">
                  <div className="d-flex mb-4 justify-content-between">
                    <div className="con-left">
                      <h6>Disable Hot Pairs Movement</h6>
                      <p>Enable / Disable</p>
                    </div>
                    <div className="con-right">
                      <Switch 
                        onChange={handleChangeMove} 
                        checked={pairMove} 
                        uncheckedIcon={false}
                        checkedIcon={false}
                        onColor="#86d3ff"
                        onHandleColor="#030207"
                        height={20}
                        width={40}
                      />
                    </div>
                  </div>

                  <div className="d-flex mb-4 justify-content-between">
                    <div className="con-left">
                      <h6>Browser Notifications</h6>
                      <p>Enable / Disable Notifications</p>
                    </div>
                    <div className="con-right">
                      <Switch 
                        onChange={handleChangeNotif} 
                        checked={notif} 
                        uncheckedIcon={false}
                        checkedIcon={false}
                        onColor="#86d3ff"
                        onHandleColor="#030207"
                        height={20}
                        width={40}
                      />
                    </div>
                  </div>

                  <div className="d-flex mb-4 justify-content-between">
                    <div className="con-left">
                      <h6>Select Languange</h6>
                      <p>Select Interface Languange</p>
                    </div>
                    <div className="con-right">
                    <Dropdown  size='sm' >
                      <Dropdown.Toggle id="dropdown-basic" className="dropdown-btn">
                        English
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Indonesia</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    </div>
                  </div>

                </div>


              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12"></div>
        </div>
        
      </div>
    </div>

  );
}
