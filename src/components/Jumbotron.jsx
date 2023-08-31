import "../style/jumbotron.css";
import { useRef } from "react";
// framer-motion
import { motion, useScroll, useTransform, useCycle } from "framer-motion";

const circleVariants = {
  open: {
    clipPath: `circle(900px at 80% 80%)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
  close: {
    clipPath: "circle(30px at 80% 80%)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Jumbotron = () => {
  const jumboRef = useRef(null);
  const [isOpen, toggleOpen] = useCycle(false, true);

  const { scrollYProgress } = useScroll({
    target: jumboRef,
    offset: ["start 40%", "start -20%"],
  });
  const translateJumbo = useTransform(scrollYProgress, [0, 1], ["18%", "-50%"]);
  // jumbotron with parallax effect title and div for navigate sample
  return (
    <motion.div className="jumbotron" id="jumbotron" ref={jumboRef}>
      <motion.h1 className="title" style={{ x: translateJumbo }}>
        LIVE YOUR LIFE
      </motion.h1>
      <motion.div
        className="navigate"
        variants={circleVariants}
        animate={isOpen ? "open" : "close"}
        onClick={toggleOpen}
      ></motion.div>
    </motion.div>
  );
};

export default Jumbotron;
