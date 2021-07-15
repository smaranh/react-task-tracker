import { useState } from "react";

export const AddTask = ({onAddTask}) => {
    
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        const newTask = { text, day, reminder};
        onAddTask(newTask);
        setText('');
        setDay('');
        setReminder(false);
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className='form-control'>
                <label className="label">Task</label>
                <input className='input' type='text' placeholder='Add Task'
                    value={text} onChange={(e) => setText(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label className="label">Day & Time</label>
                <input className='input' type='text' placeholder='Add Day & Time'
                    value={day} onChange={(e) => setDay(e.target.value)}></input>
            </div>
            <div className='form-control-check'>
                <label className="label">Reminder</label>
                <input className='input' type='checkbox' checked={reminder}
                    value={reminder} onChange={(e) => setReminder(e.target.checked)}></input>
            </div>
            <button type='submit' className='btn btn-block'>Save Task</button>
        </form>
    )
}