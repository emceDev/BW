import { createRef, useEffect, useState } from "react";
import styles from "./tools.module.scss";
import txt from "./tools.json";

export const Tools = (props) => {
	const l = navigator.language !== "pl-PL" ? "eng" : "pl";
	return (
		<div className={styles.Tools} id="Tools">
			<h1>{txt.title[l]}</h1>
			{txt.tools.map((tool) => {
				return (
					<Tool
						key={tool.title}
						data={{
							button: txt.button[l],
							title: tool.title,
							short: tool.short[l],
							desc: tool.desc[l],
						}}
					/>
				);
			})}
		</div>
	);
};

const Tool = (props) => {
	const { title, short, desc, button } = props.data;
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
		<div className={styles.Tool} ref={tool} id={"Tools" + title}>
			<div className={styles.Left}>
				<h2 id={"h2" + title}>{title}</h2>
			</div>
			<div className={styles.Right} id={"ToolsRight" + title}>
				<p id={"p" + title}>{short}</p>
				<div id={"ToolsRightCont" + title}>
					<button
						onClick={() => {
							setDetails(true);
						}}
						style={{ display: !details ? "block" : "none" }}
						id={"btn" + title}
					>
						{button}
					</button>
					<p style={{ display: details ? "block" : "none" }} id={"btn" + title}>
						{desc}
					</p>
				</div>
			</div>
		</div>
	);
};
