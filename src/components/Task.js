import {FaTimes} from 'react-icons/fa';
import {Link} from 'react-router-dom';

const Task = ({task, onDelete, onToggle, onComplete}) =>{
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''} ${task.completed ? 'completed' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text}
                <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)} />
            </h3>
            <p>{task.day}</p>
            <p>Completed: {task.completed ? 'Yes' : 'No'}</p>
            <button onClick={() => onComplete(task.id)}>Complete</button>
            <div>
              <Link to={`/task/${task.id}`}>View Details</Link>
            </div>
        </div>
    );
};
export default Task;
