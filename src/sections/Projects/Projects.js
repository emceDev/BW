import { useState } from "react";
import styles from "./projects.module.scss";
const projects = [
	{
		id: 1,
		title: "Monopoly",
		desc: "Long game anyone can play with eachother made with next js hosted on vercel",
		technologies: ["react", "next.js", "noSqldb", "node.js", "Api"],
	},
	{
		id: 2,
		title: "Monopoly",
		desc: "Long game anyone can play with eachother made with next js hosted on vercel",
		technologies: ["react", "next.js", "noSqldb", "node.js", "Api"],
	},
	{
		id: 3,
		title: "Monopoly",
		desc: "Long game anyone can play with eachother made with next js hosted on vercel",
		technologies: ["react", "next.js", "noSqldb", "node.js", "Api"],
	},
	{
		id: 4,
		title: "Monopoly",
		desc: "Long game anyone can play with eachother made with next js hosted on vercel",
		technologies: ["react", "next.js", "noSqldb", "node.js", "Api"],
	},
];
export const Projects = (props) => {
	const [postNum, setPostNum] = useState(2);
	return (
		<div className={styles.Projects}>
			<h1>Projects </h1>
			<div className={styles.List}>
				{projects.slice(0, postNum).map((x) => {
					return <Project key={x.id} data={x} report={props.report} />;
				})}
			</div>

			<button
				onClick={() => {
					setPostNum(postNum + 2);
				}}
			>
				show more
			</button>
		</div>
	);
};
const Project = (props) => {
	const { technologies, title, desc, img } = props.data;
	return (
		<div
			className={styles.Project}
			onMouseEnter={(e) => props.report(e.target.parentNode, e.type)}
		>
			<img></img>
			<h4>{title}</h4>
			<h5>{technologies.map((x) => x + " ")}</h5>
			<p>{desc}</p>
		</div>
	);
};
