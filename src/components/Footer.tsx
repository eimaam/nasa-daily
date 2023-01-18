import React from 'react'

export const Footer = () => {
  return (
    <footer>
      <div className='footer--items'>
        <div>
            <h2>NASA DAILY</h2>
        </div>
        <div className='mid'>
          <ul>
              <li>Privacy Doc.</li>
              <li>NASA</li>
              <li>Officials</li>
              <li>API Documentation</li>
          </ul>
          <div>
            <h3>Contact:</h3>
            <p>support@nasadaily.org</p>
          </div>
        </div>
        <div>
            <p>All rights reserved.</p>
            <p>&copy; MYM 2023.</p>
        </div>
      </div>
    </footer>
  )
}
