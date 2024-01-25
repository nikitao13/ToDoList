import {useState} from "react";

const TaskForm = ({ onTaskCreate }) => {
    const [taskName, setTaskName] = useState("");

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3000/create-task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ taskName }),
        });

        if (response.ok) {
            setTaskName('');
            onTaskCreate();
            console.log('task created successfully');
        } else {
            alert('an error occurred while creating the task');
        }
    };

    return (
        <>
            <form
                className="flex gap-2 align-baseline justify-center my-10 w-1/2 mx-auto"
                onSubmit={handleFormSubmit}
            >
                <input
                    type="text"
                    value={taskName}
                    placeholder="enter a task..."
                    onChange={(e) => setTaskName(e.target.value)}
                    className="border-2 border-gray-400 rounded-md p-1 mb-2 text-lg w-full"
                    maxLength={30}
                    required
                />
                <button className="border-2 border-gray-400 rounded-md p-1 mb-2 w-20 text-lg">add</button>
            </form>
        </>
    )
}

export default TaskForm