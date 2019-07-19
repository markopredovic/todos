import React, { useEffect, useReducer } from "react";
import "./App.css";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodosContext from "./context/TodosContext";
import todosReducer from "./reducers/todosReducer";
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, GET_LIST } from "./types";
import axios from "axios";

const App = () => {
  const initialState = {
    todos: [{ id: 1, name: "REact learning", isCompleted: false }]
  };

  const [state, dispatch] = useReducer(todosReducer, initialState);

  useEffect(() => {
    axios
      .get("https://react-proba.firebaseio.com/todos.json")
      .then(response => response.data)
      .then(todos => {
        let result = [];

        for (const todo in todos) {
          let _todo = todos[todo];
          _todo.parentId = todo;
          result.push(_todo);
        }

        dispatch({
          type: GET_LIST,
          payload: result
        })
      });
  }, []);

  const addTodo = todo => {
    // also add to firebase
    axios
      .post("https://react-proba.firebaseio.com/todos.json", {
        id: todo.id,
        name: todo.name,
        isCompleted: false
      })
      .then(response => response.data)
      .then(data => {
        todo.parentId =  data.name;
        dispatch({
          type: ADD_TODO,
          payload: todo
        });
      })
  };
  const removeTodo = parentId => {

    axios.delete(`https://react-proba.firebaseio.com/todos/${parentId}.json`)
      .then(() => {
        dispatch({
          type: REMOVE_TODO,
          payload: parentId
        });
      })
  };

  const toggleTodo = todo => {

    axios.patch(`https://react-proba.firebaseio.com/todos/${todo.parentId}.json`, {isCompleted: todo.isCompleted})
      .then(() => {
        dispatch({
          type: TOGGLE_TODO,
          payload: todo
        });
      })




  };

  return (
    <TodosContext.Provider
      value={{ todos: state.todos, addTodo, removeTodo, toggleTodo }}
    >
      <div className="App">
        <h1>Todo list</h1>
        <AddTodoForm />
        <TodoList />
      </div>
    </TodosContext.Provider>
  );
};

export default App;
