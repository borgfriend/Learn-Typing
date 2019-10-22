import * as React from 'react';

import { observer } from 'mobx-react';
import { exerciseStore } from '../Stores/ExerciseStore';
import { ExerciseChar } from '../../../components/ExerciseChar/ExerciseChar';

@observer
export class Exercise extends React.Component {

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
        exerciseStore.setExercise();
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    handleKeyPress = (e: KeyboardEvent) => {
        let { currentIndex, pressedKey } = exerciseStore;
        if (e.key === "Space" && e.target === document.body) {
            e.preventDefault();
        }

        if (currentIndex === exerciseStore.text.length) {
            exerciseStore.endLesson();
            return;
        }

        if (e.key === 'Enter') {
            pressedKey('\n');
        } else {
            pressedKey(e.key);
        }

        if (currentIndex === 1) {
            exerciseStore.startLesson();
        }
    }

    render() {
        const text = exerciseStore.exerciseFields
            .map((item, key) => (
                <ExerciseChar
                    key={key}
                    data={item}
                    isCurrent={key === exerciseStore.currentIndex}
                />
            ));

        return (
            <section>
                {text}
            </section>
        );
    }
}
