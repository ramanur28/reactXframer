import "../style/App.css";
// components goes here
import Navbar from "./navbar";
import Jumbotron from "./Jumbotron";
import Cursor from "../cursor";
// context
import { useContext } from "react";
import { mouseContext } from "../mouseContext";

function App() {
  // getting mouse position and send it to child
  // featuring mouse follow animation with cursor component
  const { x, y } = useContext(mouseContext);
  return (
    <>
      <Cursor mousePos={{ x, y }} />
      <Navbar mousePos={{ x, y }} />
      <Jumbotron />
    </>
  );
}

export default App;
