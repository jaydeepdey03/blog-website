import './App.css';
import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Postpage from './Pages/Postpage';
import Write from './Pages/Write';
import Profile from './Pages/Profile'
import Login from './Pages/Login'
import Registration from './Pages/Registration';
import {UserProvider} from '../src/Context/Context'
// import Poststate from './Context/Poststate';
import Navbar from './Components/Navbar';

function App() {
  // const user = false
  return (
    // <Poststate>
    <UserProvider>
          <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="/posts/fetchPost/:postId" element={<Postpage />} />
          <Route path="/write" element={user ? <Write /> : <Login />} />
          <Route path="/profile" element={user ? <Profile /> : <Login /> } /> */}
          {/* <Route path="/login" element={user ? <Home /> : <Login />} /> */}
          <Route path="/login" element={<Login />} />
          {/* <Route path="/registration" element={user ? <Home /> : <Registration />} /> */}
          <Route path="/registration" element={<Registration />} />
        </Routes>
    </UserProvider>
    // </Poststate>
  );
}

export default App;
