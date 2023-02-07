import { createContext } from 'react';

const TaskContext = createContext({
  id: null,
  name: null,
  completed: null,
});

export default TaskContext;
