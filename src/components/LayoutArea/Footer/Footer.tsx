import React, { FC, useContext } from 'react';
import { UserContext } from '../../../context/Provider';
import styles from './Footer.module.scss';

interface FooterProps { }

const Footer: FC<FooterProps> = () => {

    const [user] = useContext(UserContext);

    return(
        <footer className={styles.Footer}>
            {user.hobbies.map(hobby => <strong key={hobby}> {hobby} |</strong>)}
            <p> All rights Reserved &copy;</p>
        </footer>
    );
}

export default Footer;
