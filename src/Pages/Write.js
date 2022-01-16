import React from 'react'
import Navbar from '../Components/Navbar'
import {IoMdAddCircleOutline} from 'react-icons/io'

const Write = () => {
    return (
        <>
            <Navbar />
            <div>
                <form>
                    <div>
                        <label htmlFor="">
                            <IoMdAddCircleOutline />
                        </label>
                        <input type="file" id="fileInput" className='hidden'/>
                        <input type="text" placeholder='title' autoFocus={true} />
                    </div>
                    <textarea placeholder='Tell your story....' typeof="text">Hello</textarea>
                    <button className=''>Publish</button>
                </form>
            </div>
        </>
    )
}

export default Write
