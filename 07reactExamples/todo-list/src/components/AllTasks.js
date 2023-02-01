import React, {useState, useEffect} from 'react'
import { CompletedTasks } from './CompletedTasks'
import { PendingTasks } from './PendingTasks'

export const AllTasks = ({tasks}) => {
  const [pending, setPending] = useState([])
  const [completed, setCompleted] = useState([])

  useEffect(() => {
    /*
    const pendingArr = [];
    const completedArr = [];

    for (const element of tasks) {
      if (element.completed === true) {
        completedArr.push(element)
      } else {
        pendingArr.push(element)
      }
    }
    */
    console.log(tasks)
  }, [tasks])
  
  const elements = tasks.map(task => <li key={task.id}>
    {task.name} <label>Completada<input type="checkbox"/></label><span>Renombrar</span><span>Eliminar</span>
  </li>)

  return (
    <>
      <ol>{elements}</ol>
      <PendingTasks/>
      <CompletedTasks/>
    </>
  )
}
