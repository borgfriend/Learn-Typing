/**
 * Lesson
 * Defines the JSON Elements
 */
interface Lesson {
	id: number;
	title: string;
	/**
	 * Single String linebreaks with \n
	 */
	description: string;
	/**
	 * Single String linebreaks with \n
	 */
	lesson: string;
}

interface CharField {
	value: string;
	color: "ok" | "error" | "transparent";
}
