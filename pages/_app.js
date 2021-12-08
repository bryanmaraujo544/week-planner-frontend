import { useContext } from 'react';
import { ThemeProvider as ThemeProviderStyled } from 'styled-components';
import { GlobalStyles } from '../styles/global';
import { theme } from '../styles/theme';
import { ThemeProvider, ThemeContext } from '../contexts/ThemeProvider';

function MyApp({ Component, pageProps }) {
  const themeContext = useContext(ThemeContext)
  console.log({ themeContext })
  return (
    <>
      <GlobalStyles />
      <ThemeProviderStyled theme={theme.light}>
          <Component {...pageProps}/>
      </ThemeProviderStyled>
    </>
  )
}

export default MyApp
