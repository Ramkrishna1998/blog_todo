import React, { useMemo } from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux';

function TodoList() {
    let todos = useSelector(state => state);

    return (
        <div className="my-4">
               {useMemo(() => {
                  return(
                    todos.map((todo) => {
                        return <TodoItem key={todos.id} todo={todo} />;
                    })
                  )
               })}
        </div>
    )
}

export default TodoList
