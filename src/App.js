import "antd/dist/antd.css";
import { Layout } from "antd";
import Gridbasic from "./grids/gridbasic";
import Gridfocus from "./grids/gridfocus";
import { BrowserView, MobileView } from "react-device-detect";

const { Header, Sider, Content, Footer } = Layout;

function App() {
  return (
    <Layout style={{ height: "100vh", width: "100vw" }}>
      <Layout style={{ width: "100vw", height: "90vh" }}>
        <Content
          style={{
            width: "100vw",
            height: "90vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <Gridbasic /> */}
          <Gridfocus/>
        </Content>
        <BrowserView>
          <Sider
            width="30vw"
            style={{
              backgroundColor: "white",
              borderLeft: "1px solid #cccccc",
              position: "relative",
              height: "100%",
            }}
          >
            Sider
          </Sider>
        </BrowserView>
      </Layout>
      <Footer
        style={{
          height: "10vh",
          width: "100vw",
          backgroundColor: "#252526",
          zIndex: 9999,
        }}
      >
        Footer
      </Footer>
    </Layout>
  );
}

export default App;
