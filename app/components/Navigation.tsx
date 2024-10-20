import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <div className='flex justify-center md:justify-end p-8 gap-6 font-inter'>
        <Link className=' text-sm md:text-xl hover:text-pinkTheme transition-colors duration-200' href={"/"}>Works</Link>
        <Link className=' text-sm md:text-xl hover:text-pinkTheme transition-colors duration-200' href={"/"}>Blog</Link>
        <Link className=' text-sm md:text-xl hover:text-pinkTheme transition-colors duration-200' href={"/"}>Content</Link>
    </div>
  )
}

export default Navigation
