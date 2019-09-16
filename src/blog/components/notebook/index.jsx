import React, { Component } from 'react'
import './index.scss'
import EventHandle from './shijianchuli'
import ConditionRender from './tiaojianxuanran'
import Contr from './contro'
import StateComponent from './stateComponent'
export default class index extends Component {
  render() {
    return (
      <div>
        <h1>小小知识吧 轻松你我他</h1>
        <h2>Come Here！~ Everything Gets Control！！~</h2>
        <h2>来到这里 一切都在掌握之中 !~</h2>
        <h3>认清组件</h3>
        <StateComponent />
        <h3>事件处理</h3>
        <EventHandle />
        <h3>条件渲染</h3>
        <ConditionRender />
        <h3>受控和非受控</h3>
        <Contr />
      </div>
    )
  }
}
