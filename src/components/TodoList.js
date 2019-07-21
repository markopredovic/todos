import React, { useContext } from 'react';
import TodosContext from '../context/TodosContext'
import Todo from './Todo'

const TodoList = () => {

    const context = useContext(TodosContext);

    let todos = 'Loading...';

    if(context.todos) {
        todos = context.todos.map((todo, index) => <Todo key={index} {...todo}/>);
    }

    return(
        <div className="l-todoList">{todos}</div>
    )
}

export default TodoList;