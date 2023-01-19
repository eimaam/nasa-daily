import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const SignUp = () => {

    const [data, setData] = useState({
        email: "",
        password: "",
        username: "",
    })

    
    const {email, password, username } = data

    // handle input change
    const handleChange = (e:any) => {
        e.preventDefault()
        const {name, value} = e.target
        setData(prevData => ({
            ...prevData,
            [name]:value
        }))
    }


  return (
    <div className='container' id='signup' data-aos="fade-up">
        <form>
            <h2>SIGN UP</h2>
            <h4>Welcome 👋</h4>
            <>
            <div>
                <input 
                type="text"
                name='username' 
                placeholder='Username'
                value={username}
                onChange={handleChange}
                required
                />
            </div>
            <div>
                <input 
                type="email"
                name='email' 
                placeholder='Email Address'
                value={email}
                onChange={handleChange}
                required
                />
            </div>
            <div>
                <input 
                type="password" 
                placeholder='Password'
                name='password'
                value={password}
                onChange={handleChange}
                required
                />
            </div>
            </>
            <div>
                <input type='submit' value="Sign up"/>
            </div>
            <div>
                <p>Have an account already? 
                    &nbsp; 
                    <button className='btn--small'>
                        <Link to="/login">Login</Link>
                    </button>
                </p>
            </div>
        </form>
    </div>
  )
}
