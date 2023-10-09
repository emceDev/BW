import { useState, useContext, useEffect } from "react";
import styles from "./projects.module.scss";
import projects from "./projects.json";
import { NewTab } from "../../svgs/newTab";
import { GitHub } from "../../svgs/GitHub";
import { Heart } from "../../svgs/heart";
const Projects = () => {
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
      {postNum < projects.projects.length ? (
        <button
          onClick={() => {
            setPostNum(postNum + 2);
          }}
          id="ProjectBtnMore"
        >
          {projects.button[l]}
        </button>
      ) : (
        <a
          href="https://github.com/emceDev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button id="ProjectBtnMore">GitHub</button>
        </a>
      )}
    </div>
  );
};
const Project = (props) => {
  const { tech, title, desc, image, id, link, description, git, placeholder } =
    props.data;
  const l = navigator.language !== "pl-PL" ? "eng" : "pl";

  return (
    <div className={styles.Project} id={title.eng + id}>
      <ProjImage
        id={title.eng + id + "img"}
        image={image}
        placeholder={placeholder}
      />
      <h4 id={title.eng + id + "h4"}>{title[l]}</h4>
      <h5 id={title.eng + id + "h5"}>{tech.map((x) => x + " ")}</h5>
      <p id={title.eng + id + "p"}>{description[l]}</p>

      <ul>
        <li
          id={title.eng + id + "heart"}
          onClick={() =>
            !link &&
            (document.getElementById(
              title.eng + id + "inactivep"
            ).style.display = "block")
          }
        >
          {link !== false ? (
            <a href={link} target="_blank">
              <NewTab />
            </a>
          ) : (
            <>
              <p
                id={title.eng + id + "inactivep"}
                style={{
                  background: "black",
                  color: "white",
                  position: "absolute",
                  display: "none",
                }}
              >
                Koniec wsparcia dla projektu
              </p>
              <NewTab />
            </>
          )}
        </li>
        <li id={title.eng + id + "heart"}>
          <a href={git} target="_blank">
            <GitHub />
          </a>
        </li>
        <li id={title.eng + id + "heart"}>
          <Heart />
        </li>
      </ul>
    </div>
  );
};
const ProjImage = (props) => {
  const { image, placeholder } = props;
  const [src, setSrc] = useState(placeholder);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => {
      setLoaded(true);
      setSrc(img.src);
    };
  }, []);

  return (
    <img
      src={src}
      alt={src}
      style={{ filter: loaded ? "none" : "blur(10px)", transition: "all 0.5s" }}
    ></img>
  );
};
export default Projects;
