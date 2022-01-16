import React from 'react'

const Profilepage = () => {

    function submit(e) {
        e.preventDefault()
    }

    return (
        <div className=''>
            <div className=''>
                <div className=''>
                    <div className='h-96 bg-gradient-to-t from-purple-500 to-pink-500 p-10'>
                        <div className='flex justify-between'>
                            <button class="h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Update
                            </button>
                            <input type="file" placeholder='file input' className='hidden' />
                            <button class="h-10 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                Delete
                            </button>
                        </div>
                        <div className='flex justify-center items-center p-10'>
                            <img
                                className='rounded-full h-32 w-32'
                                src="https://qph.fs.quoracdn.net/main-thumb-244354304-200-gjtadjqnnyvfgfwsbmoclbftimyihbkm.jpeg"
                                alt=""
                            />
                        </div>
                        <label className='flex justify-center items-center text-white text-2xl font-bold'>Farhan Arshad</label>
                    </div>
                </div>
                <form onSubmit={submit} className='flex flex-col justify-center items-center p-10'>
                    <div className='flex flex-col m-3'>
                        <label className='m-3'>Username</label>
                        <input type="text" placeholder='user' className='sm:w-96 focus:bg-blue-50 p-4 outline-none border-2' />
                    </div>
                    <div className='flex flex-col m-3'>
                        <label className='m-3'>Email</label>
                        <input type="email" placeholder='hello@mail.com' className='sm:w-96 focus:bg-blue-50 p-4 outline-none border-2' />
                    </div>
                    <div className='flex flex-col m-3'>
                        <label className='m-3'>Password</label>
                        <input type="password" placeholder='user' className='sm:w-96 focus:bg-blue-50 p-4 outline-none border-2' />
                    </div>
                    <div>
                        <button class="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Profilepage
