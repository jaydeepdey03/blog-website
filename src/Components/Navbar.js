import React from 'react'
import { Link } from "react-router-dom";
import { IoLogoFacebook, IoLogoTwitter, IoMdSearch, IoLogoInstagram } from 'react-icons/io';


const Navbar = () => {


    function dropDown() {
        const drop = document.querySelector('.drop')
        if (drop.classList.contains('hidden')) {
            // while(drop.classList.contains('hidden') || drop.classList.contains('flex')){
            //     if(drop.classList.contains('hidden'))drop.classList.remove('hidden')
            //     else if(drop.classList.contains('flex'))drop.classList.remove('flex')
            // }
            drop.classList.remove('hidden')
            drop.classList.add('flex')
        }
        else {
            // while(drop.classList.contains('hidden') || drop.classList.contains('flex')){
            //     if(drop.classList.contains('hidden'))drop.classList.remove('hidden')
            //     else if(drop.classList.contains('flex'))drop.classList.remove('flex')
            // }
            drop.classList.remove('flex')
            drop.classList.add('hidden')
        }
    }
        


    // document.body.addEventListener('click', ()=>{
    //     while(drop.classList.contains('hidden') || drop.classList.contains('flex')){
    //         drop.classList.remove('hidden')
    //         drop.classList.remove('flex')
    //     }
    //     drop.classList.add('hidden')
    // })


    return (
        <>
            <nav className='h-16 text-xl bg-white border-b-2'>
                <div className='flex justify-end items-center space-x-10 p-4 mx-3'>
                    <Link to="/">Home</Link>
                    <Link to="/">Contact</Link>
                    <Link to="/">Create</Link>
                    <IoLogoFacebook className='cursor-pointer text-blue-700 text-2xl' />
                    <IoLogoTwitter className='cursor-pointer text-blue-300' />
                    <IoLogoInstagram className='cursor-pointer' />
                    <IoMdSearch className='cursor-pointer' />
                    <img
                        onMouseDown={dropDown}
                        className='cursor-pointer w-10 h-10 rounded-full'
                        src="https://qph.fs.quoracdn.net/main-thumb-244354304-200-gjtadjqnnyvfgfwsbmoclbftimyihbkm.jpeg"
                        alt=""
                    />

                    <div className='drop hidden absolute top-14 transition ease'>
                        <div className='bg-white flex flex-col absolute right-0 z-50 border-2 rounded mt-1 font-sans text-sm w-32'>
                            <Link className='p-2 flex hover:bg-blue-200 rounded justify-center' to='/'>Profile</Link>
                            <Link className='p-2 flex hover:bg-blue-200 rounded justify-center' to='/'>Login</Link>
                            <Link className='p-2 flex hover:bg-blue-200 rounded justify-center' to='/'>Sign Up</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
