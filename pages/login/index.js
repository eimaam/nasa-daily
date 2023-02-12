import React, { useState } from 'react'
import Link from 'next/link'
import styles from '../../styles/login.module.scss'






export const login = () => {

   

    const [data, setData] = useState({
        username: "",
        password: ""
    })

    const { username, password } = data;

    // handle change
    const handleChange = (e) => {
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
                type="text" 
                name="username"
                value={data.username}
                placeholder='Username'
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
                        <Link href="/signup"> SIGN UP </Link>
                    </button>
                </p>
            </div>
        </form>
    </div>
  )
}

export default login;