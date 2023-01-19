import React, { useState, useContext, createContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom" 


type defaults = {
    user: any,
    setUser: any,
    navigate:any,
}

const UserContext = createContext<defaults>({} as defaults);



export const useUser = () => {
    return useContext(UserContext)
}

type Props = {
    children:React.ReactNode
}
export const UserProvider = ( { children } : Props ) => {
    const navigate = useNavigate()

    
    const [user, setUser] = useState<any>(null)


    useEffect(() => {
        const fetchUserData = async () => {
            const username = localStorage.getItem("username")
            const pass = localStorage.getItem("username")
            if(username != null){
                setUser({
                    username: username,
                    password: pass,
                })
            }
            console.log(user)

        }

        fetchUserData()

    }, [])



    const value = {
        user,
        setUser,
        navigate,
    }

  return (
    <UserContext.Provider value={value}>
        { children }
    </UserContext.Provider>
  )
}
