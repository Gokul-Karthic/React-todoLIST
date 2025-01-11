import React, { useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import NameTag from './components/NameTag'

function App() {
  const [listTodo, setListTodo] = useState([]);

  const addList = (inputText) => {
    if(inputText.trim() !== ""){
      setListTodo([...listTodo, inputText]);
    }
  }

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo(newListTodo);
  }

  return (
    <div className='main-content'>
      <div className='center-container'>
        <TodoInput addList={addList}/>
        <TodoList item={listTodo} deleteItem={deleteListItem} />
        <NameTag/>
      </div>
    </div>
  )
}

export default App

