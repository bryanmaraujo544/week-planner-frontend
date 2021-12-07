import styled from 'styled-components';

export const Container = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 16px;
`;

export const Title = styled.h1`
  font-size: 4.2rem;
  font-weight: 900;
  margin-top: 3.2rem;
  margin-bottom: 4px;
  color: #0A1A15;
`;

export const Subtitle = styled.h2`
  font-size: 2.0rem;
  font-weight: 500;
  margin-bottom: 3.2rem;
  color: #6C757D;

  a {
    color: #12694F;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 450px;
`;

export const Input = styled.input`
  padding: 2.0rem;
  border-radius: 12px;
  background: #DEE2E6;
  font-size: 1.8rem;
  width: 100%;
  font-weight: 700;
  box-shadow: 0 3px 5px rgba(0,0,0,0.05);
`;

export const Button = styled.button`
  background: #59E3BA;
  border-radius: 12px;
  margin-top: 8px;
  color: #ffffff;
  height: 48px;
  font-size: 1.8rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 0 9px #59E3BA80;
`;

export const Error = styled.span`
  font-size: 1.4rem;
  color: red;
  margin-top: -4px;
  margin-left: 4px;
  margin-bottom: 4px;
`;