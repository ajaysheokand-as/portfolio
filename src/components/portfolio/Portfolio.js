import React from 'react'
import { Navbar } from './Navbar'
import { Header } from './Header'
import { Skills } from './Skills'
import { Projects } from './Projects'
import { Contact } from './Contact'
import { Footer } from './Footer';
import { SkillsItem } from '../../data/SkillsLogo';
import { tools } from '../../data/SkillsLogo';
import { Chat } from './Chat'

export const Portfolio = () => {
  return (
    <div className='portfolio'>
        <Chat/>
        <Navbar/>
        <Header/>
        <Skills data={SkillsItem} title="Skills" id="skills"/>
        <Projects/>
        <Skills data={tools} title="Tools" id="tools" />
        <Contact/>
        <Footer/>
    </div>
  )
}
