import { useState } from 'react'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks';

import './Global.css';

export function App() {

  const [tasks, setTasks] = useState([]);

  function addNewTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  return (
    <div>
      <Header onAddTask={addNewTask} />
      <Tasks tasks={tasks} />
    </div>
  );
}
