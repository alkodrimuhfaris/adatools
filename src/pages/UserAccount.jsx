import React from 'react'

export default function UserAccount() {
  return (
    <div className="body-body pb-5">

      <div className="container">
        <div className="top-search-title pt-4">
          <div className="text-white">
            <h6>OTHERS {'>'}
              <span className="text-blue ">
                USER ACCOUNT
              </span>
            </h6> 
            <p>User account</p>
          </div>
        </div>
        
        <div className="row mt-4 text-white user-card-wrapper">
          <div className="col-md-6 col-sm-12">
            <div className="card card-dark left">
              <div className="card-body text-center p-4">
                <h5 className="fw-bolder mb-3">CONNECT YOUR WALLET</h5>
                <p className="mb-3">Connect your wallet with your ADA Tools</p>
                <button className="button-blue mx-1 py-2 fw-bolder" >CONNECT</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="card card-dark right">
              <div className="card-body text-center p-4">
                <h5 className="fw-bolder mb-3">VERIFY YOUR WALLET</h5>
                <p className="mb-3">VERIFY your wallet with your ADA Tools</p>
                <button className="button-dark py-2 mx-1 fw-bolder" >VERIFY</button>
              </div>
            </div>
            <p style={{ color: 'grey' }}>By verifying your wallet we will validate the ownership of your wallet</p>
          </div>
        </div>
        
      </div>
    </div>

  );
}
