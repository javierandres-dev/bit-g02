import React from 'react'
import { v4 as uuidv4 } from 'uuid';

export const Form = ({task, setTask, tasks, setTasks}) => {

  const handleInputName = (e) => {
    setTask({...task, id: uuidv4(), name: e.target.value})
  }

  const handleAdd = (e) => {
    e.preventDefault()
    setTasks([...tasks, task])
    setTask({id: null, name: "", completed: false})
  }

  return (
    <form>
      <input type="text" placeholder='Nombre de la tarea...' onInput={handleInputName} value={task.name} />
      <button onClick={handleAdd}>Agregar tarea</button>
    </form>
  )
}
