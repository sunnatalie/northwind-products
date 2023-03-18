import React, { FC, ReactNode } from 'react';
import styles from './Dessert.module.scss';

interface DessertProps {
    name: string;
    price: number;
    children: ReactNode
}

const Dessert: FC<DessertProps> = ({ name, price, children }) => (
    <div className={styles.Dessert}>
        <span>name: {name}</span>
        <span>price:{price}</span>
        <div className="content">
            {children}
        </div>
    </div>
);

export default Dessert;
