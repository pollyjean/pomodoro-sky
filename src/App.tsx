import { AnimatePresence, motion } from "framer-motion";
import { Section, Button, Svg, Box } from "./style";
import { useState } from "react";

const S = { Section, Button, Svg, Box };

const App = () => {
  const [showing, setShowing] = useState(false);
  const svgTransition = {
    start: { fill: "rgba(200, 200, 0, 0)", pathLength: 0 },
    end: { fill: "rgba(120, 220, 120, 0.8)", pathLength: 1 },
    transition: {},
  };
  const boxVariants = {
    initial: { opacity: 0, scale: 0.3, rotateZ: 180 },
    visible: { opacity: 1, scale: 1, rotateZ: 0 },
    exit: { opacity: 0, y: -20 },
  };
  const onClick = () => {
    setShowing((prev) => !prev);
  };

  return (
    <S.Section>
      <S.Button onClick={onClick}>
        <S.Svg
          xmlns="http://www.w3.org/2000/svg"
          fill="transparent"
          stroke="black"
          strokeWidth="4"
          viewBox="0 0 488 512"
        >
          <motion.path
            variants={svgTransition}
            initial="start"
            animate="end"
            transition={{ default: { duration: 2, delay: 2 }, fill: { duration: 2 } }}
            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
          />
        </S.Svg>
      </S.Button>
      <AnimatePresence>
        {showing && <S.Box as={motion.div} variants={boxVariants} initial="initial" animate="visible" exit="exit" />}
      </AnimatePresence>
    </S.Section>
  );
};

export default App;
