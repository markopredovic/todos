import { useEffect, useReducer } from 'react';
import todosReducer from '../reducers/todosReducer'
import axios from 'axios'
import { GET_LIST, ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../types'

const useTodos = url => {
    const initialState = {
      todos: [{ id: 1, name: "REact learning", isCompleted: false }]
    };

    const [state, dispatch] = useReducer(todosReducer, initialState);

    useEffect(() => {
      axios
        .get(url)
        .then(response => response.data)
        .then(todos => {
          let result = [];

          for (const todo in todos) {
            let _todo = todos[todo];
            _todo.parentId = todo;
            result.push(_todo);
          }

          // sort todos by priority
          result.sort((a, b) => {
            if (a.priority < b.priority) {
              return -1;
            }

            if (a.priority > b.priority) {
              return 1;
            }

            return 0;
          });

          dispatch({
            type: GET_LIST,
            payload: result
          });
        });
    }, [url]);

      const addTodo = todo => {
        axios
          .post(url, {
            id: todo.id,
            priority: todo.priority,
            type: todo.type,
            name: todo.name,
            isCompleted: false
          })
          .then(response => response.data)
          .then(data => {
            todo.parentId = data.name;
            dispatch({
              type: ADD_TODO,
              payload: todo
            });
          });
      };

        const removeTodo = parentId => {
          axios
            .delete(`https://react-proba.firebaseio.com/todos/${parentId}.json`)
            .then(() => {
              dispatch({
                type: REMOVE_TODO,
                payload: parentId
              });
            })
            .catch(e => console.log("Remove error: ", e));
        };

        const toggleTodo = todo => {
          axios
            .patch(
              `https://react-proba.firebaseio.com/todos/${todo.parentId}.json`,
              {
                isCompleted: todo.isCompleted
              }
            )
            .then(() => {
              dispatch({
                type: TOGGLE_TODO,
                payload: todo
              });
            });
        };

    return [state.todos, addTodo, removeTodo, toggleTodo];
}

export default useTodos;