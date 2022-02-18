import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../../redux/actions';

function TodoItem({ todo }) {
    const [editable, setEditable] = useState(false)
    const [name, setName] = useState(todo.name)
    let dispatch = useDispatch();

    return (
        <div className=''>
            <div className="flex justify-between">
                <div className="mt-4">
                    {editable ?
                        <input type="text" className="text-center border border-black rounded"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}

                        />
                        :
                        <h4>{todo.name}</h4>}
                </div>
                <div className='mt-4'>
                    <button
                        onClick={() => {
                            dispatch(updateTodo({
                                ...todo,
                                name: name
                            }))
                            if (editable) {
                                setName(todo.name);
                            }
                            setEditable(!editable);


                        }}
                        type="button"
                        className="inline-flex ml-4 items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        {editable ? "Update" : "Edit"}
                    </button>
                    <button
                        onClick={() => dispatch(deleteTodo(todo.id))}
                        type="button"
                        className="inline-flex ml-4 items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Delete
                    </button>
                </div>

            </div>
        </div>
    )
}

export default TodoItem
