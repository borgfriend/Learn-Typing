import * as React from 'react';
import styles from './NavBar.module.css';

export const NavBar: React.SFC = ({children}) => {
    return <div className={styles.navbar}>
        {children}
    </div>
}