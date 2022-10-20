import { useContext, useEffect, useState } from "react";
import { ThemeBtn } from "./components/ThemeBtn/ThemeBtn";
import { ThemeContext } from "./context/ThemeContext";
import { Landing } from "./sections/Landing/Landing";
import { Projects } from "./sections/Projects/Projects";
import { SoftSkills } from "./sections/SoftSkills/SoftSkills";
import { Tools } from "./sections/Tools/Tools";

function App(props) {
	const { theme } = useContext(ThemeContext);
	const [interaction, setInteraction] = useState([]);
	const [count, setCount] = useState(0);
	const [sent, setSent] = useState(0);

	const send = () => {
		setSent((sent) => sent + 1);
		console.log("====SENT====", sent);
		setInteraction([]);
		setCount(0);
		// await fetch("http://127.0.0.1:3002/siemens", {
		// 	method: "PUT",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// 	body: JSON.stringify({ data }),
		// });
		// console.log(data);
	};
	const report = async (e) => {
		const date = Date.now();
		setCount(count + 1);
		let cp = e.nativeEvent.composedPath();
		let parents = cp.slice(0, -4);
		const path = parents.map((x) => (x.id !== "" ? x.id : x.tagName));

		const data = { date: date, path: path, type: e.type };

		if (count > 10 || e.type === "click") {
			console.log("report");
			send();
		} else {
			interaction.push(data);
			console.log("savign");
		}
		// const data = { el: el, type: type, date: date };
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
			<p>
				{sent} {interaction.length}
			</p>
			<ThemeBtn />
			<Landing />
			<Projects />
			<Tools />
			<SoftSkills />
		</div>
	);
}

export default App;
