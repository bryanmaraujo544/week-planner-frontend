import { createGlobalStyle } from "styled-components";
import { parseCookies } from "nookies";

export const GlobalStyles = createGlobalStyle`
    html {
        font-size: 62.5%;

        @media (max-width: 468px) {
            font-size: 8px;
        }
    }
    body {
        height: 100%;
        width: 100%;
        max-width: 100vw;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        line-height: 1.5;
        background: none;
        outline: none;
        border: none;
        list-style: none;
        text-decoration: none;
        transition: .1s linear;
    }

`

