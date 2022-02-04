import React, { useState } from 'react'
import PostContext from './Postcontext'

// const host = process.env.HOST
const Poststate = (props) => {

  const [post, setPost] = useState([])

  // Fetch All Post
  const fetchAllPost = async () => {
    const response = await fetch(`http://localhost:5050/blog/posts/fetchPost`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjFkYWYzYjNiZDBjNmU0MTZmYWM0NDM0IiwiaWF0IjoxNjQxNzM5MTg3fQ.TmCLw9NZZaVNUJbFufIS4yMscnt3ydnn5Tb2nI9j89o",
      },
    });
    const res = await response.json()
    // console.log(res)
    localStorage.setItem('post', res)
    setPost(res)
  }

  // Fetch Post
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


  return (
    <PostContext.Provider value={{ post, fetchAllPost, fetchPostbyID }} >
      {props.children}
    </PostContext.Provider>
  )
}

export default Poststate