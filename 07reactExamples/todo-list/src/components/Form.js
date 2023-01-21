import React from 'react'

export const Form = ({ task, setTask, list, setList }) => {

/* const handleChange = (e) => {
  setTask(e.target.value)
} */

const handleSubmit = (e) => {
  e.preventDefault()
  setList([...list, task])
  setTask("")
}

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Ingrese el nombre de la tarea</label>
      {/* <input id='task' type="text" value={task} onChange={handleChange} /> */<input id='task' type="text" value={task} onChange={e => setTask(e.target.value)} />}
      <button>Agregar tarea</button>
    </form>
  )
}
