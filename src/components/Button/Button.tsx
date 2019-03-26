import * as React from 'react';
import styles from './Button.module.css';

interface IButtonProps{
    onClick: () => void;
}
export const Button:React.SFC<IButtonProps> = ({onClick, children}) => {
    return <button className={styles.button} onClick={onClick}>
        {children}
    </button>
}