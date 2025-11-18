import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

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
  return (
    <div className="container">
      <Header />
      {/*if tasks exist, render Tasks component, else show message*/}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} />) : ('No Tasks to Show')}
    </div>
  );
}

export default App;
