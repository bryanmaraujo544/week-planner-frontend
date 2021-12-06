import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 16px;

  h3 {
      font-size: 24px;
      font-weight: 900;
      color: #0A1A15;
      margin-right: 16px;
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