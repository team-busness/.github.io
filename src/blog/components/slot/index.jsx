import React, { Component } from 'react'
import { Card, Col, Row } from 'antd'
import './index.scss'
export default class index extends Component {
  render() {
    return (
      <Row gutter={16}>
        <Col span={8}>
          <Card title="React 组件三种写法" bordered={false}>
            <p> 1. function 无状态组件，只接受一个 props</p>
            <p>2. class es6 的写法，继承React.Component </p>
            <p>3. createClass 了解，最后一版本 15.5.0 新版里被废弃</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="React 中处理异步" bordered={false}>
            <p>关于 setState</p>
            <p> setState:</p>
            1.setState 不会立刻改变 React 组件中 state 的值。
            <br />
            2.setState 通过触发一次组价的更新来引发重绘。
            <br />
            3.多次 setState 函数调用产生的效果会合并。
            <br />
            setState：异步
            <br />
            1.时间处理函数内部的 setState 是异步的
            <br />
            2.这种机制可以在大型应用中得到很好的性能提升
            <br />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="配置引用文件路径" bordered={false}>
            在项目一级目录创建 jsconfig.json 写入：
            <br />
            {/* // {"compilerOptions":{"baseUrl":"src" }, "include":["src"] } */}
            <br />
            使用的时候.可以绝对路径，src 下的路径都可以用绝对路径
            https://blog.csdn.net/ qq_41287423/article/details/85838575
            <br />
            配置本地开发跨域请求 3.1、在 package.json
            文件里写入："proxy":"第三方网址" <br />
            3.2、使用的时候：axios.get('/id) 在 react 里面解决跨域问题 4.1 在
            package.json 配置 4.2 在 <br />
            webpackServer.config.js 配置 4.3 使用 jsonp 模块解决跨域 4.4 使用
            nodejs 做中间服务层解决跨域
            <br />
          </Card>
        </Col>
      </Row>
    )
  }
}
