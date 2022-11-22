import React from 'react';
import classes from '../styles/ProjectList.css';
class ProjectList extends React.Component {
    
    render()
    {
        const cards = this.props;
        console.log(cards.cards.data);
        return(  
            <div className='box'>
                {cards.cards.data.map 
                    (
                        (card, index)=>
                        <div className = 'item' card={card} key={index} ><img src={card.img}></img></div>
                    )
                }  
            </div>
        
        )
    }
}
export default ProjectList;