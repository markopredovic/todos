import React, { useEffect, useRef } from 'react'

const TestRef = () =>  {

    const inputElementRef = useRef();
    const toggleButtonRef = useRef();

    useEffect( () => {
            //this.inputEl.focus();
            toggleButtonRef.current.click();
        }) 


    const toggleHandler = () => {
        document.querySelector('.content').style['display'] = 'block';
    }
    

    return (
        <div>
            <h1>Testing ref</h1>
            <input type="text"/>
            {/* <input type="text" ref={input => this.inputEl = input}/> */}
            <input type="text" ref={inputElementRef}/>
            <button ref={toggleButtonRef} onClick={toggleHandler}>Submit</button>
            <div className="content" style={{padding: '10px', border: '1px solid', display: 'none'}}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, ea?
            </div>
        </div>
    )

}

export default TestRef