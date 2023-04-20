import React, { FC } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Aside from './Aside/Aside';
import Main from './Main/Main';
import styles from './LayoutArea.module.scss';
import UserProvider from '../../context';

interface LayoutAreaProps { }  //the layoutareaprops is generic

const LayoutArea: FC<LayoutAreaProps> = () => (

    <div className={styles.LayoutArea}>
        
        <UserProvider>
            <Header />
            <Aside />
            <Main />
            <Footer />
        </UserProvider>

    </div>
);

export default LayoutArea;
