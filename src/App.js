import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Postpage from './Pages/Postpage';
import Write from './Pages/Write';

function App() {
  return (
      <Routes>
        <Route path="/" element={[<Home />]} />
        <Route path="/posts" element={<Postpage />} />
        <Route path="/write" element={<Write />} />
      </Routes>
  );
}

export default App;
