import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'




export const Login = () => {
   

    const [data, setData] = useState({
        email: "",
        password: ""
    })

    // handle change
    const handleChange = (e:any) => {
        e.preventDefault()
        const {name, value} = e.target
        setData(prevData => ({
            ...prevData,
            [name]:value
        }))
    }

    
    
  return (
    <div className='container' id='login' data-aos="fade-up">
        <form>
            <h2>👋 L O G I N</h2>
            <h3>  Enter login credentials: </h3>
            <div>
                <input 
                type="email" 
                name="email"
                value={data.email}
                placeholder='Email Address'
                onChange={handleChange}
                required
                />
            </div>
            <div>
                <input 
                type="password" 
                name="password"
                value={data.password}
                placeholder='Password'
                onChange={handleChange}
                required
                />
            </div>
            <div>
                <input type='submit' value="Log in"/>
            </div>
            <div>
                <p>Don't have an account yet? 
                &nbsp; 
                    <button className='btn--small'>
                        <Link to="/signup"> SIGN UP </Link>
                    </button>
                </p>
            </div>
        </form>
    </div>
  )
}
