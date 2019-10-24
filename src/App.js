import React from "react";
import "./styles/styles.scss";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodosContext from "./context/TodosContext";
import useTodos from "./hooks/useTodos";

const App = () => {
 
  const [todos, addTodo, removeTodo, toggleTodo] = useTodos(
    "https://react-proba.firebaseio.com/todos.json"
  );


  return (
    <TodosContext.Provider
      value={{ todos, addTodo, removeTodo, toggleTodo }}
    >
      <div className="l-app-todo">
        <h1 className="title-page">Todo list</h1>
        <AddTodoForm />
        <TodoList />
      </div>
    </TodosContext.Provider>
  );
};

export default App;
