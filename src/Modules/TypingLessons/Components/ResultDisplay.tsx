import * as React from 'react';

import { useObserver } from 'mobx-react';
import { exerciseStore } from '../../../Stores/ExerciseStore';
import { Button } from '../../../components/Button/Button';


export const ResultDisplay: React.FC = () => useObserver(()=>(
    <>
        <ul>
            <li>Mistakes: {exerciseStore.mistakes}</li>
            <li>Time: {exerciseStore.time}</li>
        </ul>
        <Button onClick={() => { exerciseStore.reset(); }}>Reset</Button>
    </>
));