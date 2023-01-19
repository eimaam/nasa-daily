import React from 'react'
import { useUser } from '../context/UserContext'
import { Outlet } from "react-router-dom"

export const ProtectedRoutes = () => {
    const { user, navigate } = useUser()
  return (
    user ? <Outlet /> : navigate('login')
  )
}
