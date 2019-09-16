// 声明周期
import React, { Component } from 'react'
import { Collapse } from 'antd'

const { Panel } = Collapse

const text = [
  { title: '初始挂载阶段', content: 'constructor() {} ', id: '1' },
  { title: '解析虚拟dom阶段', content: 'render() {}  解析  虚拟dom ', id: '2' },
  { title: '成功阶段', content: 'componentWillMount() {}   挂载前', id: '3' },
  { title: '更新阶段', content: 'componentDidUpdate() { } 更新完成 ', id: '4' },
  { title: '卸载阶段', content: 'componentDidUnmount() {}  卸载完成', id: '5' }
]

export default class Index extends Component {
  render() {
    return (
      <Collapse accordion>
        {text.map((item, index) => {
          return (
            <Panel header={item.title} key={item.id}>
              <p>{item.content}</p>
            </Panel>
          )
        })}
      </Collapse>
    )
  }
}
