import { createRef, useContext, useEffect, useState } from "react";
import styles from "./tools.module.scss";
import txt from "./tools.json";

const Tools = (props) => {
	const l = navigator.language !== "pl-PL" ? "eng" : "pl";
	const [scroll, setScroll] = useState(0);
	const [toLoad, setToLoad] = useState(1);
	const loadNext = () => {
		setTimeout(() => {
			setToLoad(toLoad + 1);
		}, 300);
	};

	return (
		<div className={styles.Tools} id="Tools">
			<h1>{txt.title[l]}</h1>
			{txt.tools.slice(0, toLoad).map((tool) => {
				return (
					<Tool
						key={tool.title}
						data={{
							button: txt.button[l],
							title: tool.title,
							short: tool.short[l],
							desc: tool.desc[l],
						}}
						loadNext={loadNext}
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
		let options = {
			root: null,
			rootMargin: "0px",
			threshold: 0.9,
		};
		const cb = (e) => {
			if (e[0].isIntersecting === true) {
				props.loadNext();
				return observer.disconnect();
			}
		};
		const observer = new IntersectionObserver((e) => cb(e), options);

		observer.observe(tool.current);
	}, []);
	useEffect(() => {
		const h = tool.current.children[0].children[0];
		const div = tool.current.children[1].children;
		const par = div[0];
		const div2 = div[1].children;
		const btn = div2[0];
		const desc = div2[1];
		const device = window.innerWidth > 700;
		if (device) {
			h.style.top = Math.floor(Math.random() * 25) + 3 + "%";
			h.style.right = Math.floor(Math.random() * 40) + 0 + "%";
			par.style.marginTop = Math.floor(Math.random() * 10) + 3 + "%";
			par.style.marginLeft = Math.floor(Math.random() * 6) + 1 + "%";
			btn.style.marginLeft = Math.floor(Math.random() * 50) + 10 + "%";
			desc.style.marginLeft = Math.floor(Math.random() * 15) + 5 + "%";
		} else {
			h.style.top = Math.floor(Math.random() * 25) + 3 + "%";
			h.style.right = Math.floor(Math.random() * 40) + 0 + "%";
			par.style.marginTop = Math.floor(Math.random() * 10) + 3 + "%";
			par.style.marginRight = Math.floor(Math.random() * 6) + 1 + "%";
			btn.style.marginRight = Math.floor(Math.random() * 30) + 0 + "%";
			desc.style.marginRight = Math.floor(Math.random() * 20) + 5 + "%";
		}
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
					<p
						style={{ maxHeight: details ? "100vh" : "0px" }}
						id={"btn" + title}
					>
						{desc}
					</p>
				</div>
			</div>
		</div>
	);
};
export default Tools;
