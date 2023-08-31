import { motion } from "framer-motion";
import { useState, useContext } from "react";
import { mouseContext } from "./mouseContext.jsx";

const Cursor = ({ mousePos }) => {
  // using context to get hover state
  const { isHover } = useContext(mouseContext);
  const { x, y } = mousePos;
  return (
    <motion.div
      className="cursor"
      style={{
        clipPath: `circle(25px at 25px 25px)`,
      }}
      // animation to handle hover state and mouse follow
      animate={[
        isHover ? { scale: 2 } : { scale: 1 },
        { x: x - 25, y: y - 25 },
      ]}
      transition={{
        ease: "backOut",
        duration: 0.5,
      }}
    ></motion.div>
  );
};

export default Cursor;
