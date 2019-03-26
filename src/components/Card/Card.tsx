import * as React from 'react';
import styles from './Card.module.css';

export const Card: React.SFC = ({children}) => {
    return <div className={styles.card}>
        {children}
    </div>
}