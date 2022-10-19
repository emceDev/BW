import { createRef, useEffect, useState } from "react";
import styles from "./tools.module.scss";
const tools = [
	{
		id: 1,
		title: "React",
		short: "advanced concepts of react taken from official react.js site ",
		desc: "react description of project I had before",
	},
	{
		id: 2,
		title: "React1",
		short:
			"advanced concepts of react taken from official react.js site advanced concepts of react taken from official react.js site",
		desc: "react description of project I had before",
	},
	{
		id: 3,
		title: "React2",
		short: "advanced concepts of react taken from official react.js site",
		desc: "react description of project I had before",
	},
	{
		id: 4,
		title: "React3",
		short:
			"advanced concepts of react taken from official react.js site advanced concepts of react taken from official react.js site",
		desc: "react description of project I had before",
	},
	{
		id: 5,
		title: "React4",
		short: "advanced concepts of react taken from official react.js site",
		desc: "react description of project I had before",
	},
];

export const Tools = (props) => {
	return (
		<div className={styles.Tools}>
			<h1>Tools & skills</h1>
			{tools.map((tool) => {
				return <Tool key={tool.id} data={tool} report={props.report} />;
			})}
		</div>
	);
};

const Tool = (props) => {
	const { title, short, desc } = props.data;
	const [details, setDetails] = useState(false);
	const tool = createRef();

	useEffect(() => {
		const h = tool.current.children[0].children[0];
		const div = tool.current.children[1].children;
		const par = div[0];
		const div2 = div[1].children;
		const btn = div2[0];
		const desc = div2[1];
		h.style.top = Math.floor(Math.random() * 25) + 3 + "%";
		h.style.right = Math.floor(Math.random() * 40) + 0 + "%";
		par.style.marginTop = Math.floor(Math.random() * 10) + 3 + "%";
		par.style.marginLeft = Math.floor(Math.random() * 6) + 1 + "%";
		btn.style.marginLeft = Math.floor(Math.random() * 50) + 0 + "%";
		desc.style.marginLeft = Math.floor(Math.random() * 6) + 0 + "vw";
	}, []);

	return (
		<div
			className={styles.Tool}
			ref={tool}
			onMouseEnter={(e) => props.report(e.target.parentNode, e.type)}
		>
			<div className={styles.Left}>
				<h2>{title}</h2>
			</div>
			<div className={styles.Right}>
				<p>{short}</p>
				<div>
					<button
						onClick={() => {
							setDetails(true);
						}}
						style={{ display: !details ? "block" : "none" }}
					>
						more
					</button>
					<p style={{ display: details ? "block" : "none" }}>{desc}</p>
				</div>
			</div>
		</div>
	);
};
