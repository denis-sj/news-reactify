import "./components/Header/Headers";
import { Layout } from "antd";
import { Proverka } from "./components/Header/Headers";

const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "200px",
  color: "#fff",
  backgroundColor: "#0958d9",
};
const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "calc(50% - 8px)",
  maxWidth: "calc(50% - 8px)",
};

function App() {
  return (
    <Layout style={layoutStyle}>
      <Proverka />
      <Content style={contentStyle}>Content</Content>
    </Layout>
  );
}

export default App;
