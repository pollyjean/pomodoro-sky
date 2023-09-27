import styled from "styled-components";
import { motion, spring } from "framer-motion";

type StyledElement = ReturnType<typeof styled.div>;
const S: Record<string, StyledElement> = {};
S.Section = styled.section`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
S.Button = styled.button`
  background-color: tomato;
  border: none;
  width: 12.5rem;
  height: 12.5rem;
  box-shadow: inset -10px -10px 15px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;
const App = () => {
  return (
    <S.Section>
      <S.Button
        as={motion.button}
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotateZ: 360 }}
        transition={{ type: "spring", bounce: 0.4 }}
      >
        Box1
      </S.Button>
    </S.Section>
  );
};

export default App;
