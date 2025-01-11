import React, { useState } from 'react'

const TodoInput = (props) => {
    const [inputText, setInputText] = useState("")

    return (
        <div className='main-todo'>
            <h1 style={{color:"rgb(255, 255, 255)"}}>TodoLIST</h1>
            <div className='input-tag'>
                <input
                 className='input-field' 
                 value={inputText}
                 type='text' 
                 placeholder='Enter Task'
                 onChange={e => {    
                    setInputText(e.target.value)
                 }}/>
                <button
                 onClick={() => {
                    props.addList(inputText)
                    setInputText("")
                 }} 
                 className='submit-btn'>+</button>
            </div>
        </div>
    )
}

export default TodoInput

