import styled from 'styled-components';

export const Button = styled.button`
    border-radius: 12px;
    color: #59E3BA;
    height: 100%;
    padding: 1.2rem 2.4rem;
    background: #0A1A15;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 3px 16px rgba(0,0,0,0.15);
    cursor: pointer;
    transition: background .2s linear;


    &:hover {
        background: #59E3BA;
        color: #0A1A15;
        transition: background .2s linear;
    }

    @media (max-width: 657px){
        height: 64px;
    }
`;

export const FormContainer = styled.form`
    display: flex;
    width: 100%;
    height: 72px;
    margin-top: 64px;
    flex-wrap: wrap;
    gap: 16px;

    @media (max-width: 657px){
        gap: 16px;
        height: auto;
    }

    .input {
        flex-grow: 1;
        padding: 24px;
        background: #E9ECEF;
        border-radius: 12px;
        box-shadow: 0 3px 6px rgba(0,0,0,0.1);
        font-size: 2.0rem;
        font-weight: 700;
        color: #6C757D;
        @media (max-width: 657px){
            height: 64px;
            width: 100%;
        }
    }
`;