import React from 'react'
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='w-full h-[243px] pt-20'>
            <div className='w-[280px] flex mx-auto justify-center gap-9'>
                <FaFacebookSquare size={30} className=' text-bluish' />
                <FaInstagram size={30} className=' text-bluish' />
                <FaTwitter size={30} className=' text-bluish' />
                <FaLinkedin size={30} className=' text-bluish' />
            </div>
            <h4 className='font-heebo text-lg md:text-[22px] text-center font-semibold py-5'>Copyright ©2020 All rights reserved </h4>
        </footer>
    )
}

export default Footer
