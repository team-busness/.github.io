import React, { Component } from 'react'

export default class index extends Component {
  render() {
    return (
      <div>
        <h3>control and unControl</h3>
        <h1>我和control有个约定！~^_^</h1>
        <ul>
          <li>
            受控组件 定义 在HTML中 表单元素 如input textatea select 在react中
            可变状态mutable state 通常保存在组件的state属性中
            并且只能通过使用set State来更新 我们可以把两者结合起来
            使react的state成为 唯一数据源
            渲染表单的React组件还控制着用户输入国产发生的操作
            被React以这种方式控制取值 的表单输入元素 就叫受控组件
          </li>
          <li>
            非受控组件 ： - 使用 ref 绑定的 input 元素 -type='file'因为它的
            value 是只读的无法绑定 react 的 state，所以它是非受控组件。 - button
            按钮的值一般也是写死的，name 它也是非受控组件 2. 受控组件: -
            定义：在 HTML 中，表单元素(如input、textarea和select在 React
            中，可变状态(mutable state)通常保存在组件的 state 属性中，
            并且只能通过使用 setState()来更新。 - 我们可以把两者结合起来，使用
            React 的 state 成为'唯一数据源'。渲染表单的 React
            组件还控制着用户输入过程中表单发生的操作。 被 React
            以这种方式控制取值的表单输入元素就叫做'受控组件'
          </li>
        </ul>
      </div>
    )
  }
}
