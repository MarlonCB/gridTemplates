import { UserOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd'
import React from 'react'


const cardusermobile = (props) => {
    return (
      <div
        style={{
          width: `100%`,
          height: `${props.height}vh`,
          backgroundColor: "#333333",
          borderRadius: "5px",
          color: "white",

          padding: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <UserOutlined
          style={{
            color: "white",
            fontSize: `${12  / 1.5}vw`,
          }}
        />
      </div>
    );
}

export default cardusermobile
