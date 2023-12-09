import React from 'react';
import standingMan from "../../assets/images/portfolio/standingMan.png"

export const Contact = () => {
  return (
    <div className='contact' id='contact'>
        <div className='contact-title'>
            Contact Me
        </div>
        <div className='flex justify-around'>
            <div>
                <img src={standingMan} alt='Contact Us'/>
            </div>
        <form className="contact-form">
            <input type='text' className='contact-form-input-field' placeholder='Email Address'/>
            <input type='text' className='contact-form-input-field' placeholder='Subject'/>
            <textarea className='contact-form-input-field' placeholder='Message'/>
            <button className='contact-form-button'>Send Message</button>
        </form>
        </div>
        
    </div>
  )
}
