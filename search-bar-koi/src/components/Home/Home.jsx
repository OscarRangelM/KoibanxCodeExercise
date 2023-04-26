import styles from './home.module.css';
import React from 'react';

import Body from '../Body/Body.jsx';
import Nav from '../Nav/Nav.jsx';

export default function Home() {
    return (
        <div className={styles.divHome}>
            <Nav className={styles.divNav} />
            <Body className={styles.divBody} />
        </div>
    );
}