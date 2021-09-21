import React from 'react';

// 导入路由组件
import { BrowserRouter as Router, Route } from "react-router-dom";

// 导入首页和城市选择两个组件（页面）
import Home from "./pages/Home";
import CityList from "./pages/CityList";

function App() {
  return (
    <Router>
      <div className="App">
        {/* 配置路由 */}
        <Route path="/home" component={Home}></Route>
        <Route path="/citylist" component={CityList}></Route>
      </div>
    </Router>
  );
}

export default App;
