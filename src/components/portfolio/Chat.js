import React from 'react';
import whatsApp from "../../assets/images/portfolio/icons/whatsapp.webp";

export const Chat = () => {
  return (
    <a href='https://wa.me/8570996916' target='_blank' className='chat-icon'>
        <img src={whatsApp} alt='WhatsApp Cjat'/>
    </a>
  )
}
