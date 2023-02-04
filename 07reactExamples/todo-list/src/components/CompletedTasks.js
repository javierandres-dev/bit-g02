import React from 'react';
import { BsFillCheckCircleFill, BsTrashFill } from 'react-icons/bs';

export const CompletedTasks = ({ completed, handleChange, handleClick }) => {
  const elements = completed.map((task) => (
    <li key={task.id}>
      <div>
        <div>{task.name}</div>
        <div>
          <label>
            <BsFillCheckCircleFill className='icon-size green' />
            <input
              type='checkbox'
              checked={task.completed}
              onChange={() => handleChange(task.id)}
            />
          </label>
          <span onClick={() => handleClick(task.id)}>
            <BsTrashFill className='icon-size red' />
          </span>
        </div>
      </div>
    </li>
  ));

  return (
    <>
      {completed.length ? (
        <>
          <h2 className='subtitle'>Tareas completadas</h2>
          <ol className='list'>{elements}</ol>
        </>
      ) : (
        <h2 className='subtitle'>Sin tareas completadas</h2>
      )}
    </>
  );
};
