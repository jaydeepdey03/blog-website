import React, { useState,useContext, useEffect } from 'react'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import Posts from '../Components/Posts'
import Sidebar from '../Components/Sidebar'
import PostContext from '../Context/Postcontext'
import {Context} from '../../src/Context/Context'

const Home = () => {
    const [{user}, setUser] = useContext(Context);
    // const context = useContext(PostContext)
    // const { post, fetchAllPost } = context

    // useEffect(() => {
    //     fetchAllPost()
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    return (
        <div className=''>
            <Header />
            {
                user ?
                    <div>Yes</div>
                :
                    <div>No</div>
            }
            <div className='flex'>
                {/* <h3>This is Hello</h3> */}
                {/* <Posts post={post} /> */}
                <Sidebar />
            </div>
        </div>
    )
}

export default Home
