/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider as ThemeProviderStyled } from 'styled-components';
import { GlobalStyles } from '../styles/global';
import { theme as themeStyled } from '../styles/theme';
import { parseCookies , setCookie} from 'nookies';

export const ThemeContext = createContext({});

function MyApp({ Component, pageProps }) {
  const { themeSelected } = parseCookies();
  console.log('oi');

  const [theme, setTheme] = useState(themeSelected || 'light');
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    setCookie(null, 'themeSelected', theme === 'light' ? 'dark' : 'light');
  }

  return (
    <>
      <GlobalStyles />
      <ThemeProviderStyled theme={themeStyled[theme]}>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <Component {...pageProps}/>
        </ThemeContext.Provider>
      </ThemeProviderStyled>
    </>
  )
}

export default MyApp
