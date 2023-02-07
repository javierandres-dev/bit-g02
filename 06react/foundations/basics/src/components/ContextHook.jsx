import React from 'react';
import TaskContext from '../contexts/TaskContext';
import { ContextParent } from './ContextParent';

export const ContextHook = () => {
  return (
    <TaskContext.Provider
      value={{
        id: '0',
        name: 'primer tarea',
        completed: false,
      }}
    >
      <div>ContextHook</div>
      <ContextParent />
    </TaskContext.Provider>
  );
};
