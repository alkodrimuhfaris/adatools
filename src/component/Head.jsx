import React from 'react'

export default function Head(props) {
  return (
    <div className="top-h d-flex">
      {/* <div className={props.isMobile ? "brand-head" : "d-none"}>
        <img src="/assets/logo_gram.png" alt="logo" />
      </div> */}
      <div className="icon-cam centering-element">
        <i className="material-icons">photo_camera</i>
      </div>
    </div>
  )
}
