import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, GET_LIST } from '../types';


export default (state, action) => {
    switch(action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case REMOVE_TODO:
            return removeTodo(state, action.payload)
        case TOGGLE_TODO:
            return toggleTodo(state, action.payload)
        case GET_LIST:
            return {
                ...state,
                todos: action.payload
            }
        default: 
            return state;
    }
}

const removeTodo = (state, parentId) => {
    let currentTodos = [...state.todos];
    const index = currentTodos.findIndex(todo => todo.parentId === parentId);
    currentTodos.splice(index, 1);

    return {
        ...state,
        todos: currentTodos
    }
}

const toggleTodo = (state, todo) => {
    const toggleTodos = [...state.todos].map(current => current.id === todo.id ? {id: current.id, priority: current.priority, type: current.type, name: current.name, isCompleted: todo.isCompleted, parentId: current.parentId} : current);
    
    return {
        ...state,
        todos: toggleTodos
    }
}

