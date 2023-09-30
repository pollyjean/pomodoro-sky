import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  height: 200vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-top: 5rem;
  gap: 1rem;
  background: linear-gradient(90deg, rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%);
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30rem;
  height: 30rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
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
  height: 10rem;
  width: 10rem;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
`;
