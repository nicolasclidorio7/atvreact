import React, { useState } from 'react';
import './TaskList.css';

function TaskList() {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleAdd = () => {
    if (input.trim() !== '') {
      setItems([...items, input]);
      setInput('');
    }
  };

  return (
    <div className="task-list-container">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Digite algo..."
      />
      <button onClick={handleAdd}>Adicionar</button>
      {items.length > 0 && (
        <ul>
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
