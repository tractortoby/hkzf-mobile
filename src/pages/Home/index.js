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
// import Item from "antd-mobile/lib/popover/Item";

// TabBar 数据
const tabItems = [
  {
    title: '首页',
    icon: 'icon-ind',
    path: '/home'
  },
  {
    title: '找房',
    icon: 'icon-findHouse',
    path: '/home/list'
  },
  {
    title: '资讯',
    icon: 'icon-infom',
    path: '/home/news'
  },
  {
    title: '我的',
    icon: 'icon-my',
    path: '/home/profile'
  }
]



export default class Home extends React.Component {
  state = {
    selectedTab: this.props.location.pathname
  };

  // 解决导航菜单地址切换菜单不高亮问题
  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({
        selectedTab: this.props.location.pathname
      })
    }
  }

  // 渲染TabBar.Item
  renderTabBarItem() {
    return tabItems.map(item => <TabBar.Item
      title={item.title}
      key={item.title}
      icon={<i className={`iconfont ${item.icon}`} />}
      selectedIcon={<i className={`iconfont ${item.icon}`} />}
      selected={this.state.selectedTab === item.path}
      onPress={() => {
        this.setState({
          selectedTab: item.path,
        });
        // 路由切换
        this.props.history.push(item.path);
      }}
    ></TabBar.Item>)
  }

  render() {
    // console.log(this.props.location.pathname)
    return (
      <div className="home">
        {/* 渲染子路由News */}
        <Route path="/home/news" component={News} />
        <Route exact path="/home" component={Index} />
        <Route path="/home/list" component={HouseList} />
        <Route path="/home/profile" component={Profile} />
        {/* TabBar */}
        <TabBar
          unselectedTintColor="#888"
          tintColor="#21b97a"
          barTintColor="white"
          noRenderContent={true}
        >
          {this.renderTabBarItem()}
        </TabBar>
      </div>
    );
  }
}
