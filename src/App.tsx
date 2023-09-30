import { motion, useMotionValue, useTransform } from "framer-motion";
import { Section, Button } from "./style";

const S = { Section, Button };

const App = () => {
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-300, 0, 300], [-360, 0, 360]);
  const backgroundImage = useTransform(
    x,
    [300, 0, -150],
    [
      "linear-gradient(128deg, rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%)",
      "linear-gradient(128deg, rgba(252, 176, 69, 1) 0%, rgba(131, 58, 180, 1) 50%,rgba(253, 29, 29, 1)  100%)",
      "linear-gradient(128deg, ,rgba(253, 29, 29, 1) 0%,rgba(252, 176, 69, 1)  50%,rgba(131, 58, 180, 1)  100%)",
    ]
  );
  return (
    <S.Section as={motion.section} style={{ backgroundImage }}>
      <S.Button as={motion.button} style={{ x, rotateZ }} drag="x" dragSnapToOrigin />
    </S.Section>
  );
};

export default App;
