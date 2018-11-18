import * as React from 'react';

import { observer } from 'mobx-react';
import { exerciseStore } from '../Stores/ExerciseStore';
import { Button } from '@blueprintjs/core';

export const ResultDisplay: React.SFC = observer(() => (
    <>
        <ul>
            <li>Mistakes: {exerciseStore.mistakes}</li>
            <li>Time: {exerciseStore.time}</li>
        </ul>
        <Button onClick={() => { exerciseStore.reset(); }}>Reset</Button>
    </>
));