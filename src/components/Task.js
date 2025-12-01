import {FaTimes} from 'react-icons/fa';
import { FaRegSquare, FaRegSquareCheck } from "react-icons/fa6";
import {Link} from 'react-router-dom';

const Task = ({task, onDelete, onToggle, onComplete}) =>{
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''} ${task.completed ? 'completed' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text}
                <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)} />     
            </h3>
            <p>{`Due: ${task.day}`}</p>
            <div className="task-footer">
                <Link to={`/task/${task.id}`} className={`view-details ${task.completed ? 'completed' : ''}`}>View Details</Link>
                <button className='btn-complete' onClick={() => onComplete(task.id)}>Completed? {!task.completed ? <FaRegSquare style={{ marginLeft: '10px' }} /> : <FaRegSquareCheck style={{marginLeft: '10px'}} />}</button>
            </div>
            
        </div>
    );
};
export default Task;