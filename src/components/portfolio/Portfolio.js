import React from 'react'
import { Navbar } from './Navbar'
import { Header } from './Header'
import { Skills } from './Skills'
import { Projects } from './Projects'
import { Contact } from './Contact'
import { Footer } from './Footer'

export const Portfolio = () => {
  return (
    <div className='portfolio'>
        <Navbar/>
        <Header/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  )
}
