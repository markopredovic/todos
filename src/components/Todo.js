import React, { useContext } from 'react';
import todosContext from '../context/TodosContext'


const Todo = ({id, priority, type, name, isCompleted, parentId }) => {

    const context = useContext(todosContext)

    return(
        <div className={`l-todo m-todo ${priority === 'A' ? 'priority-a' : priority === 'B' ? 'priority-b' : 'priority-c'}`}>
            <span className="description" onClick={() => context.toggleTodo({id, priority, type, name, isCompleted: !isCompleted, parentId})} style={{textDecoration: isCompleted ? 'line-through' : 'inherit'}}>{name}</span>
            <button onClick={() => context.removeTodo(parentId)}><span className="close">&#10006;</span></button>
        </div>
    )
}

export default Todo;