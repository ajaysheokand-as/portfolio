import React from 'react';
import {SkillsItem} from "../../data/SkillsLogo"


export const Skills = () => {
  return (
    <div className='skills' id='skills'>
        <div className='skills-title'>
            Skills
        </div>
        <div className='skills-item'>
            {
                SkillsItem.map((item, index) => {
                   return <img key={index} src={item.img} alt={item.title} />
                })
            }
            
        </div>
        
    </div>
  )
}
