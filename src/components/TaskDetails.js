import { useState, useEffect } from "react"; // to use state and lifecycle methods
import { useParams, Navigate, useNavigate } from "react-router-dom"; // to get the id(params) from the url
import Button from './Button';

function TaskDetails() {
    const [loading, setLoading] = useState(true); // state to track loading status
    const [task, setTask] = useState({}); // state to hold task data

    const params = useParams(); // get the id from the url
    const navigate = useNavigate(); // to navigate programmatically

    useEffect(() => {
        const fetchTask = async () => {
            const res = await fetch(`http://localhost:5002/tasks/${params.id}`); // fetch task by id
            const data = await res.json();
            
            if(res.status === 404){
                navigate('/') // redirect to home page if task not found
            }
            setTask(data); // set task data
            setLoading(false); // set loading to false after data is fetched
        };
        fetchTask();
    })

    return loading ? (
        <div>
            <h2>Loading...</h2>
        </div>
    ) : (
        <div>
            <h2>Task Details</h2>
            <h3>{task.text}</h3>
            <p>{task.day}</p>
            <p>Reminder: {task.reminder ? 'Yes' : 'No'}</p>
            <p>Completed: {task.completed ? 'Yes' : 'No'}</p>
            <Button className="btn" text="Go Back" onClick={() => navigate('/')} />
        </div>
    );
}

export default TaskDetails;