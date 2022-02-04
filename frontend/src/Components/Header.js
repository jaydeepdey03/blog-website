import React from 'react'

const Header = () => {

    return (
        <div className='font-Lora flex justify-center items-center'>
            <span className='absolute z-20 text-2xl'>Welcome to my Blog website</span>
            <img
                className='w-screen object-cover h-96'
                src="https://cdn.pixabay.com/photo/2020/09/15/15/59/background-5574045_1280.png"
                alt="" />
        </div>
    )
}

export default Header
