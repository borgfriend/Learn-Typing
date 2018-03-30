import * as React from 'react';
import Button from 'material-ui/Button';
import { observer } from 'mobx-react';
import { exerciseStore } from '../Stores/ExerciseStore';

export const ResultDisplay: React.SFC = observer(() => (
    <>
        <ul>
            <li>Mistakes: {exerciseStore.mistakes}</li>
            <li>Time: {exerciseStore.time}</li>
        </ul>
        <Button onClick={() => { exerciseStore.reset(); }}>Reset</Button>
    </>
));