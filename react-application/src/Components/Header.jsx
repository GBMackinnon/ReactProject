import React from "react";
import './Styles/Header-Styles.css';
import Logo from '../assets/Logos/Logo.png';
import { Link } from "react-router-dom";

function Header(){
    return(
        <header className="header">
            <img className="logo" src={Logo} alt="logo"/>
            <nav>
                <ul className="nav-links">             
                <li><Link to="/">Home</Link></li>                        
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Services">Services</Link></li>   
                <li><Link to="/Contact">Contact</Link></li> 
                </ul>
            </nav>
        </header>
    );
}

export default Header;