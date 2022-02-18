import React, { useState } from 'react';
import { addTodo } from '../../redux/actions';
import { v1 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';

function TodoInput() {
    let [name, setName] = useState();
    let dispatch = useDispatch();
    return (
        <div className=''>
            <div className="flex">
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text" className="w-full border border-black rounded" />
                <button
                    onClick={() => {
                        dispatch(addTodo({
                            id: Math.random(),
                            name: name
                        }));
                        setName('');
                    }}
                    type="button"
                    className="inline-flex ml-4 items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Add
                </button>
            </div>
        </div>
    )
}

export default TodoInput;
