import React, { Component } from 'react'
import './style/index.scss'
// 登陆
import Login from './login'
// 注册
import Register from './register'
// 引入首页
import Home from './home'

export default class Index extends Component {
  constructor() {
    super()
    this.state = {
      isDom: 'register'
    }
  }
  // 获取组件的返回状态
  getstatus = data => {
    this.setState({
      isDom: data.typename
    })
  }

  render() {
    let Dom = ''
    // eslint-disable-next-line default-case
    switch (this.state.isDom) {
      case 'register':
        Dom = <Register getstatus={this.getstatus} />
        break
      case 'login':
        Dom = <Login getstatus={this.getstatus} />
        break
      case 'home':
        Dom = <Home />
        break
    }
    return <div>{Dom}</div>
  }
}
