'use client'
import React from 'react'
import { Button } from "@/components/ui/button"
import useTheme from '@/hooks/useTheme'


const Navbar = () => {
    const {setTheme, theme} = useTheme();

    const changeTheme = ()=>{
        if (theme === 'bg-white'){
            setTheme ('bg-black text-white');
        }
        else {
            setTheme ('bg-white');
        }
    }
  return (
    <div className = 'flex justify-between'>
        <h1>ChatBreeze</h1>
        <Button variant="outline" onClick={changeTheme}>Button</Button>
    </div>
  )
}

export default Navbar