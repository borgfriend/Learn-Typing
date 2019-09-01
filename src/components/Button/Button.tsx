import * as React from 'react';
import styles from './Button.module.css';

type colors = 'default' | 'primary'

interface IButtonProps {
    onClick?: () => void;
    color?: colors;
}
/**
 * A Button Component
 * A button executes
 * @param props
 */
export const Button: React.SFC<IButtonProps> = ({ onClick, children, color = 'default' }) => {
    return (<button
        className={`${styles.button} ${styles[color]}`}
        onClick = { onClick }
        color={`${color}`}
        >
        { children }
    </button >);
}