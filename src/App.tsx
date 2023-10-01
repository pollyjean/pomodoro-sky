import { motion } from "framer-motion";
import { Section, Wrap, Box, Circle, CircleWrap } from "./style";
import { useState } from "react";

const S = { Section, Wrap, Box, Circle, CircleWrap };

const App = () => {
  const [Toggle, setToggle] = useState(false);
  const [clicked, setClicked] = useState(false);
  const toggleSwitch = () => {
    setToggle((prev) => !prev);
  };
  const onClick = () => {
    setClicked((prev) => !prev);
  };

  return (
    <S.Section>
      <S.Box onClick={toggleSwitch} style={{ justifyContent: Toggle ? "flex-end" : "flex-start" }}>
        <S.Circle as={motion.div} layout transition={{ ease: "easeIn", duration: 0.185 }} />
      </S.Box>
      <S.Wrap onClick={onClick}>
        <S.CircleWrap>
          {!clicked ? <S.Circle as={motion.div} layoutId="clicked" style={{ borderRadius: "5px" }} /> : null}
        </S.CircleWrap>
        <S.CircleWrap>
          {clicked ? <S.Circle as={motion.div} layoutId="clicked" style={{ borderRadius: "50%" }} /> : null}
        </S.CircleWrap>
      </S.Wrap>
    </S.Section>
  );
};

export default App;
