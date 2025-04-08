import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

const Navbar = () => {
    return (
        <>
            <nav className='mb-20 flex items-center justify-between py-6'>

                <div className="m-8 flex flex-shrink-0 items-center text-4xl">
                    <p className='mx-2 w-10'>KS</p>
                </div>
                <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                    <FaInstagram />
                    <FaLinkedin />
                    <FaGithub />
                </div>
            </nav>
        </>
    )
}

export default Navbar
