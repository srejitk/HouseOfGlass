import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="glass-footer">
    <div className="glass-footer-content flex-mid-center">
      <span className="material-icons md-48 icon--footer text--center ">favorite</span>
      <p className="body-1 text--footer text--center">House Of Glass was made with the intention of creating a
        customer friendly store
        which put the users satisfaction first. We hope you liked it. Feel free to connect and provide
        suggestions from the below means. </p>
      <div className="nav__links__container">
        <ul className="nav__links__ul">
          <Link to="https://www.twitter.com/srejitk" target="__blank" className="footer nav__links nav-links-footer">Twitter</Link>
          <Link to="https://www.github.com/srejitk" target="__blank" className="footer nav__links nav-links-footer">Github</Link>
          <Link to="https://www.linkedin.com/srejitk" target="__blank" className="footer nav__links nav-links-footer">LinkedIn</Link>
        </ul>
      </div>
    </div>
  </footer>
  )
}
