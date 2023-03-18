import React, { FC, useState } from 'react';
import styles from './Counter.module.scss';

interface CounterProps {
    counter: number;
    onIncrease: () => void;
    onDecrease: () => void;
}

const Counter: FC<CounterProps> = ({ counter, onDecrease, onIncrease }) => {
    // const [counter, setCounter] = useState(0);


    // const increaseCounterHandler = () => {

    //     setCounter((prevState) => prevState = prevState + 1)
    // }
    // const decreaseCounterHandler = () => {

    //     setCounter((prevState) => {
    //         if (prevState === 0) return 0;

    //         return prevState = prevState - 1;
    //     })
    // }


    return (
        <div className={`Box ${styles.Counter}`}>
            <h1>{counter}</h1>
            <div className="buttons">
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>

            </div>
        </div>
    )
}





export default Counter;

