import { useState, useEffect } from 'react';
import { Form } from './components/Form';
import { AllTasks } from './components/AllTasks';

function App() {
  const [task, setTask] = useState({ id: null, name: '', completed: false });
  const [tasks, setTasks] = useState([]);
  const [rename, setRename] = useState(null);
  const [message, setMessage] = useState(
    'Ingresa un nombre de tarea y presiona el botón para agregar la tarea a la lista.'
  );

  useEffect(() => {
    if (localStorage.getItem('tasks')) {
      setTasks(JSON.parse(localStorage.getItem('tasks')));
    }
  }, []);

  console.log(process.env.REACT_APP_SECRETO);

  return (
    <>
      <h1 className='title'>Lista de tareas</h1>
      <p className='message'>{message}</p>
      <Form
        task={task}
        setTask={setTask}
        tasks={tasks}
        setTasks={setTasks}
        rename={rename}
        setRename={setRename}
        setMessage={setMessage}
      />
      <AllTasks tasks={tasks} setTasks={setTasks} setRename={setRename} />
    </>
  );
}

export default App;
