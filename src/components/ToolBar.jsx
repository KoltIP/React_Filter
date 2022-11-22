import React from 'react';
import classes from '../styles/ToolBar.css';
import { useState } from 'react';

const ToolBar = (props) =>  {  

        const tools = props;

        const filters = tools.filters;     
        var activeFilter = props.selected;
        const action = props.onSelectFilter;

        //window.onload = action(activeFilter);

        const Show = (filter) => 
        {
            action(filter);
            activeFilter = filter;
            let addedclass = 'toolBarItemActive';

            for (var i=0;i<filters.length;i++) 
            {    
                var element = document.getElementById(filters[i]);          
                element.classList.remove(addedclass);                
            }

            var div = document.getElementById(filter);
            div.classList.add(addedclass);
        }

        return( 
                    
            <div id="toolbar" className='toolBarFlex'>
                {filters.map 
                (
                    (filter, index)=>
                    <div id={filter} key={index} onClick={() => Show({filter}.filter)} className='toolBarItem'>{filter}</div>
                )
            }  
            </div>
         )
    
}
export default ToolBar;