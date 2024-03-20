import React, { useState } from 'react';


function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');

  const addTodo = () => {
    if (inputText.trim() !== '') {
      setTodos([...todos, inputText]);
      setInputText('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const editTodo = (index) => {
    const newText = prompt('Edit todo:', todos[index]);
    if (newText !== null && newText.trim() !== '') {
      const updatedTodos = [...todos];
      updatedTodos[index] = newText;
      setTodos(updatedTodos);
    }
  };

  return (
    <div className="todo-container">
      <h2>Todo List</h2>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Add new todo"
        className="todo-input"
      />
      <button onClick={addTodo} className="btn">Add Todo</button>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            {todo}
            <div>
              <button onClick={() => editTodo(index)} className="btn">Edit</button>
              <button onClick={() => deleteTodo(index)} className="btn">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
