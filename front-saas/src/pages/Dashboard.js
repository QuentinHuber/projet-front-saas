import React from "react";
import "antd/dist/antd.css";
import { Typography } from "antd";
import "../styles/_common.less";

const { Title } = Typography;
function Dashboard() {
  return (
    <>
      <div className="Dashboard" style={{ margin: "48px" }}>
        <Title>Dashboard</Title>
        <div className="DashboardContain">
          <div className="div1">
            678
            <p>test</p>
          </div>
          <div className="div2">
            455
            <p>test</p>
          </div>
          <div className="div3">
            234
            <p>test</p>
          </div>
          <div className="div4">
            5676
            <p>test</p>
          </div>
        </div>
      </div>

      {/* <Divider orientation="left">Default Size</Divider>
      <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text>test </Typography.Text> {item}
          </List.Item>
        )}
      /> */}
    </>
  );
}

export default Dashboard;
