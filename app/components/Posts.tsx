import Link from 'next/link'
import React from 'react'
import SinglePost from './SinglePost'

const Posts = () => {
  return (
    <div className='w-full h-[502px] bg-secondary px-60'>
      <div className='flex justify-between py-6'>
        <h5 className='font-heebo font-semibold text-[22px]'>Recent Posts</h5>
        <Link className='font-heebo font-semibold text-[22px] text-pinkTheme' href={"/posts"}>View all</Link>
      </div>
      <div className='flex justify-center gap-5'>
        <SinglePost />
        <SinglePost />
      </div>
    </div>
  )
}

export default Posts
