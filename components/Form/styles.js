import styled from 'styled-components';

export const Button = styled.button`
    border-radius: 12px;
    color: ${props => props.theme.primary};
    height: 100%;
    padding: 1.2rem 2.4rem;
    background: ${props => props.theme.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 3px 16px rgba(0,0,0,0.15);
    cursor: pointer;
    transition: background .2s linear;


    &:hover {
        background: ${props => props.theme.primary};
        color: ${props => props.theme.secondary};
        transition: background .2s linear;
    }

    @media (max-width: 657px){
        height: 7.0rem;
    }
`;

export const FormContainer = styled.form`
    display: flex;
    width: 100%;
    height: 72px;
    margin-top: 6.4rem;
    flex-wrap: wrap;
    gap: 16px;

    @media (max-width: 657px){
        gap: 16px;
        height: auto;
    }

    .input {
        flex-grow: 1;
        height: 100%;
        padding: 24px;
        background: ${props => props.theme.primaryGray};
        border-radius: 12px;
        box-shadow: 0 3px 6px rgba(0,0,0,0.1);
        font-size: 2.0rem;
        font-weight: 700;
        color: ${props => props.theme.terciaryGray};

        @media (max-width: 657px){
            height: 7.0rem;
            width: 100%;
        }
    }
`;