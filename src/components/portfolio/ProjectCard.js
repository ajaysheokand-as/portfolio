import React from 'react'

export const ProjectCard = (props) => {
    console.log("props=>", props);
  return (
    <div key={props.key} className='card'>
        <div className='card-image'>
            <img src={props.data.img} alt={"img"}/>
        </div>
        <div className='card-description'>
            {props.data.description}
        </div>
        <a href={props.data.link} target='_blank' rel='noreferrer'>
        <div className='card-button'>
             Visit {props.data.title}
        </div>
        </a> 
    </div>
  )
}
