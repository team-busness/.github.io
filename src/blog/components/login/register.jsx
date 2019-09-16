// 注册部分
import React, { Component } from 'react'
import { Button } from 'antd'
// 为重置使用保存的全局数据
const myState = {
  username: '',
  password: '',
  radio: '1'
}

export default class index extends Component {
  // 表单的提交事件
  handleSubmit = e => {
    e.preventDefault() //取消默认事件
  }

  // 改变state里的值
  handleChange = ({ target }) => {
    this.setState({
      [target.name]: [target.value]
    })
  }

  // 构造函数
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }
  //注册
  register = () => {
    // 1.前端验证，验证通过以后
    const { username, password } = this.state
    if (!username) {
      return alert('用户不能为空')
    } else if (!password) {
      return alert('密码不能为空')
    }
    // 2.调用接口，接口返回的数据存到全局里面
    // 凡是涉及用户数据信息的，在接口一定使用post请求方式


        // 将账户密码存到本地一份【注意：在真实的项目里，不能这样做，仅适用于测试本地开发】
        sessionStorage.setItem(
          'userRegister',
          JSON.stringify({ username, password })
        )
        // 3.控制跳转到登陆页面

        this.props.getstatus({typename: 'login' })


  }

  // 注册过的用户进入登录页
  toLogin = () => {
    this.props.getstatus({ typename: 'login' })
  }

  // 渲染函数
  render() {
    const { username, password } = this.state
    return (
      <div className="register">
        <h1>注册</h1>
        <form
          onSubmit={this.handleSubmit}
          onReset={this.reSetForm}
          autoComplete="off"
          className="form"
        >
          <label>
            用户名:
            <input
              type="text"
              value={username}
              onChange={this.handleChange}
              name="username"
            />
          </label>
          <label>
            密码框:
            <input
              type="password"
              value={password}
              onChange={this.handleChange}
              name="password"
            />
          </label>

          <label className="btn">
            <Button type="primary" onClick={this.register}>
              注册提交
            </Button>
            <a href="#" onClick={this.toLogin} >
              登录
            </a>
          </label>
        </form>
      </div>
    )
  }
}
