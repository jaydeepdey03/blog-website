import React from 'react'
import PostResult from './PostResult'
import { Link } from 'react-router-dom'


const Posts = () => {
    return (
        <div className='flex-[9_9_0%] w-2/3 h-2/3 justify-center sm:flex sm:flex-wrap sm:justify-center gap-32'>
            <Link to="/posts"><PostResult /></Link>
            <Link to="/posts"><PostResult /></Link>
            <Link to="/posts"><PostResult /></Link>
            <Link to="/posts"><PostResult /></Link>
            <Link to="/posts"><PostResult /></Link>
            <Link to="/posts"><PostResult /></Link>
        </div>
    )
}

export default Posts
