import React from "react";
import { Route } from "react-router";
import News from "../News";
import Index from "../Index";
import HouseList from "../HouseList";
import Profile from "../Profile";

// 导入TabBar
import { TabBar } from "antd-mobile";

// 导入组件自己的样式
import "./index.css";

export default class Home extends React.Component {
  state = {
    selectedTab: this.props.location.pathname
  };

  render() {
    // console.log(this.props.location.pathname)
    return (
      <div className="home">
        {/* 渲染子路由News */}
        <Route path="/home/news" component={News} />
        <Route path="/home/index" component={Index} />
        <Route path="/home/list" component={HouseList} />
        <Route path="/home/profile" component={Profile} />
        {/* TabBar */}
        <TabBar
          unselectedTintColor="#888"
          tintColor="#21b97a"
          barTintColor="white"
          noRenderContent={true}
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={<i className="iconfont icon-ind" />}
            selectedIcon={<i className="iconfont icon-ind" />}
            selected={this.state.selectedTab === "/home/index"}
            onPress={() => {
              this.setState({
                selectedTab: "/home/index",
              });
              // 路由切换
              this.props.history.push("/home/index");
            }}
            data-seed="logId"
          ></TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-findHouse" />}
            selectedIcon={<i className="iconfont icon-findHouse" />}
            title="找房"
            key="Koubei"
            selected={this.state.selectedTab === "/home/list"}
            onPress={() => {
              this.setState({
                selectedTab: "/home/list",
              });
              // 路由切换
              this.props.history.push("/home/list");
            }}
            data-seed="logId1"
          ></TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-infom" />}
            selectedIcon={<i className="iconfont icon-infom" />}
            title="资讯"
            key="Friend"
            selected={this.state.selectedTab === "/home/news"}
            onPress={() => {
              this.setState({
                selectedTab: "/home/news",
              });
              // 路由切换
              this.props.history.push("/home/news");
            }}
          ></TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-my" />}
            selectedIcon={<i className="iconfont icon-my" />}
            title="我的"
            key="my"
            selected={this.state.selectedTab === "/home/profile"}
            onPress={() => {
              this.setState({
                selectedTab: "/home/profile",
              });
              // 路由切换
              this.props.history.push("/home/profile");
            }}
          ></TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
