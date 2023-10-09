import React, { useContext, useEffect, useState, Suspense } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { Landing } from "./sections/Landing/Landing";
import { ThemeBtn } from "./components/ThemeBtn/ThemeBtn";
function App() {
  // const ThemeBtn = React.lazy(() => import("./components/ThemeBtn/ThemeBtn"));
  // const Landing = React.lazy(() => import("./sections/Landing/Landing"));

  const Bio = React.lazy(() => import("./sections/Bio/Bio"));
  const Contact = React.lazy(() => import("./sections/Contact/Contact"));
  const Projects = React.lazy(() => import("./sections/Projects/Projects"));
  const SoftSkills = React.lazy(() =>
    import("./sections/SoftSkills/SoftSkills")
  );
  const Tools = React.lazy(() => import("./sections/Tools/Tools"));

  const { theme } = useContext(ThemeContext);
  const [interaction, setInteraction] = useState([]);
  const [count, setCount] = useState(0);

  const send = async () => {
    setInteraction([]);
    setCount(0);
    await fetch(
      process.env.REACT_APP_SERVER_ADDRES + window.location.pathname,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ interaction }),
      }
    );
  };
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") console.log = () => {};
  }, []);
  const report = async (e) => {
    const date = Date.now();
    setCount(count + 1);
    let cp = e.nativeEvent.composedPath();
    let parents = cp.slice(0, -4);
    const path = parents.map((x) => (x.id !== "" ? x.id : x.tagName));

    const data = { date: date, path: path, type: e.type };

    if (count > 10 || e.type === "click") {
      interaction.push(data);
      send();
    } else {
      interaction.push(data);
    }
  };

  return (
    <div
      className={`App ${theme}`}
      onMouseOver={(e) => {
        // report(e);
      }}
      onClick={(e) => {
        // report(e);
      }}
    >
      <ThemeBtn />
      <Landing />

      <Suspense fallback={<div>Loading...</div>}>
        <Bio />
        <Projects />
        <Tools />
        <SoftSkills />

        <Contact />
      </Suspense>
    </div>
  );
}

export default App;
