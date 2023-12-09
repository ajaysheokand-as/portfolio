import React from 'react';
import gmail from "../../assets/images/portfolio/icons/gmail.svg";
import whatsapp from "../../assets/images/portfolio/icons/whatsapp.svg";
import linkedin from "../../assets/images/portfolio/icons/linkedin.svg";

export const Footer = () => {
  return (
    <div className='footer flex justify-around flex-wrap'>
        <div className='flex flex-col'>
        <div className='footer-title text-center'>Social Media</div>
        <div className='flex'>
            <a href="mailto:ajaysheokand.as@gmail.com" target='_blank'><img src={gmail} alt="gmail"/></a>
            <a href="https://wa.me/8570996916" target='_blank'><img src={whatsapp} alt="Whatsapp"/></a>
            <a href="https://www.linkedin.com/in/ajay-sheokand-211a531a5" target='_blank'><img src={linkedin} alt="Linkedin"/></a>
        </div>
        </div>
        <div className='footer-title align-middle mt-5'>copyright @ AjAy SHEOKAND</div>
    </div>
  )
}
