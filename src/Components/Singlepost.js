import React, {useEffect, useState} from 'react';
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
const moment = require('moment')

const Singlepost = () => {

    const location = useLocation()
    const path = location.pathname.split('/')[3]
    
    const [post, setPost] = useState([])

    useEffect(() => {
        const fetchPostbyID = async (id) => {
            const response = await fetch(`http://localhost:5050/blog/posts/fetchPost/${id}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjFkYWYzYjNiZDBjNmU0MTZmYWM0NDM0IiwiaWF0IjoxNjQxNzM5MTg3fQ.TmCLw9NZZaVNUJbFufIS4yMscnt3ydnn5Tb2nI9j89o",
              },
            });
            const res = await response.json()
            localStorage.setItem('post', JSON.stringify(res))
            setPost(res)
          }
        fetchPostbyID(path)
    }, [path])


    return (

        <div className='flex-[9_9_0%]'>
            <div>
                {post.photo && <img
                    className='w-full h-3/4 p-6 object-cover'
                    src={post.photo}
                    alt=""
                />}
                <div className='text-center'>
                    <h1 className='text-3xl font-bold'>{post.title}</h1>
                    <div className='flex justify-around mt-6 text-2xl'>
                        <Link to="/"><AiOutlineEdit className='text-blue-400' /></Link>
                        <Link to="/"><AiOutlineDelete className='text-red-400' /></Link>
                    </div>
                </div>
                <div className='text-center text-lg flex justify-between p-5 px-10 sm:px-32'>
                    <span>Author: <b>{post.username}</b></span>
                    <span>{moment(post.updatedAt).startOf('day').fromNow()}</span>
                </div>
                <p className='font-Baskerville p-6 text-justify first-letter:text-3xl first-letter:font-bold first-letter:text-slate-900 first-letter:mr-3 sm:px-14'>{post.desc}</p>
            </div>
        </div>

    )
}

export default Singlepost
