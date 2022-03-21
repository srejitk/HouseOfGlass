import {Link} from "react-router-dom"
import React from 'react'

export default function NotFound() {
  return (
    <div>
        <h1>ERROR 404</h1>
        <h3>Page Not Found</h3>
        <h3>Head back to <Link to="/">Home</Link></h3>
    </div>
  )
}
