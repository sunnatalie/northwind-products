import React, { FC } from 'react';
import styles from './Specials.module.scss';

interface SpecialsProps { }

const Specials: FC<SpecialsProps> = () => {


    const isWeekend = () => {
        const now = new Date();
        const day = now.getDay() + 1;
        return day >= 6
    }

    const isTuesdayOrFriday = () => {
        const now = new Date();
        const day = now.getDay() + 1;
        return day === 3 || day === 6
    }

    const renderSpecials = () => {
        if (isWeekend()) {
            return <span>pizza</span>
        } else if (isTuesdayOrFriday()) {
            return <span>Pasta</span>
        } else {
            return <span>fish</span>
        }

    }


    
    return (
        <div className={`Box ${styles.Specials}`}>
            
            <span>Our Specials :</span>
            {/* {renderSpecials()} */}
            {/* {isWeekend() ? <span>pizza</span> : <span>pasta</span>} */}
            {!isWeekend() && <span>Fish</span>}

        </div>
    )


}





export default Specials;




const bool = true;

function sayHello() {
    console.log('hello')
}

bool && sayHello();