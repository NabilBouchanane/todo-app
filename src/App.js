import React, { useState, useEffect } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import todoService from './services/todoService'; // Service pour l'appel API

const App = () => {
  const [todos, setTodos] = useState([]);

  // Récupérer les tâches au chargement de l'application
  useEffect(() => {
    todoService
      .getAll()
      .then((response) => setTodos(response.data))
      .catch((error) => console.error('Erreur lors du chargement des tâches:', error));
  }, []);

  // Fonction pour ajouter une nouvelle tâche
  const handleTodoAdded = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  // Fonction pour mettre à jour une tâche (complete ou modifier le titre)
  const handleTodoUpdated = (updatedTodo) => {
    setTodos(todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)));
  };

  // Fonction pour supprimer une tâche
  const handleTodoDeleted = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo Application</h1>
      <AddTodo onTodoAdded={handleTodoAdded} />
      <TodoList
        todos={todos}
        onTodoUpdated={handleTodoUpdated}
        onTodoDeleted={handleTodoDeleted}
      />
    </div>
  );
};

export default App;
