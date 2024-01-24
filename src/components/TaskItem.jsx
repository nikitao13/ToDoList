import deleteBtn from '../assets/delete.svg'
import editBtn from "../assets/edit.svg";
const TaskItem = ({ task, onDelete }) => {

    return (
        <div className="taskItems mx-auto h-auto w-3/4 flex border-b border-gray-500 justify-between items-center flex-shrink-0">
            <h1 className="text-xl break-words">{task.title}</h1>
            <div className="btnContainer flex gap-3 h-full justify-center">
                <img
                    src={editBtn}
                    alt="edit"
                    onClick={() => onDelete(task.id)}
                    className="ml-auto cursor-pointer h-6"
                />
                <img
                    src={deleteBtn}
                    alt="delete"
                    onClick={() => onDelete(task.id)}
                    className="ml-auto cursor-pointer h-6"
                />
            </div>
        </div>
    );
}

export default TaskItem