import React from 'react'
import LeftSection from './shared/LeftSection'
import RightSection from './shared/RightSection'

const HomePage = () => {
  return (
    <div className='h-screen'>
      <div className="flex">
        <LeftSection/>        
        <RightSection/>
     </div>
    </div>
  )
}

export default HomePage