import React, { FC } from 'react';
import styles from './Discount.module.scss';

interface DiscountProps {
    counter: number;
}

const Discount: FC<DiscountProps> = ({ counter }) => {

    console.log('render')
    let percent = 10; //demo for getting discount from the server (place holder)

    return (
        <div className={`Box ${styles.Discount}`}>
            <span>Only now - {percent}% discount on all products! </span>
            <span>{counter}</span>
        </div>
    );
}

export default Discount;



