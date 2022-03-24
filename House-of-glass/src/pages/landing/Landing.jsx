
import "./Landing.css"
import React from 'react'
import Banner from "components/Banner/Banner"
import Categories from "components/Categories/Categories"
import Highlights from "components/Highlights/Highlights"


export default function Landing() {
  return (
<div className="container landing-container container-column">
    <Banner/>
    <Categories/>
    <Highlights/>
 </div>
  )
}
