import React, { useContext, useEffect } from 'react'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import Posts from '../Components/Posts'
import Sidebar from '../Components/Sidebar'
import PostContext from '../Context/Postcontext'

const Home = () => {

    const context = useContext(PostContext)
    const { post, fetchAllPost } = context

    useEffect(() => {
        fetchAllPost()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className=''>
            <Navbar />
            <Header />
            <div className='flex'>
                <Posts post={post} />
                <Sidebar />
            </div>
        </div>
    )
}

export default Home
