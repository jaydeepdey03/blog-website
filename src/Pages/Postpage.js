import React, {useContext} from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Singlepost from '../Components/Singlepost'


const Postpage = () => {

    return (
        <>
            <Navbar />
            <div className='flex my-1'>
                <Singlepost />
                <Sidebar />
            </div>
        </>
    )
}

export default Postpage
