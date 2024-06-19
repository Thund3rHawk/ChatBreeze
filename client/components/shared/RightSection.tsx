import React from 'react'
import SocketProvider from '@/context/socketProvider'
import ChatArea from './ChatArea'



const RightSection = () => {
  // Have to find the userID from a context provider while click the button of the particular username from the left section.
  //here i can fetch the chats using this particular userId. 

  return (
    <div className='w-[60vw] h-[90vh] border border-slate-400 rounded-3xl mx-10'>
      <SocketProvider>
        <ChatArea/>
      </SocketProvider>
    </div>
  )
}

export default RightSection