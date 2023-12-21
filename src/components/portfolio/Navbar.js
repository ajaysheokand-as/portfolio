import React from 'react';
import AjAySHEOKAND from "../../assets/images/portfolio/AjSHEOKAND.jpeg"
import "./Style.scss";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='navbar flex justify-between flex-wrap '>
        <div className='navbar-left'>
            <a href="#header" className='navbar-left-logo'>
                <img src={AjAySHEOKAND} alt='logo'/>
            </a>
        </div>
        <div className='navbar-right'> 
            <div className='navbar-right-menu flex'>
                <a href="#skills" className='navbar-right-menu-item'>Skill</a>
                <a href="#projects" className='navbar-right-menu-item'>Project</a>
                <a href="#contact" className='navbar-right-menu-item'>Contact Me</a>
                <Link to="/learn-more" className='navbar-right-menu-item'>Learn More</Link>
            </div>
        </div>
    </div>
  )
}
