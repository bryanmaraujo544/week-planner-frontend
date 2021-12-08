import { createContext, useState } from "react";
import { parseCookies
 } from "nookies";
 
export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
    const { theme: themeChosen } = parseCookies();
    const [theme, setTheme] = useState(themeChosen || 'light');
    const toggleTheme = () => setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');

    return (
        <ThemeContext.Provider value={{ oi: 'oi' }}>
            {children}
        </ThemeContext.Provider>
    )
}