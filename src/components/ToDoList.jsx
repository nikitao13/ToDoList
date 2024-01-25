import TaskForm from "./TaskForm.jsx";
import TaskList from "./TaskList.jsx";
import {useEffect, useState} from "react";

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = () => {
        fetch('http://localhost:3000/get-tasks')
            .then(response => response.json())
            .then(data => setTasks(data));
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div className="todo-list h-full w-full mx-auto justify-between flex flex-col items-stretch">
            <TaskList tasks={tasks} fetchTasks={fetchTasks} setTasks={setTasks} />
            <TaskForm onTaskCreate={fetchTasks} />
        </div>
    )
}

export default ToDoList