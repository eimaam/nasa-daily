import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import { Loader } from '../utilities/Loader'



export const SignUp = () => {
    const { user, loading, setLoading, navigate } = useUser()


    useEffect(() => {
        user && navigate('login')
    }, [])

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

    const signup = async (e:any) => {
        e.preventDefault()
        setLoading(true)
        try {
            await axios.post("http://localhost:5000/api/v1/user/signup", {username, email, password})
            toast.success('Sign up successfully...')
            toast.success('Proceed to Login')
            setData({
                email: "",
                password: "",
                username: "",
            })
        } catch (error:any) {
            console.log(error.message)
        }
        setLoading(false)
    }

    if(loading){
        return <Loader />
    }

  return (
    <div className='container' id='signup' data-aos="fade-up">
        <form onSubmit={signup}>
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
                <input type='submit' value="Sign up" />
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
