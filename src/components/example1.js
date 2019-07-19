import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Todo = (props) => {

    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        axios.get('https://react-proba.firebaseio.com/todos.json')
            .then(response => response.data)
            .then(todos => {
                let result = [];

                for(const todo in todos) {
                    result.push(todos[todo]);
                }

                setTodoList(result);
            })
    }, []);

    const onChangeTodoHandler = (e) => {
        setTodo(e.target.value)
    }

    const addTodoHandler = () => {
        setTodoList([...todoList, todo]);
        axios.post('https://react-proba.firebaseio.com/todos.json', {todoName: todo})
            .then(res => {
                console.log(res)
            }).catch(err => console.log(err))
    }

    return(
        <div style={{display: props.hide === true ? 'none' : 'inherit'}}>
            <input type="text" value={todo} onChange={onChangeTodoHandler}/>
            <button onClick={addTodoHandler}>add</button>
        
            <ul>
                {todoList.map((todo, i) => <li key={i}>{todo.todoName}</li>)}
            </ul>
        </div>
    )
}

export default Todo;