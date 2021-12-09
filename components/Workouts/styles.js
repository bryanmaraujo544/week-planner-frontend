import styled from 'styled-components';

export const WorkoutsContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 6.4rem;
`;

export const WorkoutsPerDay = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 24px 0;
    align-items: center;
`;

export const DayContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 4.2rem;
    gap: 8px;
    margin-top: -4px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.03);
    border-radius: 12px;
    padding: 6px;
    background: ${props => props.theme.secondaryGray};

    .toggleOpen-icon {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 4px;
        padding: 4px;
        padding-top: 0px;
        color: ${props => props.theme.terciaryGray};
        z-index: 11;
        position: absolute;
        top: 100%;

        &:hover {
            color: ${props => props.theme.terciaryGray};
        }
    }
`;

export const Day = styled.h3`
    font-size: 1.8rem;
    font-weight: 700;
    color: ${props => props.theme.terciaryGray};
`;

export const EmptyWorkouts = styled.div`
    width: 100%;
    padding: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    border: 2px dashed ${props => props.theme.secondaryGray};
    gap: 16px;
    margin-bottom: 16px;
    cursor: pointer;
    transition: .3s;

    &:hover{
        border: 2px dashed ${props => props.theme.terciaryGray};
        transition: .3s;
        p { color: ${props => props.theme.terciaryGray}; }
    }

    p {
        font-size: 2.0rem;
        font-weight: 700;
        color: ${props => props.theme.secondaryGray};
    }
`;