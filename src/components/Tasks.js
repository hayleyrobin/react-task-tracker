const Tasks = () => {
    const tasks = [
        { id: 1, title: "Task 1", text: "Description 1", day: "Feb 5th at 2:30pm" },
        { id: 2, title: "Task 2", text: "Description 2", day: "Feb 6th at 1:30pm" },
        { id: 3, title: "Task 3", text: "Description 3", day: "Feb 7th at 3:30pm" },
    ];
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};
export default Tasks;
