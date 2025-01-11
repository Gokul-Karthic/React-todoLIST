import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList';
import { useState } from 'react'
import NameTag from './components/NameTag';

function App() {

  const [listTodo,setListTodo] = useState([]);

  let addList = (inputList) =>{
    setListTodo([...listTodo, inputList]);
  }

  return (
    <>
      <div className='main-content'>
        <div className='center-container'>
          <TodoInput addList={addList}/>
          <TodoList/>
          <NameTag/>
        </div>
      </div>

    </>
  )
}

export default App
