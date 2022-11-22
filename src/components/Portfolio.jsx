import React, { useState } from 'react';
import classes from '../styles/Portfolio.css';
import ToolBar from './ToolBar';
import ProjectList from './ProjectList';

const Portfolio = (props) => {
    const [projects, setProjects] = useState(props.projects);
    const [filters, setFilters] = useState(props.filters);
      
    const Sort = (filter) => 
    {
        var buffer= [];

        filter = 'Flayers';       
        var projectsModels = projects;
        var length = projectsModels.length;
        for (var i=0;i< length;i++){
            var category = projectsModels[i].category;            
            if (projectsModels[i].category == filter)
                buffer.push(projectsModels[i]);            
        }
        setProjects(buffer);
    }      
        
    return(  
    <>
        <ToolBar filters={filters} selected="Flayers" onSelectFilter={() =>Sort(filters.selected)}/>            
        <ProjectList projects = {projects}/>
    </>
    )    
}
export default Portfolio;