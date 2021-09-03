import { Col, Row } from "antd";
import React from "react";
import Cardusermobile from "../component/cardusermobile";

const gridmobilefocus = (props) => {
  const users = props.users ? props.users : [];
  const cantidad = props.cantidad;

  const height =
    cantidad === 1
      ? 30 / cantidad
      : cantidad === 2
      ? 15
      : cantidad === 3
      ? 50 / cantidad
      : cantidad === 4 && 60 / cantidad;

  const heightFocus =
    cantidad === 1 ? 50 : cantidad === 2 ? 62.5 : cantidad >= 3 && 50;

  return (
    <Row
      justify="center"
      align="middle"
      gutter={[0, 0]}
      style={{ width: "95vw", height: "90vh" }}
    >
      <Col span={24}>
        <Cardusermobile height={heightFocus} />
      </Col>
      <Col span={24}>
        <Row gutter={[2, 2]}>
          {users.map((card, index) => (
            <Col span={cantidad === 1 ? 24 : 12}>
              <Cardusermobile height={height} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default gridmobilefocus;
