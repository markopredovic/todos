import React from 'react';
import Person from './Person'

const personsList = (props) => {
    return(
        props.persons.map(person => <Person key={person.id} {...person}/>)
    )
}

export default personsList;