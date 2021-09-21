import React from 'react';

// 导入路由组件
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// 导入首页和城市选择两个组件（页面）
import Home from "./pages/Home";
import CityList from "./pages/CityList";

// 导入要使用的组件
import { Button } from "antd-mobile";

function App() {
  return (
    <Router>
      <div className="App">
        {/* 项目根组件 <Button>登录</Button> */}

        {/* 配置导航菜单 */}
        <ul>
          <li>
            <Link to="home">首页</Link>
          </li>
          <li>
            <Link to="citylist">城市选择</Link>
          </li>
        </ul>

        {/* 配置路由 */}
        <Route path="/home" component={Home}></Route>
        <Route path="/citylist" component={CityList}></Route>
      </div>
    </Router>
  );
}

export default App;
