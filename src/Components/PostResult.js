import React from 'react'
import { Link } from 'react-router-dom'
const moment = require('moment')

const PostResult = ({ post }) => {

    return (
        <div className='m-4 w-80 flex justify-center flex-col shadow-lg active:shadow-sm sm:w-96 rounded'>
            {post.photo && <img
                className='w-full object-cover rounded'
                src={post.photo}
                alt=""
            />}
            <div className='flex flex-col items-center font-Lora space-y-2 p-3'>
                <div className='flex space-x-3 text-red-300 mt-2 text-lg'>
                    {post.categories.map((e, id) => {
                        return <span key={id}>{e}</span>
                    })}
                </div>
                <Link to={`posts/fetchPost/${post._id}`}>
                    <span className='text-4xl font-bold cursor-pointer' >{post.title}</span>
                </Link>
                <hr />
                <span>{moment(post.updatedAt).startOf('day').fromNow()}</span>
                <p className='text-justify'>{post.desc.length > 80 ? post.desc.slice(0, 80) + "..." : post.desc} <span className='text-blue-400 hover:text-blue-600 hover:underline hover:cursor-pointer'>Click Here</span></p>
            </div>
        </div>
    )
}

export default PostResult
