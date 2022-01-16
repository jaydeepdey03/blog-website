import React from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import { IoIosAddCircleOutline } from 'react-icons/io'

const Write = () => {

    function submit(e) {
        e.preventDefault()
    }

    // const textarea = document.querySelector(".input");

    // textarea.addEventListener("input", function (e) {
    //     textarea.style.height = "auto";
    //     textarea.style.height = textarea.scrollHeight + "px";
    // });

    return (
        <>
            <Navbar />
            <div className='p-12'>
                <img 
                className='w-auto h-2/3 sm:h-96 object-contain rounded m-auto'
                src="https://images.pexels.com/photos/5409751/pexels-photo-5409751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="" 
                />
                <form onSubmit={submit}>
                    <div className='flex items-center flex-col mt-10 sm:flex-row sm:mx-10'>
                        <label htmlFor="">
                            <Link to="/write"><IoIosAddCircleOutline className='w-10 h-10 flex justify-center items-center' /></Link>
                        </label>
                        <input type="file" id="fileInput" className='hidden' />
                        <input className='text-4xl outline-none w-full px-2 m-10' type="text" placeholder='title' autoFocus={false} />
                    </div>
                    <div className='flex justify-center items-center px-2 py-6'>
                        <textarea
                            className='input text-2xl outline-none sm:w-full h-full overflow-hidden resize mb-10 sm:mx-10'
                            placeholder='Tell your story....'
                            type="text"
                        ></textarea>
                    </div>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5 sm:mx-10'><Link to="/write">Publish</Link></button>
                </form>
            </div>
        </>
    )
}

export default Write
