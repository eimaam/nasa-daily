import React, { useState, useContext, createContext, useEffect, SetStateAction } from 'react'
import { useNavigate } from "react-router-dom" 


type contextType = {
    user: any,
    setUser: any,
    navigate:any,
    loading: boolean,
    setLoading: React.Dispatch<SetStateAction<boolean>>;   
}

export const UserContext = createContext<contextType>({} as contextType);


// creating context
export const useUser = () => {
    return useContext(UserContext)
}

type Props = {
    children:React.ReactNode
}

export const UserProvider = ( { children } : Props ) => {
    const navigate = useNavigate()

    
    const [user, setUser] = useState<{} | null>(null)

    const [loading, setLoading] = useState(false)


    useEffect(() => {
        // fetch user data from storage if logged in
        const fetchUserData = async () => {
            setLoading(true)
            const username = localStorage.getItem("username")
            const pass = localStorage.getItem("password")
            if(username != null){
                setUser({
                    username: username,
                    password: pass,
                })
            }
            setLoading(false)
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
