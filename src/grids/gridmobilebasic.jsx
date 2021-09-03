import { Col, Row } from "antd";
import React from "react";
import Cardusermobile from "../component/cardusermobile";
const gridmobilebasic = (props) => {
  const users = props.users ? props.users : [];
  const cantidad = props.cantidad;

  const height =
    cantidad === 1
      ? 60 / cantidad
      : cantidad === 2
      ? 85 / cantidad
      : cantidad === 3
      ? 84 / cantidad
      : cantidad === 4 || cantidad === 9 || cantidad === 10
      ? 150 / cantidad
      : cantidad === 5
      ? 140 / cantidad
      : cantidad === 6
      ? 160 / cantidad
      : cantidad === 7
      ? 145 / cantidad
      : cantidad === 8
      ? 155 / cantidad
      : 140 / cantidad;

  /* 
// 60 para 1
// 85 para 2
// 84 para 3    
// 150 para 4
// 140 para 5 
// 160 para 6
// 145 para 7
// 155 para 8
// 150 para 9 y 10

*/
  return (
    <Row
      justify="center"
      align="middle"
      gutter={[4, 0]}
      style={{ width: "95vw", height: "90vh" }}
    >
      {users.map((card, index) => (
        <Col span={cantidad >= 1 && cantidad <= 3 ? 24 : 12}>
          <Cardusermobile height={height} />
        </Col>
      ))}
    </Row>
  );
};

export default gridmobilebasic;
