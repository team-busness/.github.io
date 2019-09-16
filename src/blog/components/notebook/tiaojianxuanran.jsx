import React, { Component } from 'react'

export default class tiaojianxuanran extends Component {
  render() {
    return (
      <div>
        条件渲染
        <ul>
          <li>
            在 React
            中，你可以创建不同的组件来封装各种你需要的行为。然后，依据应用的不同状态，你可以只渲染对应状态下的部分内容。
          </li>
          <li>
            {' '}
            React 中的条件渲染和 JavaScript 中的一样，使用 JavaScript 运算符 if
            或者条件运算符去创建元素来表现当前的状态， 然后让 React
            根据它们来更新 UI。
          </li>
          <li>条件渲染的集中方式 if switch || && ！ 三目运算符 1? 'ok':"no"</li>
          <li>
            条件渲染的适应场景 对一个元素进行显示隐藏 条件渲染===vue v-if v-show
          </li>
        </ul>
      </div>
    )
  }
}
