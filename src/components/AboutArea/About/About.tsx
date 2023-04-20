import React, { FC, useContext, useState, useCallback} from 'react';
import { UserContext } from '../../../context/Provider';
import styles from './About.module.scss';

const expensive = () => {
    const numbers: number[] = [];

    for(let i = 0; i <= 1000; i++){
        numbers.push(i);
    }

    return numbers;
}

console.log(expensive());

// const numbers = useMemo(() => expensive(), []);

// set.add(saySomething);

const saySomething = () => {
    console.log('say something');
}

interface AboutProps {}

const About: FC<AboutProps> = () => {

    const [user, setHobby] = useContext(UserContext);
    const [value, setValue] = useState('');

    const addHobby = () => {
        setHobby(value);
        setValue('');
    }

    console.log('render about component', value);

    return(
        <div className={styles.About}>
            <button onClick={addHobby}>Add Hobby</button>
            <input value={value} onChange={(e) => {
                setValue(e.target.value);
            }}type="text" />
            <hr />
            <p>age: {user.age}</p>
            <hr />
            <p>name: {user.name}</p>
            <hr />
            {user.hobbies.map(hobby => <strong key={hobby}> {hobby} </strong>)}
        </div>
    );
}

export default About;
