import React from 'react'
import SingleWork from './SingleWork'

const Works = () => {
  return (
    <div className='my-20 w-full px-4 md:px-60'>
      <h6 className='font-heebo font-semibold text-lg md:text-[22px]'>Featured Works</h6>
      <div className='flex flex-col gap-20 my-5'>
        <SingleWork number={"1"} />
        <SingleWork number={"2"} />
        <SingleWork number={"3"} />
      </div>
    </div>
  )
}

export default Works
