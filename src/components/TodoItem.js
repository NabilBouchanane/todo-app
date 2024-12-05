import React, { useState } from 'react';

const TodoItem = ({ todo, onTodoUpdated, onTodoDeleted }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  // Fonction pour éditer le titre de la tâche
  const handleEdit = () => {
    if (isEditing) {
      // Si nous sommes en mode édition, on sauvegarde
      const updatedTodo = { ...todo, title: newTitle };
      onTodoUpdated(updatedTodo);
    }
    setIsEditing(!isEditing);
  };

  // Fonction pour marquer la tâche comme complétée
  const handleComplete = () => {
    const updatedTodo = { ...todo, completed: !todo.completed };
    onTodoUpdated(updatedTodo); // Mette à jour la tâche
  };

  // Fonction pour supprimer la tâche
  const handleDelete = () => {
    onTodoDeleted(todo.id);
  };

  return (
    <li>
      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
      ) : (
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.title}
        </span>
      )}
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
      <button onClick={handleComplete}>{todo.completed ? 'Undo' : 'Complete'}</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;
