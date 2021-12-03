import styled, { css } from 'styled-components';

export const Card = styled.div`
  width: 100%;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  background: #DEE2E6;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  margin-bottom: 16px;

  ${(props) => props.wasTrained && css `
    background: #8F959C;
  `}

  .check-icon {
    cursor: pointer;
    transition: .2s;
    ${(props) => props.wasTrained ? css `
      color: #59E3BA;
      filter: drop-shadow(0px 0px 6px #59E3BA80);
    ` : css `
      color: #0A1A15;
    `}

    &:hover {
      filter: drop-shadow(0px 0px 12px #59E3BA);
      transition: .2s;
    }
  }

  .delete-icon {
    cursor: pointer;
    color: red;
    filter: drop-shadow(0px 0px 6px #FF5C5C80);
    transition: .2s;


    &:hover {
      filter: drop-shadow(0px 0px 12px #F5000080);
      transition: .2s;
    }
  }
  
  
  
  .workout-info {
    .info-container {
      display: flex;
      align-items: center;
      gap: 16px;
        
      & + .info-container {
        margin-top: 4px;
      }

      .icon {
        color: ${(props) => props.wasTrained ? '#E9ECEF' : '#0A1A15' };
      }
    }
    .workout-name {
      font-size: 2.8rem;
      font-weight: 700;
      color: ${(props) => props.wasTrained ? '#E9ECEF' : '#0A1A15' };

      @media (max-width: 678px) {
        font-size: 2.4rem;
      }

      @media (max-width: 468px) {
        font-size: 1.8rem;
      }
    }

    .workout-day {
      font-size: 2.0rem;
      color: ${(props) => props.wasTrained ? '#CED4DA' : '#6C757D' } ;
      font-weight: 500;
      margin-top: 4px;

      @media (max-width: 468px) {
        font-size: 1.6rem;
      }

    }
  }
`;

export const RightIcons = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
`;