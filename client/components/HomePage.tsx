import React from 'react'
import LeftSection from './shared/LeftSection'
import RightSection from './shared/RightSection'

const HomePage = () => {
  return (
    <div className=''>
      <div className="flex justify-between">
        <LeftSection/>        
        <RightSection/>
     </div>
    </div>
  )
}

export default HomePage