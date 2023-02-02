import React from 'react';

export const PendingTasks = ({
  pending,
  handleChange,
  handleClick,
  setRename,
}) => {
  const elements = pending.map((task) => (
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
      <span onClick={() => setRename(task.id)}>Renombrar</span>
      <span onClick={() => handleClick(task.id)}>Eliminar</span>
    </li>
  ));

  return (
    <>
      {pending.length ? (
        <>
          <h2>Tareas pendientes</h2>
          <ol>{elements}</ol>
        </>
      ) : (
        <h2>Sin tareas pendientes</h2>
      )}
    </>
  );
};
