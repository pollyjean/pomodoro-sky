import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";

type StyledElement = ReturnType<typeof styled.div>;

const S = {
  Section: styled.section`
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: tomato;
  ` as StyledElement,
  Wrap: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30rem;
    height: 30rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    overflow: hidden;
  ` as StyledElement,
  Button: styled.button`
    background-color: rgba(255, 255, 255, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    width: 10rem;
    height: 10rem;
    box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 3rem;
  ` as StyledElement,
};

const App = () => {
  const wrapRef = useRef(null);
  const x = useMotionValue(0);
  const scale = useTransform(x, [-150, 0, 150], [0.1, 0.2, 0.3]);
  return (
    <S.Section>
      <button onClick={() => x.set(0)}>move</button>
      <S.Wrap ref={wrapRef}>
        <S.Button as={motion.button} style={{ x, scale }} drag="x" dragConstraints={wrapRef} />
      </S.Wrap>
    </S.Section>
  );
};

export default App;
