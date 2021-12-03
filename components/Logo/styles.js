import styled from 'styled-components';

export const Container = styled.h1`
    font-size: 36px;
    background-color: #f3ec78;
    background-image: linear-gradient(45deg, #59E3BA, #0A1A15);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 900;

    @media (max-width: 632px) {
        font-size: 26px;
    }
`