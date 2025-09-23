import React, { useState } from 'react';
import './TaskList.css';

function TaskList() {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleAdd = () => {
    if (input.trim() !== '') {
      if (editIndex !== null) {
        // Atualiza item existente
        const updated = [...items];
        updated[editIndex] = input;
        setItems(updated);
        setEditIndex(null);
      } else {
        setItems([...items, input]);
      }
      setInput('');
    }
  };

  const handleDelete = (idx) => {
    setItems(items.filter((_, i) => i !== idx));
    // Se estiver editando o item removido, limpa o input
    if (editIndex === idx) {
      setInput('');
      setEditIndex(null);
    }
  };

  const handleEdit = (idx) => {
    setInput(items[idx]);
    setEditIndex(idx);
  };

  return (
    <div className="task-list-container">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Digite algo..."
      />
      <button onClick={handleAdd}>{editIndex !== null ? 'Salvar' : 'Adicionar'}</button>
      {items.length > 0 && (
        <ul>
          {items.map((item, idx) => (
            <li key={idx}>
              {item}
              <button className="edit-btn" onClick={() => handleEdit(idx)}>Editar</button>
              <button className="delete-btn" onClick={() => handleDelete(idx)}>Excluir</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
