import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  background: linear-gradient(90deg, rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%);
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 11rem;
  overflow: hidden;
`;

export const Button = styled.button`
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: 5rem;
  height: 2rem;
  box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 3rem;
`;

export const Svg = styled.svg`
  height: 1.5rem;
  overflow: visible;
`;

export const Box = styled.div`
  width: 5rem;
  height: 2.5rem;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 1.2rem;
  padding: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: monospace;
  font-size: 4rem;
  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

export const CircleWrap = styled.div`
  height: 2.2rem;
  width: 2.2rem;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: monospace;
  font-size: 4rem;
`;

export const Circle = styled.div`
  height: 2rem;
  width: 2rem;
  background-color: rgba(0, 180, 80, 1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: monospace;
  font-size: 4rem;
  color: rgba(0, 0, 0, 0.5);
`;
