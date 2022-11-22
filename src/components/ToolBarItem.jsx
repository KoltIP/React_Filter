import React from 'react';
import classes from '../styles/ToolBar.css';

class ToolBarItem extends React.Component {
    
    render()
    {        
        
        const filter = this.props;

        const Show = (filter) => {
            console.log(filter);
            var div = document.getElementById(filter);
            div.classList.add("toolBarItemActive")
        }

        return(                       
             <div id={filter.filter} onClick={() => Show(filter.filter)} className='toolBarItem'>{filter.filter}</div>  
        )
    }
}
export default ToolBarItem;