import React from 'react';
import {
  BsFillCheckCircleFill,
  BsFillPencilFill,
  BsTrashFill,
} from 'react-icons/bs';

export const PendingTasks = ({
  pending,
  handleChange,
  handleClick,
  setRename,
}) => {
  const elements = pending.map((task) => (
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
          <span onClick={() => setRename(task.id)}>
            <BsFillPencilFill className='icon-size orange' />
          </span>
          <span onClick={() => handleClick(task.id)}>
            <BsTrashFill className='icon-size red' />
          </span>
        </div>
      </div>
    </li>
  ));

  return (
    <>
      {pending.length ? (
        <>
          <h2 className='subtitle'>Tareas pendientes</h2>
          <ol className='list'>{elements}</ol>
        </>
      ) : (
        <h2 className='subtitle'>Sin tareas pendientes</h2>
      )}
    </>
  );
};
