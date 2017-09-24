import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className="card card-inverse not-found">
      <div className="card-block">
        <h3 className="card-title">
          Page not found!
        </h3>
        <p className="card-text">
          The requested page was not found.
        </p>
        <Link className="btn btn-primary" to="/">
          Return to homepage
        </Link>
      </div>
    </div>
  )
}

export default PageNotFound
