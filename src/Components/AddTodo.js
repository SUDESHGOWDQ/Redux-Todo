import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addTodo}  from '../features/Todo/TodoSlice'

const AddTodo = () => {
    const[input,setInput]= useState('')
    const dispatch = useDispatch()

    function handleSubmit(e){
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <div className='Todo'>
     <form onSubmit={handleSubmit}>
     <input value={input} onChange={(e)=>setInput(e.target.value)}/>
      <button type='submit'>Add</button>
     </form>
    </div>
  )
}

export default AddTodo
