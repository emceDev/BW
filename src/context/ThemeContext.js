import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext({ theme: "dark", undefined });

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("light");

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
