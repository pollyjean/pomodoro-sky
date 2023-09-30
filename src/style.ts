import styled from "styled-components";

const Section = styled.section`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: linear-gradient(90deg, rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%);
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30rem;
  height: 30rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

const Button = styled.button`
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: 10rem;
  height: 10rem;
  box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 3rem;
`;

export { Section, Wrap, Button };
