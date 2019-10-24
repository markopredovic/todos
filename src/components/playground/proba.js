import React, { useState, useEffect } from "react";
import Test from './Test'

const Proba = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");

  const [name, setName] = useState('Marko')

  // component did mount
  useEffect(() => {
    const notes = getNotes();
    setNotes(notes);
    setName('Markoni');
  }, [])

  const addNoteHandler = e => {
    e.preventDefault();

    setNotes(notes.concat(title))
  };

  useEffect(() => {
    console.log('Note added, save to local storage')
    saveNotes(notes);

    return () => {
      console.log('Cleaning component ...')
    }
  }, [notes])

  const saveNotes = notes => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }

  const getNotes = () => {
    const notes = localStorage.getItem('notes');

    return JSON.parse(notes);
  }

  const deleteNotes = () => {
    setNotes([]);
  }

  const changeNameHandler = () => {
    setName(Math.random())
  }

  return (
    <div>
      Proba page
      <div>
        <button onClick={changeNameHandler}>change name</button>
        <Test name={name}/>
        add note:
        <br />
        <form onSubmit={addNoteHandler}>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          <button type="submit">Add Note</button>
        </form>
      </div>
      <div>
        Notes list:
        <br />
        <ul>{notes.map((note, index) => <li key={index}>{note}</li>)}</ul>
        <button onClick={deleteNotes}>Delete all notes</button>
      </div>
    </div>
  );
};

export default Proba;
