import React from "react"

import "./bannerAbout.scss"

const BannerAbout = ({ picture }) => {
  return (
    <div className="bannerA">
      <img className="bannerA__img" src={picture} alt="Paysage, montagnes" />
      <div className="bannerA__background"></div>
    </div>
  )
}

export default BannerAbout