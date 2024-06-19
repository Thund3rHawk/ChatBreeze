import React, {createContext, useState} from 'react'
import { chatProviderType } from '@/types'


export const ChatContext = createContext<chatProviderType>({userId:'', setUserId: ()=>{}})

const ChatProvider:React.FC <{children: React.ReactNode}> = ({children}) => {
    const [userId, setUserId] = useState("");


  return (
    <ChatContext.Provider value = {{userId, setUserId}}>
        {children}
    </ChatContext.Provider>
  )
}

export default ChatProvider