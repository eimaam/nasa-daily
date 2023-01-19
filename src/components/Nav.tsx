import React from 'react'
import { Link } from 'react-router-dom'
import { GoThreeBars } from "react-icons/go"
import { useUser } from '../context/UserContext'
import { toast } from 'react-hot-toast'

export const Nav = () => {
  const { user, navigate, } = useUser()

  // function to hide or show nav bar on mobile
  const toggleNav = () => {
    const navItems = document.getElementById('navItems') as any;

    if(navItems.style.display != "flex"){
      navItems.style.display = "flex"
    }else{
      navItems.style.display = "none"
    }
  }

  // logOut function
  const logOut = () => {
    localStorage.removeItem("username")
    localStorage.removeItem("password")
    navigate('/login')
    toast('Logged Out...')
  }



  return (
    <nav>
      <div>
        {user ? <h2>{user.username}</h2> : <h2>NASA Daily</h2>}
      </div>
      <ul id='navItems'>
        <li><Link to="/">Home</Link></li>
        <li><a href="https://api.nasa.gov/index.html#apply-for-an-api-key">API Doc</a></li>
        <li><Link to="/photooftheday">TODAY</Link></li>
        <li><Link to="">About</Link></li>
        <li><a href="https://www.github.com/eimaam/nasa-daily">Source Code</a></li>
        <li id='logOutMobile' onClick={logOut}>
          <button type='button'>logOut</button>
        </li>
      </ul>
      {user &&
      <div id='logOut' onClick={logOut}>
        <button>logOut</button>
      </div>
      }
      <div id="toggler" onClick={toggleNav}>
        <h1><GoThreeBars /></h1>
      </div>
    </nav>
  )
}
