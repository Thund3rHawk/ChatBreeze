import React from 'react'
import SocketProvider from '@/context/socketProvider'
import ChatArea from './ChatArea'


const RightSection = () => {
  return (
    <>
      <SocketProvider>
        <ChatArea/>
      </SocketProvider>
    </>
  )
}

export default RightSection