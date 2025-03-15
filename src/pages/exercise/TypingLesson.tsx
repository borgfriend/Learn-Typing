import type React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Card } from "../../../src/components/Card/Card";
import { loadLesson } from "../../../src/resources/loadLesson";
import { Exercise } from "./subpages/Exercise";
import { ResultDisplay } from "./subpages/ResultDisplay";

export interface LessonStats {
	mistakes: number;
	time: number;
}

export const TypingLesson: React.FC = () => {
	const [isComplete, setIsComplete] = useState<boolean>(false);
	const [lessonStats, setLessonStats] = useState<LessonStats>({
		mistakes: 0,
		time: 0,
	});
	const { id = "" } = useParams<{ id: string }>();
	const lessonId = Number.parseInt(id, 10);
	const lesson = loadLesson(lessonId);
	console.log({ lesson, id });

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const resetAction = () => setIsComplete(false);
	const completeLesson = (stats: LessonStats) => {
		setLessonStats(stats);
		setIsComplete(true);
	};

	return (
		<Card>
			{isComplete ? (
				<ResultDisplay {...{ resetAction, lessonStats }} />
			) : (
				<Exercise {...{ lesson, completeLesson }} />
			)}
		</Card>
	);
};
