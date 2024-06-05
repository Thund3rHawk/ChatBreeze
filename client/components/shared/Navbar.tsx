'use client'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import useTheme from '@/hooks/useTheme'


const Navbar = () => {
    const [btnName, setBtnName] = useState ('Dark Mode');
    const {setTheme, theme} = useTheme();

    const changeTheme = ()=>{
        if (theme === 'bg-white'){
            setTheme ('bg-slate-800 text-white');
            localStorage.setItem ("theme", 'bg-gray-900 text-white');
            setBtnName ('Light Mode');
        }
        else {
            setTheme ('bg-white');
            localStorage.setItem ("theme", 'bg-white');
            setBtnName ('Dark Mode');
        }
    }
  return (
        <div className = 'flex justify-between container py-5'>
            <h1>ChatBreeze</h1>
            <Button variant="default" onClick={changeTheme}>{btnName}</Button>
        </div>
  )
}

export default Navbar