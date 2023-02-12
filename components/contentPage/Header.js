import { signOut } from 'next-auth/react'
import React from 'react'

export const Header = ({ date }) => {
  return (
    <header>
        <h1>~ NASA ~</h1>
        <br />
        <h2>{date}</h2>
        <h2>Image of the Day:</h2>
    </header>
  )
}
