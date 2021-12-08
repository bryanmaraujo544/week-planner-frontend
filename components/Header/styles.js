import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1.6rem;
  gap: 16px;

  h3 {
      font-size: 2.4rem;
      font-weight: 900;
      color: #0A1A15;
      margin-right: 16px;
      margin-top: -4px;

      @media (max-width: 678px) {
        font-size: 2.2rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: hidden;
        max-width: 150px;
      }

      @media (max-width: 400px) {
        max-width: 100px;
      }

      @media (max-width: 350px) {
        max-width: 70px;
      }
  }

  .logo {
    @media (max-width: 400px) {
      font-size: 2.8rem !important;
    }
  }

  .logout-icon {
    color: #0A1A15;
    cursor: pointer;

    &:hover {
      color: #59E3BA;
    }
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const ColorModeBtn = styled.div`
  position: relative;
  display: flex;
  margin-left: 6px;
  cursor: pointer;

  & > div {
    display: flex
  }

  .sun {
    position: absolute;
    width: 2.2rem;
    height: 2.2rem;
  }

  .moon {
    width: 2.2rem;
    height: 2.2rem;
  }
`;
