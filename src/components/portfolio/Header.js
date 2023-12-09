import React from 'react';
import DP from "../../assets/images/portfolio/DP.jpg"

export const Header = () => {
  return (
    <div className='header'>
        <div className='header-left'>
            <div className='header-left-text'>
            Hi 👋, I'm 
            </div>
            <div className='header-left-title'>
             AjAy SHEOKAND!
            </div>
            <div className='header-left-description'>
              Welcome to my digital space. I'm <span className='header-left-description-name' >AjAy</span>, a passionate web developer with over 2 years of hands-on experience in crafting dynamic and innovative solutions using MERN Stack technology. Armed with a master's degree in Computer Science, I bring a blend of academic knowledge and real-world expertise to the table.
            </div>
            <a href='https://wa.me/8570996916' target='_blank' className='header-left-button'>
                Let's Connect
            </a>
        </div>
        <div className='header-right'>
            <img src={DP} alt='AjAy SHEOKAND'/>
        </div>

        
    </div>
  )
}
