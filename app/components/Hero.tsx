import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex items-center justify-center gap-12 my-40 mx-auto w-[1030px]'>
      <div className='flex flex-col justify-start gap-y-5 w-1/2'>
        <h1 className='font-heebo font-extrabold text-5xl text-bluish'>Hi, I am John, <br /> Creative Technologist</h1>
        <p className='font-heebo font-normal text-[16px] text-bluish'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        <button className='w-52 h-12 bg-pinkTheme text-white font-heebo font-[500px]  text-lg rounded-sm resumebtn hover:bg-bluish transition-colors duration-300 ease-linear'>Download Resume</button>
      </div>

      <div>
        <Image src={"/images/heroimage.jpg"} alt={"John image"} height={300} width={300} className='rounded-full' />
      </div>
    </div>
  )
}

export default Hero
