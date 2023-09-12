import "../style/textSlide.css";
import { motion } from "framer-motion";

const TextSlide = () => {
  const slideAnimation = {
    x: "-100%",
    transition: {
      ease: "linear",
      duration: 7,
      repeat: "infinity",
    },
  };

  return (
    <div className="container-fluid about">
      <div className="text-slider">
        <motion.div
          className="text-wrapper"
          initial={{ x: "0%" }}
          animate={slideAnimation}
        >
          <h3 className="text">THIS IS RETDEV</h3>
          <h3 className="text">THIS IS RETDEV</h3>
          <h3 className="text">THIS IS RETDEV</h3>
        </motion.div>
        <motion.div
          className="text-wrapper"
          initial={{ x: "0%" }}
          animate={slideAnimation}
        >
          <h3 className="text">THIS IS RETDEV</h3>
          <h3 className="text">THIS IS RETDEV</h3>
          <h3 className="text">THIS IS RETDEV</h3>
        </motion.div>
      </div>
    </div>
  );
};

export default TextSlide;
