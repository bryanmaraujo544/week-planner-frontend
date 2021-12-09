/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global';
import { theme as themeStyled } from '../styles/theme';
import { parseCookies , setCookie} from 'nookies';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ThemeContext = createContext({});

function MyApp({ Component, pageProps }) {
  const { themeSelected } = parseCookies();
  console.log({ themeSelected })
  const [theme, setTheme] = useState(themeSelected || 'light');
  console.log(themeStyled[theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    setCookie(null, 'themeSelected', theme === 'light' ? 'dark' : 'light');
  }

  return (
    <>
      <ToastContainer
        pauseOnHover
        draggable
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        icon={true}
        closeOnClick
      />
        <ThemeProvider theme={themeStyled[theme]}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <GlobalStyles />
            <Component {...pageProps}/>
      </ThemeContext.Provider>
        </ThemeProvider>
    </>
  )
}

export default MyApp
