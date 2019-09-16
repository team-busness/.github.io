import React, { Component } from 'react'

export default class shijianchuli extends Component {
  render() {
    return (
      <div>
        事件处理 React 元素的事件处理和 DOM
        <ul>
          <li style={{ listStyle: 'none' }}>
            元素的很相似，但是有一点语法上的不同:
          </li>
          <li>React 事件的命名采用小驼峰式（camelCase），而不是纯小写。</li>
          <li>
            使用JSX语法时你需要传入一个函数作为事件处理函数，而不是一个字符串。
          </li>
        </ul>
      </div>
    )
  }
}
