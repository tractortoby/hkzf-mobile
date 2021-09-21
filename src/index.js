import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 导入antd-mobile的样式
import 'antd-mobile/dist/antd-mobile.css';

// 导入字体图标库的样式文件
import './assets/fonts/iconfont.css'

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
