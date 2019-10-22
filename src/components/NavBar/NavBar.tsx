import * as React from 'react';
import styles from './NavBar.module.css';

export const NavBar: React.FC = ({children}) => {
    return <div className={styles.navbar}>
        {children}
    </div>
}