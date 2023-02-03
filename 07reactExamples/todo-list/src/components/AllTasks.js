import React, { useState, useEffect } from 'react';
import { CompletedTasks } from './CompletedTasks';
import { PendingTasks } from './PendingTasks';

export const AllTasks = ({ tasks, setTasks, setRename }) => {
  const [pending, setPending] = useState([]);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    const pendingArr = [];
    const completedArr = [];

    for (const element of tasks) {
      if (element.completed === true) completedArr.push(element);
      else pendingArr.push(element);
    }
    setPending(pendingArr);
    setCompleted(completedArr);
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const handleChange = (id) => {
    const arr = [...tasks];
    const i = arr.findIndex((item) => item.id === id);
    arr[i].completed = !arr[i].completed;
    setTasks(arr);
  };

  const handleClick = (id) => {
    const arr = tasks.filter((item) => item.id !== id);
    setTasks(arr);
    if (arr.length === 0) localStorage.removeItem('tasks');
  };

  let output = null;

  pending.length || completed.length
    ? (output = (
        <>
          <PendingTasks
            pending={pending}
            handleChange={handleChange}
            handleClick={handleClick}
            setRename={setRename}
          />
          <CompletedTasks
            completed={completed}
            handleChange={handleChange}
            handleClick={handleClick}
          />
        </>
      ))
    : (output = <h2>Sin tareas</h2>);

  return <>{output}</>;
};
