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
    margin-bottom: 42px;
    gap: 8px;
    margin-top: -4px;
    background: #F3F5F7;
    box-shadow: 0 2px 4px rgba(0,0,0,0.03);
    border-radius: 12px;
    padding: 6px;

    .toggleOpen-icon {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 4px;
        padding: 4px;
        padding-top: 0px;
        color: #ADB5BD;
        z-index: 11;
        position: absolute;
        top: 100%;

        &:hover {
            color: #6C757D;
        }
    }
`;

export const Day = styled.h3`
    font-size: 18px;
    font-weight: 700;
    color: #ADB5BD;
`;

export const EmptyWorkouts = styled.div`
    width: 100%;
    padding: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    border: 2px dashed #C4C4C4;
    gap: 16px;
    margin-bottom: 16px;
    cursor: pointer;

    &:hover{
        border: 2px dashed #ADB5BD;

        p { color: #ADB5BD; }
    }

    p {
        font-size: 20px;
        font-weight: 700;
        color: #C4C4C4;
    }
`;