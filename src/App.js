import './App.css';
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { useState } from "react";

function App() {

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

  const onDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const onToggleReminder = id => {
    setTasks(tasks.map(task => {
      if (task.id === id) task.reminder = !task.reminder;
      return task;
    }));
  }

  return (
    <div className="container">
      <Header />
      {tasks.length === 0 ? 
        'No Tasks to Show' : 
        <Tasks tasks={tasks} 
          onDelete={onDelete}
          onToggle={onToggleReminder}/>}
    </div>
  );
}

export default App;
