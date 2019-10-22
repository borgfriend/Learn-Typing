import * as React from 'react';
import styles from './ExerciseChar.module.css'

import { CharField } from '../../Modules/TypingLessons/Stores/ExerciseStore';

interface IExerciseChar {
    data: CharField;
    isCurrent: boolean;
}

export const ExerciseChar:React.FC<IExerciseChar> = ({data, isCurrent}) => {
    return (
        <span 
            className={styles.exerciseChar} 
            data-current={isCurrent}
            data-state={data.color}
        >
            {data.value === '\n' && (<span className="enter"><br /></span>)}
            {data.value}
        </span>
    );
}
