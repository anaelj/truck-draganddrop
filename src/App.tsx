import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Area from "./Area/index.jsx";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Area />
    </DndProvider>
  );
}

export default App;
