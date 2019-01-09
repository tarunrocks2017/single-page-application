import React from 'react';

const Options = (props) => {
        return(
           <option value={props.option.movieid}>{props.option.moviename}</option>
        )
    
}

export default Options;