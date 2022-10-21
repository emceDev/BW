import { createRef, useEffect, useState } from "react";
import styles from "./softSkills.module.scss";
import txt from "./softSkills.json";
const softSkills = [
	{
		title: "hard worker",
		sub: "keeps direction",
		story: "Was born in poland and it speaks for itself",
	},
	{
		title: "hard worker1",
		sub: "keeps direction",
		story: "Was born in poland and it speaks for itself",
	},
	{
		title: "hard worker2",
		sub: "keeps direction",
		story: "Was born in poland and it speaks for itself",
	},
	{
		title: "hard worker3",
		sub: "keeps direction",
		story: "Was born in poland and it speaks for itself",
	},
	{
		title: "hard worker4",
		sub: "keeps direction",
		story: "Was born in poland and it speaks for itself",
	},
];
export const SoftSkills = (props) => {
	const l = navigator.language !== "pl-PL" ? "eng" : "pl";
	return (
		<div className={styles.SoftSkills} id="SoftSkills">
			<h1>{txt.title[l]}</h1>
			<div className={styles.SkillContainer}>
				{txt.soft[l].map((skill) => (
					<Skill data={skill} key={skill.title} />
				))}
			</div>
		</div>
	);
};
const Skill = (props) => {
	const { title, sub, des } = props.data;
	const [expanded, setExpanded] = useState(false);
	const skill = createRef();
	useEffect(() => {
		skill.current.style.marginLeft = Math.floor(Math.random() * 10) + 0 + "vw";
		skill.current.style.marginTop = Math.floor(Math.random() * 10) + 0 + "vw";
	}, []);
	return (
		<div
			ref={skill}
			onMouseEnter={(e) => {
				setExpanded(true);
			}}
			id={title}
			className={styles.Skill}
		>
			<h2>{title}</h2>
			<h4>({sub})</h4>
			<p style={{ visibility: expanded ? "visible" : "hidden" }}>{des}</p>
		</div>
	);
};
