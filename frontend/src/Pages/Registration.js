import React from 'react'
import { Link } from 'react-router-dom'

const Registration = () => {

    function submit(e) {
        e.preventDefault()
    }

    return (
        <div>
            <div className="h-{32rem} bg-gradient-to-t from-cyan-300 to-blue-300 flex justify-center items-center">
                <div className='bg-white h-auto w-auto rounded mt-10 mb-10'>
                    <form onSubmit={submit}>
                        <h1 className='text-3xl p-4 pt-5 text-center font-bold'>Registration</h1>
                        <div className='flex flex-col m-3'>
                            <label className='mx-5 my-3'>Username</label>
                            <input type="text" placeholder='username' className='sm:w-96 focus:bg-blue-50 px-2 py-3 mx-4 outline-none border-b-2' />
                        </div>
                        <div className='flex flex-col m-3'>
                            <label className='mx-5 my-3'>Email</label>
                            <input type="email" placeholder='hello@mail.com' className='sm:w-96 focus:bg-blue-50 px-2 py-3 mx-4 outline-none border-b-2' />
                        </div>
                        <div className='flex flex-col m-3'>
                            <label className='mx-5 my-3'>Password</label>
                            <input type="password" placeholder='password' className='sm:w-96 focus:bg-blue-50 px-2 py-3 outline-none mx-4 border-b-2' />
                        </div>
                        <div className='flex justify-between text-gray-500 mx-5 text-sm'>
                            <Link to="/login">Log In here</Link>
                            <Link to="/login">Forgot Password?</Link>
                        </div>
                        <div className='flex justify-center items-center'>
                            <button className="m-4 bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-bold py-2 px-4 rounded drop-shadow-lg active:drop-shadow-sm">
                                Submit
                            </button>
                        </div>
                    </form>
                    <div class="mt-4 flex items-center justify-between"><span class="border-b w-1/5 mx-3 lg:w-1/4"></span><span class="text-xs text-center text-gray-500 uppercase">login with Google</span><span class="border-b mx-3 w-1/5 lg:w-1/4"></span></div>
                    <div className='m-6 p-3 drop-shadow-md bg-gray-50 flex justify-center items-center cursor-pointer active:drop-shadow-sm'>
                        <img className='h-8 w-8 mx-3' src="https://img.icons8.com/color/48/000000/google-logo.png" alt='' />
                        <p className='font-bold'>Sign in with Google</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration
