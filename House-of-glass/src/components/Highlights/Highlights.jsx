import React from 'react'
import { Link } from 'react-router-dom'
import "./Highlights.css"

export default function Highlights() {

  const highlightImages=[
    {img:"https://res.cloudinary.com/dkqrmlxlg/image/upload/v1648066517/House%20Of%20Glass/6_rwso2c.jpg"},
    {img:"https://res.cloudinary.com/dkqrmlxlg/image/upload/v1648066517/House%20Of%20Glass/7_hvctpt.jpg"},
{img:"https://res.cloudinary.com/dkqrmlxlg/image/upload/v1648066517/House%20Of%20Glass/8_sjopta.jpg"},
{img:"https://res.cloudinary.com/dkqrmlxlg/image/upload/v1648066517/House%20Of%20Glass/9_owecdk.jpg"}]
  return (
    <section className="glass-highlights">
    <div className="glass-highlights-title">
      <h4 className="header-4 m-1b">Brands</h4>
      <p className="subtitle-1 m-1b">Browse through the various brands available to us.</p>
      <button className="btn btn--link btn--rtl">
        <span className="material-icons">arrow_forward</span>
        <Link to="/Docs/Product-Listing.html">Browse more</Link>
      </button>
    </div>
    <div className="glass-highlights-container box-shadow br-12 flex-mid-center">
      {highlightImages.map((brands)=>{
        return (
          <div className="card card--vertical m-1r card--text--overlay box-shadow-2">
          <div className="card__cover cover--vertical image--responsive">
            <img src={brands.img} />
          </div>
        </div>
        )
      })}
    </div>
  </section>
  )
}
