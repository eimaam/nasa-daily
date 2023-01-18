import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav>
      <div>
        <h2>eimaam</h2>
      </div>
      <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href="https://api.nasa.gov/index.html#apply-for-an-api-key">API Doc</a></li>
          <li><Link to="/photooftheday">TODAY</Link></li>
          <li><Link to="">About</Link></li>
          <li><a href="https://www.github.com/eimaam/nasa-daily">Source Code</a></li>
      </ul>
      <div>
        <button>logOut</button>
      </div>
    </nav>
  )
}
