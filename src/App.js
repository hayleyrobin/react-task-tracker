import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false); // state to show/hide AddTask form
  const [tasks, setTasks] = useState([]); // state to hold tasks array

  // Get Tasks from server
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer); // adds tp our tasks state
    }

    getTasks();
  }, []); //empty dependency array means it runs if only on initial render

  // Fetch Tasks
      //fetch returns a promise
    const fetchTasks = async () => { //await promise/response from server
      const result = await fetch('http://localhost:5002/tasks'); //fetch tasks from json server 
      const data = await result.json(); //await data from response in json format

      return data;
    }
  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1; // generate random id
    const newTask = { id, ...task }; // create new task object with id and task data
    setTasks([...tasks, newTask]); // add new task to tasks array 
  };

  //Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5002/tasks/${id}`, { // dont need tp save in a variable since not getting any data back
      method: 'DELETE',
    });

    setTasks(tasks.filter((task) => task.id !== id)); //filter out deleted task from UI
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
      {/* pass onAdd prop to Header to toggle showAddTask state */}
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {/* addtask is deopendent on showAddTask state */}
      {showAddTask && <AddTask onAdd={addTask} />}
      {/*if tasks exist, render Tasks component, else show message*/}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No Tasks to Show')}
    </div>
  );
}

export default App;
