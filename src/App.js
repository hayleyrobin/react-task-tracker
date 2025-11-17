import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", text: "Food Shopping", day: "Feb 5th at 2:30pm", reminder: false },
    { id: 2, title: "Task 2", text: "Christmas Shopping", day: "Feb 6th at 1:30pm", reminder: true },
    { id: 3, title: "Task 3", text: "Winter Cleaning", day: "Feb 7th at 3:30pm", reminder: false },
  ]);

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
