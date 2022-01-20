import './App.css';
import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Postpage from './Pages/Postpage';
import Write from './Pages/Write';
import Profile from './Pages/Profile'
import Login from './Pages/Login'
import Registration from './Pages/Registration';
import Poststate from './Context/Poststate';

function App() {
  const user = false
  return (
    <Poststate>
      <Routes>
        <Route path="/" element={[<Home/>]} />
        <Route path="/posts/fetchPost/:postId" element={<Postpage />} />
        <Route path="/write" element={user ? <Write /> : <Login />} />
        <Route path="/profile" element={user ? <Profile /> : <Login /> } />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/registration" element={user ? <Home /> : <Registration />} />
      </Routes>
    </Poststate>
  );
}

export default App;
