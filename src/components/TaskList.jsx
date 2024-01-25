import TaskItem from "./TaskItem.jsx";
import {useEffect, useRef, useState} from "react";

const TaskList = ({ tasks, fetchTasks, setTasks }) => {
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

    const handleEditTask = async (taskId, newTitle) => {
        try {
            const response = await fetch(`http://localhost:3000/update-task/${taskId}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({taskName: newTitle})
            });
            if (response.ok) {
                setTasks(tasks.map(task =>
                    task.id === taskId ? { ...task, title: newTitle } : task
                ));
            } else {
                console.error('failed to update task');
            }
        } catch (error) {
            console.error(error);
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
                    handleEditTask={handleEditTask}
                />
            ))}
            <div ref={endOfTasksRef} />
        </div>
    )
}

export default TaskList