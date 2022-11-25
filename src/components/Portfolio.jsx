import React, { useState } from 'react';
import classes from '../styles/Portfolio.css';
import ToolBar from './ToolBar';
import ProjectList from './ProjectList';

const Portfolio = (props) => {
    const [projects, setProjects] = useState(props.projects);
    const [filters, setFilters] = useState(props.filters);  
        
    return(  
    <>
        <ToolBar
            filters={filters}
            selected="All"
            onSelectFilter={
                (filter) =>
                {                     
                    var projectsModels = props.projects;
                    if (filter=='All')
                        setProjects(projectsModels);
                    else
                    {
                        var buffer= [];
                        var length = projectsModels.length;
                        for (var i=0;i< length;i++){
                            var category = projectsModels[i].category;            
                            if (projectsModels[i].category == filter)
                                buffer.push(projectsModels[i]);            
                        }
                        setProjects(buffer);
                    }
                }
            }/>            
        <ProjectList projects = {projects}/>
    </>
    )    
}
export default Portfolio;