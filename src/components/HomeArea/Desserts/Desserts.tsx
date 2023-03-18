import React, { FC } from 'react';
import Dessert from './Dessert/Dessert';
import styles from './Desserts.module.scss';

interface DessertsProps { }

const Desserts: FC<DessertsProps> = () => {


    const items = [
        { id: 1, name: 'Ice Cream', price: 10 },
        { id: 2, name: 'Ice Cream', price: 20 },
        { id: 3, name: 'Ice Cream', price: 30 },
        { id: 4, name: 'Ice Cream', price: 40 },
        { id: 5, name: 'Ice Cream', price: 50 },
    ]

    const jsxItems = items.map((item, index) => {
        const { id, name, price } = item;
        return (
            <Dessert name={name} price={price} key={id}  >
                this is some content and description
            </Dessert>
        )
    });



    return (
        <div className={`Box ${styles.Desserts}`}>
            Desserts Component
            {jsxItems}
        </div>
    )


}

export default Desserts;


