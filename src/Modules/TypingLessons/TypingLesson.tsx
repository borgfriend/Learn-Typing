/// <reference path="./../resources/lessons.d.ts" />
import * as React from 'react';

var lessonData = require('./../resources/lessons.json');

import './TypingLesson.css';

import { observer } from 'mobx-react';
import { exerciseStore } from './Stores/ExerciseStore';
import { Exercise } from './Components/Exercise';
import { ResultDisplay } from './Components/ResultDisplay';
import { Card } from '../../components/Card/Card';

interface TypingLessonProps {
    lessonId: string;
}

@observer
export class TypingLesson extends React.Component<TypingLessonProps> {

    componentWillMount() {
        let lesson = lessonData.find((val: Lesson) => {
            return val.id.toString() === this.props.lessonId;
        });
        exerciseStore.text = lesson.lesson;
       
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <Card>
                {exerciseStore.lessonComplete ? (<ResultDisplay />) : (<Exercise />)}
            </Card>
        );
    }
}