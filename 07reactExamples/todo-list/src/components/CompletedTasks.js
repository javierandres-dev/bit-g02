import React from 'react';

export const CompletedTasks = ({ completed, handleChange, handleClick }) => {
  const elements = completed.map((task) => (
    <li key={task.id}>
      {task.name}
      <label>
        Completada
        <input
          type='checkbox'
          checked={task.completed}
          onChange={() => handleChange(task.id)}
        />
      </label>
      <span onClick={() => handleClick(task.id)}>Eliminar</span>
    </li>
  ));

  return (
    <>
      {completed.length ? (
        <>
          <h2>Tareas completadas</h2>
          <ol>{elements}</ol>
        </>
      ) : (
        <h2>Sin tareas completadas</h2>
      )}
    </>
  );
};
