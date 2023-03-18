import React, { FC, useEffect, useState } from 'react';
import styles from './Clock.module.scss';

interface ClockProps {
    value: string;
}


const Clock: FC<ClockProps> = ({ value }) => {

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    // const [todos, setTodos] = useState([]);

    useEffect(() => {



        const id = setInterval(() => {

            const now = new Date();
            const currentTime = now.toLocaleTimeString();
            setTime(currentTime);
        }, 1000);

        return () => {
            //cleanup function
            clearInterval(id);

        }

    }, []);



    // const getTodos = async () => {
    //     fetch('https://jsonplaceholder.typicode.com/todos/1')
    //         .then(response => response.json())
    //         .then(json => setTodos(json))
    // }







    if (value.length > 3) {
        return <h1>VALUE LENGTH  3</h1>
    }





    return (
        <div className={`Box ${styles.Clock}`}>
            <span>{time}</span>
        </div>

    )
}

export default Clock;





