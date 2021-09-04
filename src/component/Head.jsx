import React from 'react'

export default function Head(props) {
  return (
    <div className="top-h d-flex">
      {/* <div className={props.isMobile ? "brand-head" : "d-none"}>
        <img src="/assets/logo_gram.png" alt="logo" />
      </div> */}
      <div className="icon-cam centering-element">
        <img height="50%" src="/assets/image.png" alt="cam" />
      </div>
    </div>
  )
}
