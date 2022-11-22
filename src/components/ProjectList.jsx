import React, { useState } from 'react';
import classes from '../styles/ProjectList.css';
const ProjectList = (props) => 
{
    console.log(props.projects);

    const projects = props.projects;
    
    console.log(projects);
    return(  
        <div className='box'>
            {projects.map 
                (
                    (project, index)=>
                    <div className = 'item' project={project} key={index} ><img src={project.img}></img></div>
                )
            }  
        </div>        
    )    
}
export default ProjectList;