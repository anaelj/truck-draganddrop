import React, { useState, useEffect } from "react";
import { useDrop } from "react-dnd";
import { Footer, Main, MainArea, LeftArea, BoxArea, Box } from "./styles";
import { useRef } from "react";
import AreaContext from "./context";
import truc from "./../Cargo_Truck.svg";
import box from "./../Box.svg";
import Item from "./../Item";

function Area() {
  const ref = useRef();
  const [items, setItems] = useState([]);

  const [{ isOver }, dropRef] = useDrop({
    accept: "CARD",
    drop: (data) => addItemToTruck(data),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });
  dropRef(ref);

  const addItemToTruck = (data) => {
    // console.log("data", data);
    setItems([data, ...items]);
  };

  useEffect(() => {
    console.log("items", items);
  }, [items]);

  const handleShowPedido = () => {};

  return (
    <Main>
      <header>
        <h1>MVP SEMALO</h1>
      </header>
      <div style={{ display: "flex" }}>
        <LeftArea>
          <Item key={0} data={{ texto: "Pedido 1" }}>
            <img src={box} alt="" style={{ width: "60px" }} />
          </Item>
          <Item key={1} data={{ texto: "Pedido 2" }}>
            <img src={box} alt="" style={{ width: "60px" }} />
          </Item>

          <Item key={2} data={{ texto: "Pedido 3" }}>
            <img src={box} alt="" style={{ width: "60px" }} />
          </Item>
          <Item key={3} data={{ texto: "Pedido 4" }}>
            <img src={box} alt="" style={{ width: "60px" }} />
          </Item>
          <Item key={4} data={{ texto: "Pedido 5" }}>
            <img src={box} alt="" style={{ width: "60px" }} />
          </Item>
          <Item key={5} data={{ texto: "Pedido 6" }}>
            <img src={box} alt="" style={{ width: "60px" }} />
          </Item>
          <Item key={6} data={{ texto: "Pedido 7" }}>
            <img src={box} alt="" style={{ width: "60px" }} />
          </Item>
          <Item key={7} data={{ texto: "Pedido 8" }}>
            <img src={box} alt="" style={{ width: "60px" }} />
          </Item>
          <Item key={8} data={{ texto: "Pedido 9" }}>
            <img src={box} alt="" style={{ width: "60px" }} />
          </Item>
          <Item key={9} data={{ texto: "Pedido 10" }}>
            <img src={box} alt="" style={{ width: "60px" }} />
          </Item>
        </LeftArea>

        <MainArea ref={ref} id="capture">
          <div
            style={{
              display: "block",
              position: "relative",
              height: "150px",
              width: "150px",
            }}
          ></div>
          <div
            style={{
              height: "auto",
              width: "450px",
              position: "absolute",
            }}
          >
            <img src={"/Cargo_Truck.svg"} alt="" />
          </div>
          <BoxArea
            style={{
              width: "220px",
              height: "112px",
              position: "relative",

              background: "white",
              left: "-100px",
              top: "40px",
            }}
          >
            {items?.map((item, idx) => (
              <Box
                key={idx}
                onClick={handleShowPedido}
                title="Cliente: Comper - Obs: Entregar na parte da manhã"
              >
                {item.texto}
              </Box>
            ))}
          </BoxArea>
        </MainArea>
      </div>
    </Main>
  );
}

export default Area;
