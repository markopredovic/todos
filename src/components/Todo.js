import React, { useContext } from 'react';
import todosContext from '../context/TodosContext'


const Todo = ({id, name, isCompleted, parentId}) => {

    const context = useContext(todosContext)

    return(
        <div>
            <span onClick={() => context.toggleTodo({id, name, isCompleted: !isCompleted, parentId})} style={{textDecoration: isCompleted ? 'line-through' : 'inherit'}}>{name}</span>
            <button onClick={() => context.removeTodo(parentId)} style={{marginLeft: '10px'}}>x</button>
        </div>
    )
}

export default Todo;