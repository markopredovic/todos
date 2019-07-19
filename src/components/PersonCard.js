import React from 'react';
import avatar from '../assets/images/avatar.png'


const personCard = () => {
    return(
        <div className="person-card flex p-10">
           <div className="l-img flex-shrink-0 mr-10"><img src={avatar} className="block w-12" alt=""/></div>
           <div className="l-content">
               <h3>Title</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, rerum!</p>
           </div>
        </div>
    )
}

export default personCard;


todo list application with useReducer, useContext, firebase
requirments:
add todo
delete todo
complete / uncheck todo
list todos

build as already have all components / top down approach
