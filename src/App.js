import './App.css';
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { AddTask } from "./components/AddTask";
import { useState } from "react";
import TaskList from "./utils/TaskList";

function App() {

  const [showAddTask, setShowAddTask] = useState(false);

  const fetchTasks = () => {
    const list = sessionStorage.getItem('tasks');
    return list ? JSON.parse(list) : TaskList;
  }

  const [tasks, setTasks] = useState(fetchTasks());

  //show/hide Add Task
  const updateAddTaskState = () => {
    setShowAddTask(!showAddTask);
  }

  // Add Task
  const addTask = (newTask) => {
    const id = Math.floor(Math.random()* 1000 + 1) + 1;
    newTask.id = id;
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setShowAddTask(!showAddTask);
    sessionStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  // On Delete Task
  const onDelete = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    sessionStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  // Update reminder on Toggle
  const onToggleReminder = id => {
    console.log(id);
    const updatedTasks = tasks.map(task => {
      if (task.id === id) task.reminder = !task.reminder;
      return task;
    })
    setTasks(updatedTasks);
    sessionStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  return (
    <div className="container">
      <Header showAdd={showAddTask}
        toggleAddTask={updateAddTaskState}/>
      {showAddTask && <AddTask onAddTask={addTask}/>}
      {!showAddTask && (tasks.length === 0 ? 
        'No Tasks to Show' : 
        <Tasks tasks={tasks} 
          onDelete={onDelete}
          onToggle={onToggleReminder}/>)}
    </div>
  );
}

export default App;
