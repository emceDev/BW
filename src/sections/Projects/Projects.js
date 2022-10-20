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
export const Projects = () => {
	const [postNum, setPostNum] = useState(2);
	return (
		<div id="Projects" className={styles.Projects}>
			<h1>Projects </h1>
			<div className={styles.List} id="ProjectList">
				{projects.slice(0, postNum).map((x) => {
					return <Project key={x.id} data={x} />;
				})}
			</div>

			<button
				onClick={() => {
					setPostNum(postNum + 2);
				}}
				id="ProjectBtnMore"
			>
				show more
			</button>
		</div>
	);
};
const Project = (props) => {
	const { technologies, title, desc, img, id } = props.data;
	return (
		<div className={styles.Project} id={title + id}>
			<img id={title + id + "img"}></img>
			<h4 id={title + id + "h4"}>{title}</h4>
			<h5 id={title + id + "h5"}>{technologies.map((x) => x + " ")}</h5>
			<p id={title + id + "p"}>{desc}</p>
			{/* <div>
				<div>G</div>
				<div>L</div>
				<h>h</h>
			</div> */}
		</div>
	);
};
