import { useState } from "react";
const AddTask = ( { onAdd } ) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault(); // doesnt automatically submit to a page

        // if no text entered, alert user
        if (!text) {
            alert('Please add a task');
            return;
        }

        // if passes, call onAdd prop with task data
        onAdd({ text, day, reminder });

        // clear form after submit
        setText('');
        setDay('');
        setReminder(false);
    };

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" placeholder="Add Day & Time" value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox" checked={reminder} onChange={(e) => setReminder(e.target.checked)} />
            </div>

            <input type="submit" value="Save Task" className="btn btn-block" />
        </form>
    );
};

export default AddTask;