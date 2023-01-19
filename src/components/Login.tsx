import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useUser } from '../context/UserContext'
import { toast } from 'react-hot-toast'
import { Loader } from '../utilities/Loader'






export const Login = () => {
    const navigate = useNavigate()

    const { user, setUser, setLoading, loading } = useUser()
   

    const [data, setData] = useState({
        username: "",
        password: ""
    })

    const { username, password } = data;

    // handle change
    const handleChange = (e:any) => {
        e.preventDefault()
        const {name, value} = e.target
        setData(prevData => ({
            ...prevData,
            [name]:value
        }))
    }


    //login function
    const login = async (e:any) => {
        e.preventDefault()
        setLoading(true)
        try {
            await axios.post("http://localhost:5000/api/v1/user/signin", { username, password })
            setUser({
                username: username,
            })
            localStorage.setItem("username", username)
            localStorage.setItem("password", password)
            toast.success('Welcome')
            navigate('/photooftheday')
        }
        catch (error:any){
            toast.error('Network Err or Incorrect Details... Retry')
        }
        setLoading(false)
    }


    // show loading screen if loading === true
    if(loading){
        return <Loader />
    }
  

    
    
  return (
    <div className='container' id='login' data-aos="fade-up">
        <form onSubmit={login}>
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
                        <Link to="/signup"> SIGN UP </Link>
                    </button>
                </p>
            </div>
        </form>
    </div>
  )
}
