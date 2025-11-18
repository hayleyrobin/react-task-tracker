import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false); // state to show/hide AddTask form
  const [tasks, setTasks] = useState([
    { id: 1, text: "Food Shopping", day: "Feb 5th at 2:30pm", reminder: false },
    { id: 2, text: "Christmas Shopping", day: "Feb 6th at 1:30pm", reminder: true },
    { id: 3, text: "Winter Cleaning", day: "Feb 7th at 3:30pm", reminder: false },
  ]);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1; // generate random id
    const newTask = { id, ...task }; // create new task object with id and task data
    setTasks([...tasks, newTask]); // add new task to tasks array 
  };

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
      <Header onAdd={() => setShowAddTask(!showAddTask)} />
      {/* addtask is deopendent on showAddTask state */}
      {showAddTask && <AddTask onAdd={addTask} />}
      {/*if tasks exist, render Tasks component, else show message*/}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No Tasks to Show')}
    </div>
  );
}

export default App;
