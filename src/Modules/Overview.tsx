/// <reference path="./resources/lessons.d.ts" />

import * as React from 'react';

import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import { withStyles, Typography, Button } from 'material-ui';
import { routingStore } from '../Stores';

const lessonData: Array<Lesson> = require('./resources/lessons.json');

interface LessonCardProps {
    lesson: Lesson;
}

const LessonCard: React.SFC<LessonCardProps> = ({ lesson }) => (
    <Card>
        <CardContent>
            <Typography gutterBottom={true} variant="headline" component="h2">
                {lesson.title}
            </Typography>
            {lesson.description}
        </CardContent>
        <CardActions>
            <Button
                size="small"
                color="primary"
                onClick={() =>
                    routingStore.push(`/lesson${lesson.id}`)
                }
            >
                Start Lesson
            </Button>
        </CardActions>
    </Card>
);

export const Overview: React.SFC = () => {

    const overview = lessonData.map((val) => (
        <Grid item={true} sm={4} key={val.id}>
            <LessonCard lesson={val} />
        </Grid>
    ));

    return (
        <Grid container={true} spacing={24}>
            {overview}
        </Grid>
    );

};

export default withStyles({})(Overview);