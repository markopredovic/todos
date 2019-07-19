import React from 'react';
import AuthContext from './Context';

const person = ({name, profession}) => {
    return(
        <AuthContext.Consumer>
            {(context) => <div>{name} / {context.isAuthenticated && profession} / <button onClick={context.login}>Login</button></div>}
        </AuthContext.Consumer>
        
        
    )
}

export default person;