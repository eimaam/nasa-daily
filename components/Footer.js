import Link from 'next/link';
import React from 'react'
import style from "../styles/footer.module.scss"

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerItems}>
        <div>
            <h2>NASA DAILY</h2>
        </div>
        <div className={style.mid}>
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
        <div style={{textAlign: "center"}}>
            <p>All rights reserved.</p>
            <a href="https://eimaam.dev">eimaam.dev</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;