import { useState } from "react";
import styles from "./projects.module.scss";
import projects from "./projects.json";

export const Projects = () => {
	const [postNum, setPostNum] = useState(2);
	const l = navigator.language !== "pl-PL" ? "eng" : "pl";
	return (
		<div id="Projects" className={styles.Projects}>
			<h1>{projects.title[l]}</h1>
			<div className={styles.List} id="ProjectList">
				{projects.projects.slice(0, postNum).map((x) => {
					return <Project key={x.id} data={x} />;
				})}
			</div>

			<button
				onClick={() => {
					setPostNum(postNum + 2);
				}}
				id="ProjectBtnMore"
			>
				{projects.button[l]}
			</button>
		</div>
	);
};
const Project = (props) => {
	const { tech, title, desc, img, id, link, description, git } = props.data;
	const l = navigator.language !== "pl-PL" ? "eng" : "pl";

	return (
		<div className={styles.Project} id={title.eng + id}>
			<img id={title.eng + id + "img"}></img>
			<h4 id={title.eng + id + "h4"}>{title[l]}</h4>
			<h5 id={title.eng + id + "h5"}>{tech.map((x) => x + " ")}</h5>
			<p id={title.eng + id + "p"}>{description[l]}</p>
			{/* <div>
				<div>G</div>
				<div>L</div>
				<h>h</h>
			</div> */}
		</div>
	);
};
