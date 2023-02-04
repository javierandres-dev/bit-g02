import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BsPlusCircle } from 'react-icons/bs';

export const Form = ({
  task,
  setTask,
  tasks,
  setTasks,
  rename,
  setRename,
  setMessage,
}) => {
  const [exists, setExists] = useState(null);

  useEffect(() => {
    const arr = tasks.filter((item) => item.id === rename);
    setExists(arr[0]);
  }, [rename]);

  const handleInputName = (e) => {
    setTask({ ...task, name: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!task.name.trim())
      return setMessage(
        '⚠️ Por favor primero ingresa un nombre de tarea y luego presiona el botón para agregar la lista. ⚠️'
      );
    const taskId = { ...task, id: uuidv4() };
    setTasks([...tasks, taskId]);
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
        <form className='form'>
          <input type='text' onInput={handleInputRename} value={exists.name} />
          <button onClick={handleClickRename}>Renombrar tarea</button>
        </form>
      ) : (
        <form className='form'>
          <input
            type='text'
            placeholder='Nombre de la tarea...'
            onInput={handleInputName}
            value={task.name}
          />
          <button onClick={handleAdd}>
            Agregar tarea
            <BsPlusCircle className='icon' />
          </button>
        </form>
      )}
    </>
  );
};
