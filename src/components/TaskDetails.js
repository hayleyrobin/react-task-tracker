import { useState, useEffect } from "react"; // to use state and lifecycle methods
import { useParams, Navigate } from "react-router-dom"; // to get the id(params) from the url

function TaskDetails() {
    const [loading, setLoading] = useState(true); // state to track loading status
    const [task, setTask] = useState({}); // state to hold task data
    const [error, setError] = useState(null); // state to hold error message

    const params = useParams(); // get the id from the url
    useEffect(() => {
        const fetchTask = async () => {
            const res = await fetch(`http://localhost:5002/tasks/${params.id}`); // fetch task by id
            const data = await res.json();
            
            if(res.status === 404){
                setError('Task not found'); // set error if task not found
            }
            setTask(data); // set task data
            setLoading(false); // set loading to false after data is fetched
        };

        fetchTask();
    })

    if(error){
        return <Navigate to="/" />; // redirect to home page on error
    }

    return loading ? (
        <div>
            <h2>Task Details</h2>
            <h3>{task.text}</h3>
            <p>{task.day}</p>
            <p>Reminder: {task.reminder ? 'Yes' : 'No'}</p>
            <a href="/">Go Back</a>
        </div>
    ) : (
        <div>
            <h2>Loading...</h2>
        </div>
    );
}

export default TaskDetails;