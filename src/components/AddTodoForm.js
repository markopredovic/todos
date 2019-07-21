import React, { useRef, useContext, useState } from "react";
import Modal from 'react-modal';
import todosContext from "../context/TodosContext";
import { validate } from "../helpers";

const customStyles = {
  content : {
    top                   : '20%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 :  '500px'
  }
};


const AddTodoForm = () => {
  const addTodoRef = useRef(null);
  const priorityTodoRef = useRef(null);
  const typeTodoRef = useRef(null);
  const modalRef = useRef(null)
  
  const [toggleForm, setToggleForm] = useState(true)
  const [validationErrors, setValidationErrors] = useState({});


  const context = useContext(todosContext);

  const onFormSubmitHandler = e => {
    e.preventDefault();

    const todo = {
      id: Date.now(),
      name: addTodoRef.current.value,
      isCompleted: false,
      priority: priorityTodoRef.current.value,
      type: typeTodoRef.current.value
    };

    const errors = validate(todo);

    console.log(errors)

    if(Object.keys(errors).length === 0) {
      context.addTodo(todo);

      priorityTodoRef.current.value = null;
      typeTodoRef.current.value = null;
      addTodoRef.current.value = null;
    } else {
        setValidationErrors(errors);
    }

  };

  const toggleFormHandler = (e) => {
    e.preventDefault();

    setToggleForm(!toggleForm);
  }

  const closeModal = () => {
    setValidationErrors({});
  }

  const afterOpenModal = () => {
    modalRef.current.style.color = '#000';
  }

  return (
    <>
    <div className="addTodoForm">
      <a href="#" className="btn btn-toggle" onClick={toggleFormHandler} >
      {toggleForm === true ? 'Hide' : 'Show'} form
      </a>
      <form onSubmit={onFormSubmitHandler} style={{display: toggleForm ? 'block' : 'none'}}>
        <div className="l-field">
          <select ref={priorityTodoRef}>
            <option value="null">Select Priority:</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
          <select ref={typeTodoRef}>
            <option value="null">Select Type:</option>
            <option value="common">Common</option>
            <option value="learning">Learning</option>
            <option value="reminder">Reminder</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="l-field">
          <input type="text" placeholder="add todo..." ref={addTodoRef} />
          <button type="submit">add todo</button>
        </div>
      </form>
    </div>
    <Modal
      isOpen={Object.keys(validationErrors).length > 0}
      onAfterOpen = {afterOpenModal}
      onRequestClose = {closeModal}
      style={customStyles}
    >
      <div ref={modalRef}>
        <h3>Validation errors</h3>
        <ul>
          {Object.keys(validationErrors).map((item, index) => <li key={index}>{validationErrors[item]}</li>)}
        </ul>
      </div>
    </Modal>
    </>
  );
};

export default AddTodoForm;
