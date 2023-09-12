import "../style/navbar.css";
import { motion } from "framer-motion";
import { useContext } from "react";
import { mouseContext } from "../mouseContext";

const Navbar = ({ mousePos }) => {
  // function to set hover state
  const { setHover } = useContext(mouseContext);
  let { x, y } = mousePos;
  const navAnimation = { x: x / 120, y: y / 120 };
  return (
    // navbar using bootstrap
    // adding utility on mouse enter/hover and parallax effect
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <motion.a
          className="navbar-brand"
          href="#"
          animate={navAnimation}
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
        >
          X
        </motion.a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <motion.ul animate={navAnimation} className="navbar-nav ms-auto">
            <li className="nav-item">
              <motion.a
                className="nav-link"
                aria-current="page"
                href="#"
                onMouseEnter={() => {
                  setHover(true);
                }}
                onMouseLeave={() => {
                  setHover(false);
                }}
              >
                Home
              </motion.a>
            </li>
            <li className="nav-item">
              <motion.a
                className="nav-link"
                href="#"
                onMouseEnter={() => {
                  setHover(true);
                }}
                onMouseLeave={() => {
                  setHover(false);
                }}
              >
                About
              </motion.a>
            </li>
            <li className="nav-item">
              <motion.a
                className="nav-link"
                href="#"
                onMouseEnter={() => {
                  setHover(true);
                }}
                onMouseLeave={() => {
                  setHover(false);
                }}
              >
                Feature
              </motion.a>
            </li>
            <li className="nav-item">
              <motion.a
                className="nav-link"
                href="#"
                onMouseEnter={() => {
                  setHover(true);
                }}
                onMouseLeave={() => {
                  setHover(false);
                }}
              >
                Contact
              </motion.a>
            </li>
          </motion.ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
