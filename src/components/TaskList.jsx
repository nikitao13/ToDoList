import TaskItem from "./TaskItem.jsx";
import {useEffect, useRef} from "react";

const TaskList = ({ tasks, fetchTasks }) => {
    const endOfTasksRef = useRef(null);

    const handleDeleteTask = async (taskId) => {
        const response = await fetch(`http://localhost:3000/delete-task/${taskId}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            console.log('task deleted successfully');
            fetchTasks();
        } else {
            console.log(taskId);
            alert('an error occurred while deleting the task');
        }
    };

    useEffect(() => {
        if (endOfTasksRef.current) {
            endOfTasksRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [tasks]);

    return (
        <div className="task-list mt-3 flex flex-col gap-5 overflow-y-auto">
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onDelete={() => handleDeleteTask(task.id)}
                />
            ))}
            <div ref={endOfTasksRef} />
        </div>
    )
}

export default TaskList