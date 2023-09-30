import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";
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
  const x = useMotionValue(0);
  useMotionValueEvent(x, "change", (now) => {
    console.log(now);
  });
  return (
    <S.Section>
      <S.Wrap>
        <button onClick={() => x.set(20)}>move</button>
        <S.Button as={motion.button} style={{ x }} drag="x" dragSnapToOrigin />
      </S.Wrap>
    </S.Section>
  );
};

export default App;
