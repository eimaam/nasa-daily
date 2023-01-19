import React, { useState, useContext, createContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom" 


type defaults = {
    user: any,
    setUser: any,
    navigate:any,
    
}

const UserContext = createContext<defaults>({} as defaults );



export const useUser = () => {
    return useContext(UserContext)
}

type Props = {
    children:React.ReactNode
}
export const UserProvider = ( { children } : Props ) => {
    const navigate = useNavigate()

    
    const [user, setUser] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(false)


    useEffect(() => {
        const fetchUserData = async () => {
            setLoading(true)
            const username = localStorage.getItem("username")
            const pass = localStorage.getItem("username")
            if(username != null){
                setUser({
                    username: username,
                    password: pass,
                })
                setLoading(false)
            }
        }

        fetchUserData()

    }, [])



    const value = {
        user,
        setUser,
        navigate,
        loading,
        setLoading,
    }

  return (
    <UserContext.Provider value={value}>
        { children }
    </UserContext.Provider>
  )
}
