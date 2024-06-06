import React from 'react'
import LeftSection from './shared/LeftSection'
import RightSection from './shared/RightSection'
import AddUserProvider from '@/context/addUserProvider'

const HomePage = () => {
  return (
    <div className=''>
      <div className="flex justify-between">
        <AddUserProvider>
          <LeftSection/>        
        </AddUserProvider>
        <RightSection/>
     </div>
    </div>
  )
}

export default HomePage