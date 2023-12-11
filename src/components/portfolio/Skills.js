import React from 'react';


export const Skills = (props) => {
  console.log("props Data=>", props);
  return (
    <div className='skills pt-5' id={props.id}>
        <div className='skills-title'>
            {props.title}
        </div>
        <div className='skills-item'>
            {
                props.data.map((item, index) => {
                   return <img key={index} src={item.img} alt={item.title} />
                })
            }
            
        </div>
        
    </div>
  )
}
