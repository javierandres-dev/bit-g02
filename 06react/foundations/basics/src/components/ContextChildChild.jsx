import React from 'react';
import useTaskContext from '../hooks/useTaskContext';

export const ContextChildChild = () => {
  const task = useTaskContext();
  console.log(task);
  return (
    <>
      <div>ContextChildChild</div>
      <p>Estado de la tarea: {task.completed.toString()}</p>
    </>
  );
};
