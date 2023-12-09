import React from 'react';
import logo from "../../assets/images/portfolio/logo.png"
import AjAySHEOKAND from "../../assets/images/portfolio/AjSHEOKAND.jpeg"
import "./Style.scss"

export const Navbar = () => {
  return (
    <div className='navbar flex justify-between flex-wrap '>
        <div className='navbar-left'>
            <div className='navbar-left-logo'>
                <img src={AjAySHEOKAND} alt='logo'/>
            </div>
        </div>
        <div className='navbar-right'> 
            <div className='navbar-right-menu flex'>
                <a href="#skills" className='navbar-right-menu-item'>Skill</a>
                <a href="#projects" className='navbar-right-menu-item'>Project</a>
                <a href="#contact" className='navbar-right-menu-item'>Contact Me</a>
            </div>
        </div>
    </div>
  )
}
