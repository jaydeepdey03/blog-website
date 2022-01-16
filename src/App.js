import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Postpage from './Pages/Postpage';
import Write from './Pages/Write';
import Profile from './Pages/Profile'
import Login from './Pages/Login'
import Registration from './Pages/Registration';

function App() {
  return (
      <Routes>
        <Route path="/" element={[<Home />]} />
        <Route path="/posts" element={<Postpage />} />
        <Route path="/write" element={<Write />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
  );
}

export default App;
