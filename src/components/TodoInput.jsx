import React, { useState } from "react";

function TodoInput({ addTodo }) {
    const [showInput, setShowInput] = useState(false);
    const [judul, setJudul] = useState('')
    const [deskripsi, setDeskripsi] = useState('')

    const tambahTodo = () => {
        if(judul.trim() !== '' && deskripsi.trim() !== ''){
            addTodo({
                judul,
                deskripsi
            })
            setJudul('')
            setDeskripsi('')
            setShowInput(false)
        }

    }


    return(
        <div className="max-w-sm sm:w-2/3 sm:max-w-4xl flex justify-center w-11/12 mx-auto bg-blue-500 px-5 py-4 rounded-lg">
            {!showInput && 
                <button className="bg-blue-50 text-blue-950 w-full rounded-lg py-2 font-medium"
                onClick={() => setShowInput(true)}>Add To-do</button>
            }
            {showInput && 
            <div className="flex flex-col w-full gap-2 bg-white p-5 rounded-lg">
                <input className="border rounded-md p-2 placeholder:font-bold focus:outline font-bold text-lg" 
                type="text" placeholder="Add title" value={judul} onChange={(e) => setJudul(e.target.value)}/>
                <textarea className="border rounded-md p-2 focus:outline resize-none text-sm"
                placeholder="Add todo here"  value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)}></textarea>
                <button className="bg-neutral-900 text-white p-1 rounded-md"
                 onClick={tambahTodo}>Add Todo</button>
            </div>
            }
        </div>
            
    )
}

export default TodoInput
