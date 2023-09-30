import { motion, useMotionValue, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Section, Button } from "./style";
const S = { Section, Button };

const App = () => {
  const wrapRef = useRef(null);
  const y = useMotionValue(0);
  const rotateZ = useTransform(y, [0, 250, 500], [-360, 0, 360]);
  const { scrollY, scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    console.log("scrollY", latest);
  });
  useMotionValueEvent(scrollYProgress, "change", (latest: number) => {
    console.log("Progress", latest);
  });

  const backgroundImage = useTransform(
    y,
    [0, 250, 500],
    [
      "linear-gradient(128deg, rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%)",
      "linear-gradient(128deg, rgba(252, 176, 69, 1) 0%, rgba(131, 58, 180, 1) 50%,rgba(253, 29, 29, 1)  100%)",
      "linear-gradient(128deg, ,rgba(253, 29, 29, 1) 0%,rgba(252, 176, 69, 1)  50%,rgba(131, 58, 180, 1)  100%)",
    ]
  );
  return (
    <S.Section as={motion.section} style={{ backgroundImage }} ref={wrapRef}>
      <S.Button as={motion.button} style={{ y, rotateZ, scale }} drag="y" dragConstraints={wrapRef} />
    </S.Section>
  );
};

export default App;
