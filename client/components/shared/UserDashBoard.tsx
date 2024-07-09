import useUserChat from '@/hooks/useUserChat'
import { Button } from '@mui/material'
import React from 'react'

const UserDashBoard = () => {
    const {setShowUserDetails, showUserDetails, userName} = useUserChat();
    const closeUserDashboard = ()=>{
        setShowUserDetails(!showUserDetails);
    }

  return (
    <div>
        User Dashboard
        <Button onClick={closeUserDashboard}>X</Button>

        <div>
            <h1>User Name is {userName}</h1>
        </div>
    </div>
  )
}

export default UserDashBoard