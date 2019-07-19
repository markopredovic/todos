import React, { useRef, useContext } from 'react';
import todosContext from '../context/TodosContext';

const AddTodoForm = () => {

    const addTodoRef = useRef(null)

    const context = useContext(todosContext);


    const onFormSubmitHandler = (e) => {
        e.preventDefault();

        console.log(addTodoRef.current.value)

        const todo = {
            id: Date.now(),
            name: addTodoRef.current.value,
            isCompleted: false
        }

        context.addTodo(todo);

        addTodoRef.current.value = null;
    }

    return(
        <form onSubmit={onFormSubmitHandler}>
            <input type="text" placeholder="add todo..." ref={addTodoRef} />
            <button type="submit">add todo</button>
        </form>
    )
}

export default AddTodoForm;