import React, { useState, useEffect } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import { createPortal } from 'react-dom'
import Modal from './components/Modal'

const App = () => {
  const [todos, setTodos] = useState([])
  const [klik, setKlik] = useState(false)

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  const addTodo = (todo) => {
    const updatedTodos = [todo, ...todos];
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const openModal = () => {
    setKlik(true)
  }
  const closeModal = () => {
    setKlik(false)
  }

  return (
      <section className='relative flex flex-col gap-6'>
        
        {!klik && (
          <>
            <div className='max-w-sm sm:w-2/3 sm:max-w-4xl flex justify-center items-center w-11/12 h-16 mt-8 mx-auto bg-blue-500 rounded-lg'>
              <h1 className='text-white font-bold text-xl'>To-Do List</h1>
            </div>
            <div className='flex flex-col gap-6'>
              <TodoInput addTodo={addTodo} />
              <TodoList todos={todos} removeTodo={removeTodo} />
            </div>
            <button onClick={openModal} className='bg-neutral-800 text-white p-2 w-fit mx-auto rounded-md'>Klik aja</button>
          </>
        )}
        {klik && createPortal(<Modal close={closeModal}></Modal>,
        document.getElementById('modal')
        )}
      </section>
  )
}

export default App
