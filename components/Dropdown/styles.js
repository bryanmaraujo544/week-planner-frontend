import styled from 'styled-components';

export const Select = styled.div`
    position: relative;
    height: 100%;
    width: 175px;
    background: #E9ECEF;
    border-radius: 12px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.1);
    padding: 8px;
    font-size: 1.6rem;
    font-weight: 700;
    color: #6C757D;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    @media (max-width: 657px){
        flex-grow: 1;
        height: 7.0rem;
    }

    .icon {
        margin-left: 8px;
    }
`;

export const OptionContainer = styled.div`
    padding: 8px;
    background: #DEE2E6;
    position: absolute;
    top: calc(100% + 12px);
    width: 175px;
    border-radius: 12px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    z-index: 888;

    .option {
        cursor: pointer;
        padding: 8px;
        border-radius: 10px;
        &:hover {
            background: #cccccc;
            transition: .25s;
        }
    }
`;