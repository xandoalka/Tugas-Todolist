import React from 'react';

const TodoList = ({ todos, removeTodo }) => {
  return (
        <div className='max-w-sm sm:w-2/3 sm:max-w-4xl  flex items-center flex-col w-11/12 py-6 mx-auto bg-blue-500 rounded-lg relative max-h-[35rem] '>
            <h2 className='font-semibold text-xl bg-white py-2 px-3 text-blue-900 absolute z-10 -top-3 -right-4 border shadow-lg rounded-lg'>To do Lists</h2>
            {todos.length > 0 ? (
                <ul className=' flex sm:justify-between sm:flex-row sm:flex-wrap flex-col gap-y-3 w-full py-4 px-5 overflow-y-scroll scroll-smooth'>
                    {todos.map((todo, index) => (
                        <li className='bg-white py-2 px-4 rounded-lg break-words sm:w-[49%]' key={index}>
                            <h3 className='text-2xl font-semibold text-blue-800 mb-4 capitalize'>{todo.judul}</h3>
                            <p>{todo.deskripsi}</p>
                            <button className='float-right border-2 rounded-lg text-white p-1'
                             onClick={() => removeTodo(index)}>❌</button>
                        </li>
                    ))}
                </ul>
            ) : (
            <p className='text-white'>Todo Kosong</p>
            )}
        </div>
    )
}

export default TodoList;