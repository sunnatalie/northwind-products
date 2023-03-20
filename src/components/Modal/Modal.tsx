import React, { FC } from 'react';
import {createPortal} from 'react-dom';
import styles from './Modal.module.scss';

interface ModalProps {
    children:React.ReactNode;
}

const Modal: FC<ModalProps> = ({children}) => {

    const portal = (
        <div className={styles.Modal}>
            <div className={styles.Modal__overlay}></div>
            <div className={styles.content}>{ children }</div>
        </div>
    )

    return createPortal(portal,document.body); //first parameter is jsx returnign and the second is where we are injecting to
}


export default Modal;
