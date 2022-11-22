import React from 'react';
import classes from '../styles/Portfolio.css';
import ToolBar from './ToolBar';
import ProjectList from './ProjectList';

class Portfolio extends React.Component {
    
    render()
    {
        const cards = this.props;
        
        console.log(cards);

        return(  
        <>
            <ToolBar filters={["All", "Websites", "Flayers", "Business Cards"]} selected="All" onSelectFilter={(filter) => {console.log(filter);}}/>
            <ProjectList cards = {cards}/>            
        </>
        )
    }
}
export default Portfolio;