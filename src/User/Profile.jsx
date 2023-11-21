import React from 'react'
import { useHook } from './Usercontext';

const Profile = () => {
    const {username, email} = useHook();
  return (
    <div>
    <h1>Your username is: {username}</h1>
    <h2>Your email is:{email}</h2>
    </div>
  )
}

export default Profile