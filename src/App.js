import { useContext, useEffect } from "react";
import { ThemeBtn } from "./components/ThemeBtn/ThemeBtn";
import { ThemeContext } from "./context/ThemeContext";
import { Landing } from "./sections/Landing/Landing";
import { Projects } from "./sections/Projects/Projects";
import { SoftSkills } from "./sections/SoftSkills/SoftSkills";
import { Tools } from "./sections/Tools/Tools";

function App(props) {
	const { theme } = useContext(ThemeContext);
	const report = (el, type) => {
		// console.log("reporting:", el, type);
		const date = Date.now();

		console.log(date, ":", el, type);
	};
	useEffect(() => {
		const el = document.getElementsByClassName("App")[0];
		console.log(el);
		document.addEventListener("click", (e) => {
			console.log("cliked", e.target);
		});
	}, []);

	return (
		<div className={`App ${theme}`}>
			<ThemeBtn report={report} />
			<Landing report={report} />
			<Projects report={report} />
			<Tools report={report} />
			<SoftSkills report={report} />
		</div>
	);
}

export default App;
