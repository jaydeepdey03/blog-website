import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'

const Singlepost = () => {
    return (

        <div className='flex-[9_9_0%]'>
            <div>
                <img
                    className='w-full h-3/4 p-6 object-cover'
                    src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                />
                <div className='text-center'>
                    <h1 className='text-3xl font-bold'>Hello world</h1>
                    <div className='flex justify-around mt-6 text-2xl'>
                        <Link to="/"><AiOutlineEdit className='text-blue-400' /></Link>
                        <Link to="/"><AiOutlineDelete className='text-red-400' /></Link>
                    </div>
                </div>
                <div className='text-center text-lg flex justify-between p-5 px-10 sm:px-32'>
                    <span>Author: <b>Prateek</b></span>
                    <span>1 Hour Ago</span>
                </div>
                <p className='font-Baskerville p-6 text-justify first-letter:text-3xl first-letter:font-bold first-letter:text-slate-900 first-letter:mr-3 sm:px-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae odio fuga accusantium numquam, quasi, asperiores aliquid nemo, libero qui aut eos cumque? Non saepe perferendis nostrum, sint corporis officia error dolorum provident quasi quos commodi totam, ipsa maxime omnis vel. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam natus, exercitationem quasi doloribus magni ab fugiat! Nobis aperiam eos doloremque reprehenderit aliquid, illo ullam, ad beatae quae dolor amet cum voluptas. Est aperiam minus odio, quod reiciendis veniam ad necessitatibus libero quo placeat autem quasi dolore fugit, commodi sapiente ratione?</p>
            </div>
        </div>

    )
}

export default Singlepost
