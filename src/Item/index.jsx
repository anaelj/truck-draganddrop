import React from "react";
import { useRef, useContext } from "react";
import { useDrag } from "react-dnd";
import { Container } from "./styles.js";

function Item({ data, children }) {
  const ref = useRef();

  const [{ isDragging }, dragRef] = useDrag({
    type: "CARD",
    item: data,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  dragRef(ref);

  return (
    <Container ref={ref} isDragging={isDragging}>
      {children}
      {data.texto}
    </Container>
  );
}

export default Item;
