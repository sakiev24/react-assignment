import { useState } from 'react';

function TodoInput({ onAdd }) {
  const [inputText, setInputText] = useState('');

  const handleAdd = () => {
    if (inputText.trim()) {
      onAdd(inputText);
      setInputText('');
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter a todo..."
        style={{ padding: '8px', marginRight: '10px' }}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}

function TodoApp() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, text]);
  };

  const clearAll = () => {
    setTodos([]);
  };

  return (
    <div>
      <h3>Todo List</h3>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} />
      {todos.length > 0 && (
        <button onClick={clearAll} style={{ marginTop: '10px' }}>
          Clear All
        </button>
      )}
    </div>
  );
}

export default TodoApp;