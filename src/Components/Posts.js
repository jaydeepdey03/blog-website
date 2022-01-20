import React from 'react'
import PostResult from './PostResult'


const Posts = ({post}) => {


    return (
        <div className='flex-[9_9_0%] w-2/3 h-2/3 justify-center sm:flex sm:flex-wrap sm:justify-center gap-16 mt-16 mb-16 '>
            {post.map((p) => {
                return <PostResult key={p._id} post={p} />
            })}
        </div>
    )
}

export default Posts
