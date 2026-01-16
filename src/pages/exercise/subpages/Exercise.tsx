import type React from "react";
import { useEffect, useState } from "react";
import { ExerciseChar } from "../../../../src/components/ExerciseChar/ExerciseChar";

export const Exercise: React.FC<{
	lesson: CharField[];
	completeLesson: (stats: { mistakes: number; time: number }) => void;
}> = ({ lesson, completeLesson }) => {
	const [exerciseFields, setExerciseFields] = useState<CharField[]>(lesson);
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [startTime, setStartTime] = useState<Date>(new Date());

	const isLastIndex = currentIndex === exerciseFields.length;

	useEffect(() => {
		const handleKeyPress = (e: KeyboardEvent) => {
			if (e.key === "Space" && e.target === document.body) {
				e.preventDefault();
			}

			if (currentIndex === 0) {
				setStartTime(new Date());
			}

			if (isLastIndex) {
				completeLesson({
					mistakes: calculateMistakes(exerciseFields),
					time: calculatePassedTime(startTime),
				});
				return;
			}
			const keyValue = e.key === "Enter" ? "\n" : e.key;

			const newExerciseFields = [...exerciseFields];
			const field = exerciseFields[currentIndex];
			newExerciseFields[currentIndex] = {
				color: field.value === keyValue ? "ok" : "error",
				value: field.value,
			};
			setExerciseFields(newExerciseFields);
			setCurrentIndex(currentIndex + 1);
		};

		document.addEventListener("keydown", handleKeyPress);

		return () => {
			document.removeEventListener("keydown", handleKeyPress);
		};
	}, [isLastIndex, exerciseFields, currentIndex, completeLesson, startTime]);

	const text = exerciseFields.map((item, key) => (
		<ExerciseChar
			key={key + item.value}
			data={item}
			isCurrent={key === currentIndex}
		/>
	));

	return <section>{text}</section>;
};

const calculateMistakes = (lesson: CharField[]) => {
	return lesson.filter((val) => val.color === "error").length;
};

export const calculatePassedTime = (startTime: Date) => {
	return (Date.now() - startTime.getTime()) / 1000;
};
