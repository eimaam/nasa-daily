import React from 'react'
import nasaLogo from "../assets/NASA.jpg";
import { Footer } from './Footer';

export const Home = () => {
  return (
    <>
    <div id='home'>
    <header>
      <div className='details'>
        <div style={{margin: "auto"}}>
          <h1>NASA DAILY</h1>
          <h3>get new amazing images or photograph of Space with <br /> fascinating details about them daily. </h3>
        </div>
        <div>
          <img src={nasaLogo} alt="Nasa Logo" />          
        </div>
      </div>
      <br />
      <br />
      <h1>
        <button>
          EXPLORE
        </button>
      </h1>
    </header>
    </div>
    <Footer />
    </>
  )
}
