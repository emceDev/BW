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
	const [scroll, setScroll] = useState({ x: 0, y: 0 });

	const handleMove = (e) => {
		const listener = e.target.addEventListener("mousemove", (e) => {
			setScroll({ x: Math.floor(e.pageX), y: Math.floor(e.pageY) });
		});
		return e.type === "mouseleave"
			? window.removeEventListener("mousemove", () => {})
			: listener;
	};
	useEffect(() => {
		document
			.getElementById("SoftSkills")
			.addEventListener("mouseenter", (e) => handleMove(e));
		document
			.getElementById("SoftSkills")
			.addEventListener("mouseleave", (e) => handleMove(e));
	}, []);
	return (
		<div className={styles.SoftSkills} id="SoftSkills">
			<h1>{txt.title[l]}</h1>

			<div className={styles.SkillContainer}>
				{txt.soft[l].map((skill) => (
					<Skill data={skill} key={skill.title} scroll={scroll} />
				))}
			</div>
		</div>
	);
};
const Skill = (props) => {
	const { title, sub, des } = props.data;
	const { x, y } = props.scroll;
	const [expanded, setExpanded] = useState(false);
	const [h2x, setH2mid] = useState(0);
	const skill = createRef();

	useEffect(() => {
		const ml = Math.floor(Math.random() * 10) + 0;
		skill.current.style.marginLeft = ml + "vw";
		skill.current.style.marginTop = ml + "vw";
		const posX = skill.current.getBoundingClientRect().x;
		const mid = skill.current.getBoundingClientRect().width / 2;
		const x = Math.floor(posX + mid);
		setH2mid(x);
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
			<h2
				style={{
					marginLeft: (x - h2x) / 50 + "%",
					marginTop: y / 50 + "px",
				}}
			>
				{title}
			</h2>
			<h4 style={{ marginLeft: (x - h2x) / 100 + "%" }}>({sub})</h4>
			<p style={{ visibility: expanded ? "visible" : "hidden" }}>{des}</p>
		</div>
	);
};
