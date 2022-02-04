import {useState,useContext, useEffect} from 'react'
import {Context} from '../../src/Context/Context'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";

const Login = () => {
    const [user, setUser] = useContext(Context);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState();
    // const [loading, setLoading] = useState(false);
    const  navigate = useNavigate();
    // TODO: correct the logic to if(user)
    useEffect( ()=>{
        if(!user) navigate("/");
    },[user,navigate]
    )
    async function submit(e) {
        e.preventDefault()
        // send auth request to server
        try{
            const loginUser = {email, password};
            const loginResponse = await axios.post("http://localhost:5000/users/login", loginUser);
            setUser({
                token: loginResponse.data.token,
                user: loginResponse.data.user
            });
            localStorage.setItem("auth-token", loginResponse.data.token);
            // history.push("/");
        } catch(err) {
            err.response.data.msg && setError(err.response.data.msg)
        }
    }

    return (
        <div>
            <div className="h-screen bg-gradient-to-t from-cyan-300 to-blue-300 flex justify-center items-center">
                <div className='bg-white h-auto w-auto rounded mt-10 mb-10'>
                    <form onSubmit={submit}>
                        <h1 className='text-3xl p-4 pt-5 text-center font-bold'>Login</h1>
                        <div className='flex flex-col m-3'>
                            <label className='m-3'>Email</label>
                            <input onChange={e=>setEmail(e.target.value)} type="email" placeholder='hello@mail.com' className='sm:w-96 focus:bg-blue-50 p-4 mx-4 outline-none border-b-2' />
                        </div>
                        <div className='flex flex-col m-3'>
                            <label className='m-3'>Password</label>
                            <input onChange={e=>setPassword(e.target.value)} type="password" placeholder='user' className='sm:w-96 focus:bg-blue-50 p-4 outline-none mx-4 border-b-2' />
                        </div>
                        <div className='flex justify-between text-gray-500 mx-5 text-sm'>
                            <Link to="/registration">Sign Up here</Link>
                            <Link to="/login">Forgot Password?</Link>
                        </div>
                        <div className='flex justify-center items-center'>
                            <button className="m-4 bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-bold py-2 px-4 rounded drop-shadow-lg active:drop-shadow-sm">
                                Submit
                            </button>
                        </div>
                    </form>
                    <div class="mt-4 flex items-center justify-between"><span class="border-b w-1/5 mx-3 lg:w-1/4"></span><span class="text-xs text-center text-gray-500 uppercase">login with Google</span><span class="border-b mx-3 w-1/5 lg:w-1/4"></span></div>
                    <div className='m-6 p-3 drop-shadow-md bg-gray-50 flex justify-center items-center cursor-pointer active:drop-shadow-sm'>
                        <img className='h-8 w-8 mx-3' src="https://img.icons8.com/color/48/000000/google-logo.png" alt='' />
                        <p className='font-bold'>Sign in with Google</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
