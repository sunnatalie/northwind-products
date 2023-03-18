import React, { FC, SyntheticEvent } from 'react';
import styles from './Recommendations.module.scss';

interface RecommendationsProps { }

const Recommendations: FC<RecommendationsProps> = () => {


    const firstClickHandler = () => {
        console.log('Irish coffee')
    }

    const secondClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        const button = e.target as HTMLButtonElement;
        const html = button.innerHTML
    }

    const thirdClickHandler = (id: string) => {
        console.log(id)
    }




    return (
        <div className={`Box ${styles.Recommendations}`}>
            Recommendations Componen
            <button onClick={firstClickHandler} className="Box">First</button>
            <button onClick={secondClickHandler} className="Box"> </button>
            <button onClick={() => thirdClickHandler('this is id')} className="Box">Third</button>
        </div>
    )
}



export default Recommendations;
