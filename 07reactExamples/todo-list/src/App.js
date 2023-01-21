import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Form } from './components/Form';
import { List } from './components/List';

function App() {
  const [task, setTask] = useState("")
  const [list, setList] = useState([])

  return (
    <>
      <Form task={task} setTask={setTask} list={list} setList={setList} />
      <List list={list} setList={setList} />
    </>
  );
}

export default App;
