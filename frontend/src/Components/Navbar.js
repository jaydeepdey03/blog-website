import React from 'react'
import { Link } from "react-router-dom";
import { IoLogoFacebook, IoLogoTwitter, IoMdSearch, IoLogoInstagram } from 'react-icons/io';


const Navbar = () => {

    function dropDown() {
        const drop = document.querySelector('.drop')
        if (drop.classList.contains('hidden')) {
            drop.classList.remove('hidden')
            drop.classList.add('flex')
        }
        else {
            drop.classList.remove('flex')
            drop.classList.add('hidden')
        }
    }

    const user = false

    return (
        <>
            <nav className='h-16 text-xl bg-white'>
                <div className='flex justify-end items-center space-x-10 p-4 mx-3'>
                    <Link to="/">Home</Link>
                    <Link to="/">Contact</Link>
                    <Link to="/write">Create</Link>
                    <IoLogoFacebook className='cursor-pointer text-blue-700 text-2xl' />
                    <IoLogoTwitter className='cursor-pointer text-blue-300' />
                    <IoLogoInstagram className='cursor-pointer' />
                    <IoMdSearch className='cursor-pointer' />
                    <img
                        onMouseDown={dropDown}
                        className='cursor-pointer w-10 h-10 rounded-full'
                        src={user? "https://qph.fs.quoracdn.net/main-thumb-244354304-200-gjtadjqnnyvfgfwsbmoclbftimyihbkm.jpeg" : `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png`}
                        alt=""
                    />

                    <div className='drop hidden absolute top-14 transition ease'>
                        <div className='bg-white flex flex-col absolute right-0 z-50 border-2 rounded mt-1 font-sans text-sm w-32'>
                            {user ? <Link className='p-2 flex hover:bg-blue-200 rounded justify-center' to='/'>Profile</Link> : <span className='hidden'></span>}
                            {user ? <Link className='p-2 flex hover:bg-blue-200 rounded justify-center' to='/'>Logout</Link> : <Link className='p-2 flex hover:bg-blue-200 rounded justify-center' to='/login'>Login</Link>}
                            {user ? <span className='hidden'></span> : <Link className='p-2 flex hover:bg-blue-200 rounded justify-center' to='/registration'>Sign Up</Link>}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
