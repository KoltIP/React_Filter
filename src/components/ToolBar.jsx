import React from 'react';
import ToolBarItem from './ToolBarItem';
import classes from '../styles/ToolBar.css';
class ToolBar extends React.Component {
    
    

    render()
    {
        
        
        const tools = this.props;
        const filters = tools.filters;

        return( 
                    
            <div className='toolBarFlex'>
                {filters.map 
                (
                    (filter, index)=>
                    < ToolBarItem filter={filter} key = {index}  />
                )
            }  
            </div>
         )
    }
}
export default ToolBar;