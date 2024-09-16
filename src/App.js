import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, editTodo } from './features/Todo/TodoSlice';
import './App.css'; 

const App = () => {
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null);
 
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  function handleSubmit(e) {
    e.preventDefault();
    if (editId) {
      dispatch(editTodo({
        id: editId,
        newText: input
      }));
      setEditId(null);
      setInput('');
    } else {
      // Add new todo
      dispatch(addTodo(input));
      setInput('');
    }
  }

  function handleEdit(todo) {
    setEditId(todo.id);
    setInput(todo.text);
  }

  return (
    <div className='Todo'>
      <form onSubmit={handleSubmit} className='form'>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className='input'
        />
        <button type='submit' className='button'>
          {editId ? 'Save' : 'Add'}
        </button>
      </form>
      <table className='todo-table'>
        <thead>
          <tr>
            <th>Todo</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.text}</td>
              <td>
                <button
                  onClick={() => handleEdit(todo)}
                  className='edit-button'
                >
                  Edit
                </button>
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className='delete-button'
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
