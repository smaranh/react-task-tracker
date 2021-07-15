import './App.css';
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { AddTask } from "./components/AddTask";
import { useState } from "react";

function App() {

  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "May 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "May 6th at 1:30pm",
      "reminder": false
    },
    {
      "id": 3,
      "text": "Food Shopping",
      "day": "May 7th at 12:30pm",
      "reminder": false
    },
    {
      "text": "Complete project",
      "day": "Today",
      "reminder": true,
      "id": 4
    },
    {
      "text": "Interview Today",
      "day": "Friday",
      "reminder": true,
      "id": 5
    }
  ]);

  //show/hide Add Task
  const updateAddTaskState = () => {
    setShowAddTask(!showAddTask);
  }

  // Add Task
  const addTask = (newTask) => {
    const id = Math.floor(Math.random()* 1000 + 1) + 1;
    newTask.id = id;
    setTasks([...tasks, newTask]);
    setShowAddTask(!showAddTask);
  }

  // On Delete Task
  const onDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  // Update reminder on Toggle
  const onToggleReminder = id => {
    setTasks(tasks.map(task => {
      if (task.id === id) task.reminder = !task.reminder;
      return task;
    }));
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
