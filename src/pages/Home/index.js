import React from "react";

// 导入组件
import { Route } from "react-router";

// 导入News组件
import News from "../News";

export default class Home extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor:'skyblue', padding: 10 }}>
        首页
        {/* 渲染子路由News */}
        <Route path="/home/news" component={News} />
      </div>
    );
  }
}
