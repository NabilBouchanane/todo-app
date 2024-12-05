import axios from 'axios';

const API_URL = 'http://localhost:8080/api/tasks';

// Fonction pour récupérer toutes les tâches
const getAll = () => {
  return axios.get(API_URL);  // Retourne une promesse
};

// Fonction pour créer une nouvelle tâche
const create = (todo) => {
  return axios.post(API_URL, todo);  // Retourne une promesse
};

// Fonction pour mettre à jour une tâche
const update = (id, todo) => {
  return axios.put(`${API_URL}/${id}`, todo);  // Retourne une promesse
};

// Fonction pour supprimer une tâche
const remove = (id) => {
  return axios.delete(`${API_URL}/${id}`);  // Retourne une promesse
};

// Exportation des méthodes comme un objet
const todoService = {
  getAll,
  create,
  update,
  remove,
};

export default todoService;
