import { createRef, useEffect, useState } from "react";
import styles from "./softSkills.module.scss";
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
	return (
		<div className={styles.SoftSkills}>
			<h1>Soft skills</h1>
			<div className={styles.SkillContainer}>
				{softSkills.map((skill) => (
					<Skill data={skill} key={skill.title} report={props.report} />
				))}
			</div>
		</div>
	);
};
const Skill = (props) => {
	const { title, sub, story } = props.data;
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
				props.report(e.target.parentNode, e.type);
				setExpanded(true);
			}}
			className={styles.Skill}
		>
			<h2>{title}</h2>
			<h4>({sub})</h4>
			<p style={{ visibility: expanded ? "visible" : "hidden" }}>{story}</p>
		</div>
	);
};
