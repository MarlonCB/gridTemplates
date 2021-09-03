import React from "react";
import { UserOutlined } from "@ant-design/icons";

const carduser = (props) => {
  const width = props.width ? props.width : 40;
  const height = props.height ? props.height : 50;
  return (
    <div
      style={{
        width: `${width}vw`,
        height: `${height}vh`,
        backgroundColor: "#333333",
        borderRadius: "5px",
        color: "white",
        fontSize: `${width - 4}px`,
        padding: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span style={{ position: "absolute", top: "5px", left: "10px" }}>
        {"Usuario " + props.number}
      </span>
      <UserOutlined
        style={{ color: "white", fontSize: `${12 / (props.cantidad / 1.5)}vw` }}
      />
    </div>
  );
};

export default carduser;

/* GRID BASIC

| DISPOSITIVO | CANTIDAD | TAMAÑO VW X VH |
|-------------|----------|----------------|
| Desktop     | 16 max   | 15vw x 18vh    |
| Tablet      | 12 max   | 20vw x 20vh    |
| Mobile      | 12 max   | 29vw x 12vh    |







*/
