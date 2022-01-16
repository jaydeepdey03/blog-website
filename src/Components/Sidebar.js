import React from 'react'
import { Link } from 'react-router-dom';
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from 'react-icons/io';

const Sidebar = () => {
    return (
        <div className='hidden flex-[3_3_0%] sm:flex items-center flex-col rounded bg-gray-100 h-2/3'>
            <div className='flex flex-col items-center'>
                <span className='m-3 p-2 border-t-2 border-b-2 w-4/5 text-center text-2xl font-bold'>Title</span>
                <img
                    className='h-2/3 w-2/3 mt-3'
                    src="https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80"
                    alt=""
                />
                <p className='p-8 text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit corrupti quis delectus assumenda voluptatem, adipisci est repudiandae laborum dolorum quo!</p>
            </div>
            <div className=''>
                <span className='block m-3 p-2 border-t-2 border-b-2 w-4/5 text-center text-2xl font-bold'>Categories</span>
                <div className=''>
                    <ul className='p-5 mt-2 inline-block w-1/2'>
                        <li><Link to="/">Life</Link></li>
                        <li><Link to="/">Music</Link></li>
                        <li><Link to="/">Style</Link></li>
                    </ul>
                    <ul className='p-5 inline-block w-1/2'>
                        <li>Sport</li>
                        <li>Cinema</li>
                        <li>Technology</li>
                    </ul>
                </div>
            </div>
            <div className='mt-4'>
                <div>
                    <span className='block m-3 p-2 border-t-2 border-b-2 w-40 text-center text-2xl font-bold'>Follow Us</span>
                </div>
                <div className='flex mt-10 mb-10 justify-between space-x-2'>
                    <Link to="/"><IoLogoFacebook className='cursor-pointer text-blue-700 text-4xl' /></Link>
                    <Link to="/"><IoLogoTwitter className='cursor-pointer text-blue-300 text-4xl' /></Link>
                    <Link to="/"><IoLogoInstagram className='cursor-pointer text-4xl' /></Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
