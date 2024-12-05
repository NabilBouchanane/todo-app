import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onTodoUpdated, onTodoDeleted }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onTodoUpdated={onTodoUpdated}
          onTodoDeleted={onTodoDeleted}
        />
      ))}
    </ul>
  );
};

export default TodoList;
