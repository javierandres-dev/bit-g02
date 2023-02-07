import React from 'react';
import useTaskContext from '../hooks/useTaskContext';
import { ContextChildChild } from './ContextChildChild';

export const ContextChild = () => {
  const task = useTaskContext();
  console.log(task);

  return (
    <>
      <div>ContextChild</div>
      <p>Nombre de la tarea: {task.name}</p>
      <ContextChildChild />
    </>
  );
};
