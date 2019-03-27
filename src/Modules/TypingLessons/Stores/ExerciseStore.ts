import { action, observable, computed } from 'mobx';

export interface CharField {
    value: string;
    userReturn?: string;
    color: string;
}

class ExerciseStore {
    @observable exerciseFields: CharField[] = [];
    @observable currentIndex: number = 0;
    @observable lessonComplete: boolean = false;

    text: string = '';
    startTime: Date;
    endTime: Date;

    @action.bound
    pressedKey(val: string) {
        this.exerciseFields[this.currentIndex].userReturn = val;
        this.exerciseFields[this.currentIndex].color =
            (this.exerciseFields[this.currentIndex].value === val) ? 'ok' : 'error';
        this.currentIndex++;
    }

    @action
    setExercise() {
        this.exerciseFields = [];
        this.text
            .split('')
            .map((item) => {
                this.exerciseFields.push({ value: item, color: 'transparent' });
            });
        this.currentIndex = 0;
    }

    @computed
    get mistakes() {
        return this.exerciseFields.filter(val => val.color === 'red').length;
    }

    @action
    startLesson() {
        this.startTime = new Date();
        this.lessonComplete = false;
    }

    @action
    endLesson() {
        this.endTime = new Date();
        this.lessonComplete = true;
    }

    @action
    reset() {
        this.exerciseFields = [];
        this.startLesson();
    }

    @computed
    get time() {
        return (this.endTime.getTime() - this.startTime.getTime()) / 1000;
    }

}

export const exerciseStore = new ExerciseStore();