import React from "react";
import { Carousel, Flex } from "antd-mobile";
import axios from "axios";

// 导入导航菜单图片
import Nav1 from "../../assets/images/nav-1.png";
import Nav2 from "../../assets/images/nav-2.png";
import Nav3 from "../../assets/images/nav-3.png";
import Nav4 from "../../assets/images/nav-4.png";

import "./index.css";

// 导航菜单数据
const navs = [
  {
    id: 1,
    img: Nav1,
    title: "整租",
    path: "/home/list",
  },
  {
    id: 2,
    img: Nav2,
    title: "合租",
    path: "/home/list",
  },
  {
    id: 3,
    img: Nav3,
    title: "地图找房",
    path: "/map",
  },
  {
    id: 4,
    img: Nav4,
    title: "去出租",
    path: "/rent",
  },
];

export default class Index extends React.Component {
  state = {
    // 轮播图状态数据
    swipers: [],
    isSwipersLoaded: false,
  };

  // 获取轮播图数据的方法
  async getSwipers() {
    const res = await axios.get("http://localhost:8080/home/swiper");
    this.setState(() => {
      return {
        swipers: res.data.body,
        isSwipersLoaded: true,
      };
    });
  }

  componentDidMount() {
    this.getSwipers();
  }

  // 渲染轮播图结构
  renderSwipers() {
    return this.state.swipers.map((item) => (
      <a
        key={item.id}
        href="http://www.tobychung.com"
        style={{ display: "inline-block", width: "100%", height: 212 }}
      >
        <img
          src={`http://localhost:8080${item.imgSrc}`}
          alt=""
          style={{ width: "100%", verticalAlign: "top" }}
          onLoad={() => {
            // fire window resize event to change height
            window.dispatchEvent(new Event("resize"));
            this.setState({ imgHeight: "auto" });
          }}
        />
      </a>
    ));
  }

  // 渲染导航菜单
  renderNavs() {
    return navs.map((item) => (
      <Flex.Item
        key={item.id}
        onClick={() => this.props.history.push(item.path)}
      >
        <img src={item.img} alt="" />
        <h2>{item.title}</h2>
      </Flex.Item>
    ));
  }

  render() {
    return (
      <div className="index">
        {/* 轮播图 */}
        <div className="swiper">
          {this.state.isSwipersLoaded ? (
            <Carousel autoplay={true} infinite autoplayInterval={5000}>
              {this.renderSwipers()}
            </Carousel>
          ) : (
            ""
          )}
        </div>

        {/* 导航菜单 */}
        <Flex className="nav">{this.renderNavs()}</Flex>
      </div>
    );
  }
}
