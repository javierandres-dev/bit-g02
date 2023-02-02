import { useState, useEffect } from 'react';
import { Form } from './components/Form';
import { AllTasks } from './components/AllTasks';

function App() {
  const [task, setTask] = useState({ id: null, name: '', completed: false });
  const [tasks, setTasks] = useState([]);
  const [rename, setRename] = useState(null);

  useEffect(() => {
    if (localStorage.getItem('tasks')) {
      setTasks(JSON.parse(localStorage.getItem('tasks')));
    }
  }, []);

  return (
    <>
      <Form
        task={task}
        setTask={setTask}
        tasks={tasks}
        setTasks={setTasks}
        rename={rename}
        setRename={setRename}
      />
      <AllTasks tasks={tasks} setTasks={setTasks} setRename={setRename} />
    </>
  );
}

export default App;
