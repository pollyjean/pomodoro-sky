import styled from "styled-components";
import { motion } from "framer-motion";

type StyledElement = ReturnType<typeof styled.div>;
const S: Record<string, StyledElement> = {};

S.Section = styled.section`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: tomato;
`;
S.Button = styled.button`
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: 12.5rem;
  height: 12.5rem;
  box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 3rem;
`;

const boxVariants = {
  hover: {
    scale: 1.2,
    rotateZ: 90,
  },
  click: {
    borderRadius: "50%",
    scale: 0.9,
  },
};

const App = () => {
  return (
    <S.Section>
      <S.Button as={motion.button} variants={boxVariants} whileHover="hover" whileTap="click" />
    </S.Section>
  );
};

export default App;
