import React from 'react'

const PostResult = () => {
    return (
        <div className='m-4 w-80 flex justify-center flex-col shadow-lg sm:w-96 rounded'>
            <img
                className='w-full object-cover rounded'
                src="https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
            />
            <div className='flex flex-col items-center font-Lora space-y-2 p-3'>
                <div className='flex space-x-3 text-red-300 mt-2 text-lg'>
                    <span>Music</span>
                    <span>Life</span>
                </div>
                <span className='text-4xl font-bold'>Title</span>
                <hr />
                <span>1 hour ago</span>
                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia harum ea veritatis saepe vel est perspiciatis voluptatibus adipisci, temporibus veniam.</p>
            </div>
        </div>
    )
}

export default PostResult
