import * as React from 'react';

import { observer } from 'mobx-react';
import { exerciseStore } from '../Stores/ExerciseStore';

@observer
export class Exercise extends React.Component {

    textStyle = {
        fontFamily: 'Courier New'
    };

    componentDidMount() {
        document.addEventListener('keypress', this.handleKeyPress);
        exerciseStore.setExercise();
    }

    componentWillUnmount() {
        document.removeEventListener('keypress', this.handleKeyPress);
    }

    handleKeyPress = (e: KeyboardEvent) => {
        let { currentIndex, pressedKey } = exerciseStore;
        if (e.keyCode === 32 && e.target === document.body) {
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
                <span
                    key={key}
                    style={{
                        backgroundColor: item.color
                    }}
                    className={`${(key === exerciseStore.currentIndex) ? 'current' : ''}`}
                >
                    {item.value === '\n' && (<span className="enter"> <br /></span>)}
                    {item.value}
                </span>
            ));

        return (
            <section style={this.textStyle}>
                {text}
            </section>
        );
    }
}
