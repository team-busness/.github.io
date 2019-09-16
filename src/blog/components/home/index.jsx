import React, { Component } from 'react'
// 引入模板组件
import MyLayout from '../layout/index'
// 引入声明周期
import Life from '../life/index'
// 引入知识库
import KnowHow from '../notebook/index'
// 引入选择框
import Select from '../selectInput/index'
export default class Index extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super()
    this.state = {
      isCom: window.location.hash.slice(1) || 'knowHow' //要渲染的组件标识
    }
    window.location.href = '#' + this.state.isCom
    window.onhashchange = () => {
      this.setState({
        isCom: window.location.hash.slice(1)
      })
    }
  }

  // 根据点击的菜单通过改变hash值来显示相应的页面
  changeHash = id => {
    // 改变页面hash值
    window.location.hash = id
  }

  render() {
    // 通过判断state中isCom从而渲染相应的组件
    let Dom = ''
    // eslint-disable-next-line default-case
    switch (this.state.isCom) {
      case 'life':
        Dom = <Life />
        break
      case 'knowHow':
        Dom = <KnowHow />
        break
      case 'select':
        Dom = <Select />
        break
    }
    return (
      <div>
        {/* 引入模板 */}
        <MyLayout changehash={this.changeHash}>
          {/* 渲染点击的菜单对应的组件 */}
          {Dom}
        </MyLayout>
      </div>
    )
  }
}
