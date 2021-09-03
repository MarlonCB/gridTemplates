import { Col, Row } from "antd";
import React from "react";
import Carduser from "../component/carduser";
import { BrowserView, MobileView } from "react-device-detect";
import Gridmobilebasic from "./gridmobilebasic";

const gridbasic = () => {

  // Desktop = 30 usuarios maximo
  // mobile = 10 usuarios maximo

  const array = [
    1,2,3,4,5,6,7,8,9,10,11
  ];
  const cantidad = array.length;
  const width =
    cantidad === 1
      ? 60
      : cantidad === 2
      ? 30
      : cantidad > 2 && cantidad < 5 // 3 y 4
      ? 25
      : cantidad > 4 && cantidad < 7 // 5 y 6
      ? 20
      : cantidad > 6 && cantidad < 13 // 7, 8, 9, 10, 11 y 12
      ? 15
      : cantidad > 12 && cantidad < 17 // 13, 14, 15 y 16
      ? 14
      : cantidad > 16 && cantidad < 21 // 17, 18, 19 y 20
      ? 12
      : 10; // 24, 25, 26, 27, 28, 29 y 30

  const height =
    cantidad === 1
      ? 70
      : cantidad === 2
      ? 40
      : cantidad > 2 && cantidad < 5 // 3 y 4
      ? 35
      : cantidad > 4 && cantidad < 7 // 5 y 6
      ? 30
      : cantidad > 6 && cantidad < 13 // 7, 8, 9, 10, 11 y 12
      ? 18
      : cantidad > 12 && cantidad < 17 // 13, 14, 15 y 16
      ? 16
      : cantidad > 16 && cantidad < 21 // 17, 18, 19 y 20
      ? 14
      : 13; // 24, 25, 26, 27, 28, 29 y 30

  return (
    <>
      <BrowserView>
        <Row justify="center" gutter={[8, 8]} style={{ width: "70vw" }}>
          {array.map((card, index) => (
            <Col key={index}>
              <Carduser
                number={card}
                width={width}
                height={height}
                cantidad={cantidad}
              />
            </Col>
          ))}
        </Row>
      </BrowserView>
      <MobileView>
        <Gridmobilebasic cantidad={cantidad} users={array}/>
      </MobileView>
    </>
  );
};

export default gridbasic;
