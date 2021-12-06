import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0,0,0,0.2);
  padding: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 999;
  backdrop-filter: blur(6px);
`;

export const ModalCard = styled.div`  
  position: relative;
  background: #FAFFFD;
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  box-shadow: 0 3px 9px rgba(0,0,0,0.1);
`;

export const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: -12px;
  margin-right: -12px;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 2.4rem;
  text-align: center;
  font-weight: 700;
  color: #0A1A15;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  
`;

export const Button = styled.button`
  border-radius: 12px;
  padding: 8px;
  width: 125px;
  color: ${props => props.isCancel ? '#0A1A15' : '#fff'};
  background: ${props => props.isCancel ? 'transparend' : 'red'};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;

  @media (max-width: 468px) {
    width: 100px;
  }

  &:hover {
    transform: scale(1.05);
  }
`;