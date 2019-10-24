import React from 'react';

const test = (props) => {
    console.log('Test rendering');
    
    return(
        <div>{props.name}</div>
    )
}

export default test;