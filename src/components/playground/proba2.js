import React, {useState, useEffect} from 'react';

const Proba2 = () => {


    const [note, setNote] = useState('');

    // component did mount
    useEffect(()=>{
        console.log('Use effect - component did mount');
        setNote('This is some note');
    }, [])


    const updateNote = note => {
        setNote(note);
    }

    useEffect(()=>{
        console.log("Use effect - component did update (note updated)");
    }, [note])
    

    return (
        <div>
            {note}
            <div>
                update note: <br/>
                <button onClick={() => updateNote('Hello world' + Math.random() * 1000)}>Update note</button>
            </div>
        </div>
    )
}

export default Proba2;