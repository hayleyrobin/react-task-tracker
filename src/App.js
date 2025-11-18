import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Food Shopping", day: "Feb 5th at 2:30pm", reminder: false },
    { id: 2, text: "Christmas Shopping", day: "Feb 6th at 1:30pm", reminder: true },
    { id: 3, text: "Winter Cleaning", day: "Feb 7th at 3:30pm", reminder: false },
  ]);

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    //map through tasks, find the one with the matching id, and toggle its reminder property
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task
    ));
  };

  return (
    <div className="container">
      <Header />
      <AddTask />
      {/*if tasks exist, render Tasks component, else show message*/}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No Tasks to Show')}
    </div>
  );
}

export default App;
