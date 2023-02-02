import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const Form = ({ task, setTask, tasks, setTasks, rename, setRename }) => {
  const [exists, setExists] = useState(null);

  useEffect(() => {
    const arr = tasks.filter((item) => item.id === rename);
    setExists(arr[0]);
  }, [rename]);

  const handleInputName = (e) => {
    setTask({ ...task, id: uuidv4(), name: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask({ id: null, name: '', completed: false });
  };

  const handleInputRename = (e) => {
    setExists({ ...exists, name: e.target.value });
  };

  const handleClickRename = (e) => {
    e.preventDefault();
    const arr = [...tasks];
    const i = arr.findIndex((item) => item.id === exists.id);
    arr[i].name = exists.name;
    setTasks(arr);
    setRename(null);
    setExists(null);
  };

  return (
    <>
      {rename && exists ? (
        <form>
          <input type='text' onInput={handleInputRename} value={exists.name} />
          <button onClick={handleClickRename}>Renombrar tarea</button>
        </form>
      ) : (
        <form>
          <input
            type='text'
            placeholder='Nombre de la tarea...'
            onInput={handleInputName}
            value={task.name}
          />
          <button onClick={handleAdd}>Agregar tarea</button>
        </form>
      )}
    </>
  );
};
