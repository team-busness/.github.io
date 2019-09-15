import React, { Component } from 'react'

export default class Index extends Component {
  render() {
    return (
      <div className="classState">
        <h1>无状态组件</h1>
        <p>
          1.无状态组件：(箭头函数/函数)组件，不需要实例化，没有this.只接收一个props【属性】。
          用于：ui组件、展示组件、专门写dom的组件
          优点：加载快、渲染快.不会产生额外的内存占用。
          缺点:功能单一，没有react其他特性，只有一个props属性可用
          好处：简单渲染快
        </p>
        <h1>class</h1>
        <p>
          class组件
          ：拥有this指向，拥有react一切特性，功能强大、功能丰富.可宽展性强
          2.class组件：会被实例化，拥有this指向，拥有react一切特性：生命周期、状态、边界错误等等；
          用于：容器组件，承载逻辑与接口，又叫功能组件
          优点：功能强大、功能丰富.可宽展性强
          缺点:渲染比无状态组件慢，容易代码臃肿 好处：有this、功能强大
        </p>
      </div>
    )
  }
}
