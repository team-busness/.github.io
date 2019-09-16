// 模板组件
import React, { Component } from 'react'
// 引入布局组件
// Layout 代表最外层   Menu代表导航  Icon代表图标
import { Layout, Menu, Icon } from 'antd'

const { Header, Sider, Content } = Layout

// 定义侧边栏菜单数据
const MenuData = [
  { content: '生命周期', type: 'solution', hash: 'life', id: '1' },
  { content: '知识吧', type: 'solution', hash: 'knowHow', id: '2' },
  { content: '选择吧', type: 'solution', hash: 'select', id: '3' }
]
export default class Index extends Component {
  constructor() {
    super()
    this.state = {
      collapsed: false //控制是否显示侧边栏
    }
  }

  // 切换导航栏显示和隐藏
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render(props) {
    const { changehash } = this.props
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {/* 侧边栏导航内容 */}
            {/* 遍历设置好的数据 */}
            {MenuData.map((item, index) => {
              return (
                // 给每一个菜单绑定事件点击获取每一项给定的hash值
                <Menu.Item
                  key={index}
                  onClick={() => {
                    changehash(item.hash)
                  }}
                >
                  <Icon type={item.type} />
                  <span>{item.content}</span>
                </Menu.Item>
              )
            })}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280
            }}
          >
            {/* 显示模板里当前插槽里的内容组件 */}
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    )
  }
}
