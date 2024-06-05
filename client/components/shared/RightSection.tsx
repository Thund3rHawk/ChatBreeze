import React from 'react'
import SocketProvider from '@/context/socketProvider'
import ChatArea from './ChatArea'


const RightSection = () => {
  return (
    <div className='w-[60vw] h-[90vh] border border-slate-400 rounded-3xl mx-10'>
      <SocketProvider>
        <ChatArea/>
      </SocketProvider>
    </div>
  )
}

export default RightSection