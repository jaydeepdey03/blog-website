import React from 'react'
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'

const Hamburger = () => {
    function showSettings(event) {
        event.preventDefault();
    }
    
    return (
        
        <div>
            <Menu>
                <Link id="home" className="menu-item" to="/">Home</Link>
                <Link id="about" className="menu-item" to="/about">About</Link>
                <Link id="contact" className="menu-item" to="/contact">Contact</Link>
                <Link onClick={showSettings} className="menu-item--small" to="">Settings</Link>
            </Menu>
        </div>
    )
}

export default Hamburger
