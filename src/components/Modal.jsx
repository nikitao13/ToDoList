import React, { useEffect, useRef } from 'react';

const Modal = ({ children, onClose }) => {
    const modalRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div className="modal-overlay h-auto">
            <div className="modal-content flex" ref={modalRef}>
                {children}
            </div>
        </div>
    );
};

export default Modal;