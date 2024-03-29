import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {removeTodo}  from '../features/Todo/TodoSlice'


const Todos = () => {
    const dispatch = useDispatch()
    const todos = useSelector(state=>state.todos)
    console.log(todos);
  return (
    <div>
      {
        todos.map((todo)=>(
            <div>
                <div>{todo.text} <span><button onClick={()=>dispatch(removeTodo(todo.id ))}>Delete</button></span></div>
                
            </div>
        ))
      }
    </div>
  )
}

export default Todos
