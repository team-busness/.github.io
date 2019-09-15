import React, { Component } from 'react'

export default class index extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>顶级API</h1>
          <ul>
            <li> 1.渲染函数 ReactDOM.render(插入元素，目标元素)</li>
            <li>
              2. React.children.map(dom对象组，（每一项，索引）=>返回元素)
              遍历虚拟dom
            </li>
            <li>
              3 .React.cloneElement( 要克隆的虚拟dom, 返回元素, '我是合并的內容'
              ) 克隆虚拟dom
            </li>
            <li>
              4. React.createElement(元素类型，元素属性，元素内容) 创建虚拟元素
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
