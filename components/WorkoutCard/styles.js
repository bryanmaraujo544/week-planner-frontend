import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative; 
  margin-bottom: 16px;
  display: flex;
`;

export const Card = styled.div`
  width: 100%;
  padding: 2.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  background: #F3F5F7;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  cursor: grab;

  ${(props) => props.wasTrained === 1 && css `
    background: #8F959C;
  `}
  
  .workout-info {
    
    .info-container {
      display: flex;
      align-items: center;
      gap: 16px;
        
      & + .info-container {
        margin-top: 4px;
      }

      .icon {
        color: ${(props) => props.wasTrained === 1 ? '#E9ECEF' : '#0A1A15' };
      }
    }
    .workout-name {
      font-size: 2.8rem;
      font-weight: 700;
      color: ${(props) => props.wasTrained === 1 ? '#E9ECEF' : '#0A1A15' };
    }

    .workout-day {
      font-size: 2.0rem;
      color: ${(props) => props.wasTrained === 1 ? '#CED4DA' : '#6C757D' } ;
      font-weight: 500;
      margin-top: 4px;

    }
  }
`;

export const RightIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .icon-box {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .check-icon {
    cursor: pointer;
    transition: .2s;
    box-sizing: content-box;
    font-size: 43px;
    width: 28px;
    height: 28px;
    padding: 16px 6px;
    color: ${props => props.wasTrained === 1 ? '#59E3BA' : '#ADB5BD'};

    &:hover {
      color: #59E3BA;
    } 


  }

  .delete-icon {
    cursor: pointer;
    color: #f63033;
    filter: drop-shadow(0px 0px 6px #FF5C5C80);
    transition: .2s;
    padding: 16px 6px;
    width: 26px;
    height: 26px;
    padding: 16px 6px;
    box-sizing: content-box;

    &:hover {
      transition: .2s;
      color: #eb0909;
    }
  }
`;

export const DeleteDragButton = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  border-radius: 8px;
  
  ${props => props.isLeft ? css`
    left: 0;
  ` : css`
    right: 0;
  `}

  height: 100%;
  background: orange;

  .delete-drag-icon {
    color: #fff;
    width: 18px;
  }

`;