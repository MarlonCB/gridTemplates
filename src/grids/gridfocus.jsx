import React from "react";
import { Col, Row } from "antd";
import Carduser from "../component/carduser";
import { BrowserView, MobileView } from "react-device-detect";
import Gridmobilefocus from "./gridmobilefocus"

const gridfocus = () => {
  const array = [
    1, 2,3,4
  ];
  const cantidad = array.length;

  const width =
    cantidad === 1
      ? 23
      : cantidad === 2
      ? 23
      : cantidad > 2 && cantidad < 5
      ? 20
      : cantidad > 4 && cantidad < 7
      ? 10
      : cantidad > 6 && cantidad < 13
      ? 10
      : cantidad > 12 && cantidad < 19
      ? 7.5
      : cantidad > 18 && cantidad < 22
      ? 7
      : 7;

  const height =
    cantidad === 1
      ? 33
      : cantidad === 2
      ? 33
      : cantidad > 2 && cantidad < 5
      ? 20
      : cantidad > 4 && cantidad < 7
      ? 12
      : cantidad > 6 && cantidad < 13
      ? 12
      : cantidad > 12 && cantidad < 19
      ? 10
      : cantidad > 18 && cantidad < 22
      ? 9
      : 8.5;

  return (
    <>
      <BrowserView>
        <Row
          justify="center"
          align="middle"
          gutter={[10, 10]}
          style={{ width: "65vw" }}
        >
          <Col span={15}>
            <Row>
              <Carduser number={1} cantidad={2} />
            </Row>
          </Col>
          <Col span={9}>
            <Row gutter={[5, 5]}>
              {array.map((card, index) => (
                <Col key={index}>
                  <Carduser
                    number={card}
                    width={width}
                    height={height}
                    cantidad={cantidad + 1}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </BrowserView>
      <MobileView>
        <Gridmobilefocus cantidad={cantidad} users={array} />
      </MobileView>
    </>
  );
};

export default gridfocus;
