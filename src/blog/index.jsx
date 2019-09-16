import React, { Component } from 'react'
import Start from './components/login/index' // 登录部分

export default class Index extends Component {
  render() {
    return (
      <div>
        {/* 项目由注册登录开始 */}
        <Start />
      </div>
    )
  }
}
