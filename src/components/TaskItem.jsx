import deleteBtn from "../assets/delete.svg";
import editBtn from "../assets/edit.svg";
import saveBtn from "../assets/save.png";
import {useState} from "react";
import Modal from "./Modal.jsx";

const TaskItem = ({ task, onDelete, handleEditTask }) => {
    const [newTitle, setNewTitle] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentTask, setCurrentTask] = useState(null);


    const openModal = (task) => {
        setCurrentTask(task);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTitle.trim() === "") {
            alert("input cannot be empty");
            return;
        }
        handleEditTask(currentTask.id, newTitle);
        closeModal();
    };

    return (
        <div className={`taskItems mx-auto h-auto w-3/4 flex border-b border-gray-500 justify-between items-center flex-shrink-0 ${isModalOpen ? 'modal-open' : ''}`}>
            <h1 className={`task-name text-xl break-words ${isModalOpen ? 'modal-open' : ''}`}>{task.title}</h1>
            <div className="btnContainer flex gap-3 h-full justify-center">

                {isModalOpen && (
                    <Modal onClose={closeModal}>
                        <form onSubmit={handleSubmit} className="flex gap-2">
                            <input
                                type="text"
                                value={newTitle}
                                onChange={(e) => setNewTitle(e.target.value)}
                                placeholder={task.title}
                                className="modal-input w-max outline-0"
                                maxLength={30}
                                required
                            />
                            <div className="saveBtnDiv w-max">
                                <img
                                    src={saveBtn}
                                    alt="save"
                                    onClick={handleSubmit}
                                    className={`cursor-pointer h-6 ${isModalOpen ? 'modal-open' : ''}`}
                                />
                            </div>
                        </form>
                    </Modal>
                )}

                <img
                    src={editBtn}
                    alt="edit"
                    onClick={() => openModal(task)}
                    className={`ml-auto cursor-pointer h-6 ${isModalOpen ? 'modal-open' : ''}`}
                />
                <img
                    src={deleteBtn}
                    alt="delete"
                    onClick={() => onDelete(task.id)}
                    className={`ml-auto cursor-pointer h-6 ${isModalOpen ? 'modal-open' : ''}`}
                />
            </div>
        </div>
    );
}

export default TaskItem