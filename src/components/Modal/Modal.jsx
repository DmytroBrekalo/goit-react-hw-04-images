import { useCallback, useEffect } from 'react';
import style from './Modal.module.css';

export const Modal = data => {
    const handleKeyDown = useCallback(
        event => {
            if (event.code === 'Escape') {
                data.onClose();
            }
            window.removeEventListener('keydown', handleKeyDown);
        },
        [data]
    );
    const handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            data.onClose();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    return (
        <div className={style.overlay} onClick={handleBackdropClick}>
            <div className={style.modal}>{data.children}</div>
        </div>
    );
};