import React, { FC, useState } from 'react';

import Discount from '../Discount/Discount';
import Specials from '../Specials/Specials';
import Desserts from '../Desserts/Desserts';
import Sale from '../Sale/Sale';
import Counter from '../Counter/Counter';
import Recommendations from '../Recommendations/Recommendations';
import Input from '../Input/Input';
import Clock from '../Clock/Clock';
import RandomDiscount from '../RandomDiscount/RandomDiscount';

import styles from './Home.module.scss';

interface HomeProps { }

const Home: FC<HomeProps> = () => {

    const [counter, setCounter] = useState(0);
    const [value, setValue] = useState('');
    const [price, setPrice] = useState(0);


    const increaseCounterHandler = () => {

        setCounter((prevState) => prevState = prevState + 1)
    }
    const decreaseCounterHandler = () => {

        setCounter((prevState) => {
            if (prevState === 0) return 0;

            return prevState = prevState - 1;
        })
    }

    const valueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    const priceChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(+e.target.value);
    }




    return (
        <div className={styles.Home}>



            {/* interpolation */}
            <Discount counter={counter} />
            {/* Conditional rendering */}
            <Specials />
            {/* lists */}
            {/* <Desserts /> */}
            <Recommendations />
            {/* props */}
            <Sale category="Beverages" percent={10} >
                more data
            </Sale>
            <Sale category="candies" percent={15} >
                <div style={{ border: '1px solid red' }}>this is a div</div>
            </Sale>
            <Sale category="ice cream" percent={30} >
                <div><h1>dddd</h1></div>
            </Sale>
            {/* State */}
            <Counter counter={counter} onDecrease={decreaseCounterHandler} onIncrease={increaseCounterHandler} />
            <Input type="text" value={value} onChange={valueChangeHandler} />
            <Input type="number" value={price} onChange={priceChangeHandler} />
            {/*  */}

            {counter < 5 && <Clock value={value} />}

            <RandomDiscount />








        </div>
    )

}

export default Home;

