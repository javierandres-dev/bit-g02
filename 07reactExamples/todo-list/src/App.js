import { useState } from "react"
import { Form } from "./components/Form";
import { AllTasks } from "./components/AllTasks";

function App() {
  const [task, setTask] = useState({id: null, name: "", completed: false});
  const [tasks, setTasks] = useState([])
  
  return (
    <>
      <Form task={task} setTask={setTask} tasks={tasks} setTasks={setTasks} />
      <AllTasks tasks={tasks} />
    </>
  );
}

export default App;
