import type React from "react";
import { Route, Routes } from "react-router";
import { Link, Outlet } from "react-router-dom";
import { NavBar } from "../src/components/NavBar/NavBar";
import i18n from "../src/i18n/en.json";
import { TypingLesson } from "./pages/exercise/TypingLesson";
import { Overview } from "./pages/overview/Overview";

const Navigation: React.FC = () => (
	<>
		<NavBar>
			<Link to="/">
				<h1>{i18n.APP_TITLE}</h1>
			</Link>
		</NavBar>
		<Outlet />
	</>
);

const App: React.FC = () => {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path="/" element={<Overview />} />
				<Route path="lesson/:id" element={<TypingLesson />} />
			</Routes>
		</>
	);
};

export default App;
