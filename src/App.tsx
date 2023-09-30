import { motion, useMotionValue, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Section, Button, Svg } from "./style";
const S = { Section, Button, Svg };

const App = () => {
  const wrapRef = useRef(null);
  const y = useMotionValue(0);
  const rotateZ = useTransform(y, [0, 250, 500], [-360, 0, 360]);
  const { scrollY, scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const svgTransition = {
    start: { fill: "rgba(200, 200, 0, 0)", pathLength: 0 },
    end: { fill: "rgba(120, 220, 120, 0.8)", pathLength: 1 },
    transition: {},
  };
  const backgroundImage = useTransform(
    y,
    [0, 250, 500],
    [
      "linear-gradient(128deg, rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%)",
      "linear-gradient(128deg, rgba(252, 176, 69, 1) 0%, rgba(131, 58, 180, 1) 50%,rgba(253, 29, 29, 1)  100%)",
      "linear-gradient(128deg, ,rgba(253, 29, 29, 1) 0%,rgba(252, 176, 69, 1)  50%,rgba(131, 58, 180, 1)  100%)",
    ]
  );

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    console.log("scrollY", latest);
  });
  useMotionValueEvent(scrollYProgress, "change", (latest: number) => {
    console.log("Progress", latest);
  });

  return (
    <S.Section as={motion.section} style={{ backgroundImage }} ref={wrapRef}>
      <S.Button as={motion.button} style={{ y, rotateZ, scale }} drag="y" dragConstraints={wrapRef}>
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
    </S.Section>
  );
};

export default App;
