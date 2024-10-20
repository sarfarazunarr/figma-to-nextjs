import React from 'react'

const SinglePost = () => {
  return (
    <div className='md:w-[483px] w-full md:h-[356px] h-auto p-9 bg-white border-2 border-transparent hover:border-pink-500 transition-colors duration-200 ease-in-out'>
      <h2 className='font-heebo font-bold text-[26px]'>Making a design system from scratch</h2>
      <div className='w-[300px] h-[42px] flex gap-4 py-8 font-heebo font-normal text-lg text-[#000000B2]'>
        <p>12 Feb 2020</p>
        <p>|</p>
        <p>Design , Pattern</p>
      </div>
      <p className="font-heebo font-normal py-8 pr-8 text-bluish">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    </div>
  )
}

export default SinglePost
