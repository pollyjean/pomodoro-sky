import { motion } from "framer-motion";
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

const boxVariants = {
  hover: {
    scale: 1.2,
    rotateZ: 90,
  },
  click: {
    scale: 0.9,
  },
  drag: {
    backgroundColor: "rgba(0,0,255, 0.2)",
    transition: {
      duration: 2,
    },
  },
};

const App = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  return (
    <S.Section>
      <S.Wrap ref={wrapRef}>
        <S.Button
          as={motion.button}
          drag
          dragSnapToOrigin
          dragElastic={0.5}
          dragConstraints={wrapRef}
          whileDrag="drag"
          variants={boxVariants}
          whileHover="hover"
          whileTap="click"
        />
      </S.Wrap>
    </S.Section>
  );
};

export default App;
