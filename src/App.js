import { useContext, useEffect, useState } from "react";
import { ThemeBtn } from "./components/ThemeBtn/ThemeBtn";
import { ThemeContext } from "./context/ThemeContext";
import { Landing } from "./sections/Landing/Landing";
import { Projects } from "./sections/Projects/Projects";
import { SoftSkills } from "./sections/SoftSkills/SoftSkills";
import { Tools } from "./sections/Tools/Tools";

function App() {
	const { theme } = useContext(ThemeContext);
	const [interaction, setInteraction] = useState([]);
	const [count, setCount] = useState(0);
	const [sent, setSent] = useState(0);

	const send = async () => {
		setSent((sent) => sent + 1);
		setInteraction([]);
		setCount(0);
		await fetch(
			process.env.REACT_APP_SERVER_ADDRES + window.location.pathname,
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ interaction }),
			}
		);
	};

	const report = async (e) => {
		const date = Date.now();
		setCount(count + 1);
		let cp = e.nativeEvent.composedPath();
		let parents = cp.slice(0, -4);
		const path = parents.map((x) => (x.id !== "" ? x.id : x.tagName));

		const data = { date: date, path: path, type: e.type };

		if (count > 10 || e.type === "click") {
			interaction.push(data);
			send();
		} else {
			interaction.push(data);
		}
	};

	return (
		<div
			className={`App ${theme}`}
			onMouseOver={(e) => {
				report(e);
			}}
			onClick={(e) => {
				report(e);
			}}
		>
			<ThemeBtn />
			<Landing />
			<Projects />
			<Tools />
			<SoftSkills />
		</div>
	);
}

export default App;
