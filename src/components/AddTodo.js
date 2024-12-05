import React, { useState } from 'react';
import todoService from '../services/todoService'; // Service pour l'API

const AddTodo = ({ onTodoAdded }) => {
  const [todoTitle, setTodoTitle] = useState('');

  const handleAddTodo = () => {
    if (!todoTitle.trim()) {
      alert('Veuillez entrer un titre valide pour la tâche.');
      return;
    }

    const newTodo = {
      title: todoTitle,
      completed: false,
    };

    // Appel API pour ajouter la tâche
    todoService
      .create(newTodo)
      .then((response) => {
        onTodoAdded(response.data); // Ajoute la nouvelle tâche à la liste
        setTodoTitle(''); // Réinitialiser le champ de texte
      })
      .catch((error) => console.error('Erreur lors de l\'ajout de la tâche:', error));
  };

  return (
    <div>
      <input
        type="text"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
        placeholder="Ajouter une tâche"
      />
      <button onClick={handleAddTodo}>Ajouter</button>
    </div>
  );
};

export default AddTodo;
