import React from 'react'
import "./Banner.css"

export default function Banner() {
  return (
    <div className="hero-container grid col2x2">
      <div className="hero-text-container flex-top-left flex-column-wrap">
        <h3 className="header-1 hero-text">Looking for Specs? O-O
        We'll see to it.</h3>
        <h5 className="body-1 hero-desc">Clear. Clean. Aesthetic.</h5>
      </div>
      <div className="hero-img-container">
        <div className="hero-img">
          <img src="https://iridescent.netlify.app/assets/iris-holo.jpg"/>
        </div>
      </div>
    </div>
  )
}
