import React, { Component } from 'react'
import axios from 'axios'
// 登陆
import { Button } from 'antd'
// import Home from './home.jsx'
export default class Login extends Component {
  constructor() {
    super()
    this.userInfo = JSON.parse(sessionStorage.getItem('userRegister'))
    this.state = {
      username: (this.userInfo && this.userInfo.username) + '' || '',
      password: ''
    }
  }
  //  改变input值
  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    })
  }
  // 提交
  onSubmit = () => {
    const { username, password } = this.state
    // 1.前端验证
    if (!username.trim()) {
      return alert('用户名不能为空')
    } else if (!password.trim()) {
      return alert('密码不能为空')
    }
    // 2.走接口

    // 3.本地测试：前端需要做后端的逻辑对比，一般后端来做判断
    // 假设：这里的数据就是接口获取的
    const login = { username, password }
    // 假设这里的数据就是从数据库读出来的
    const userInfo = this.userInfo
    // 使用的接口的数据与数据库的数据对比，如果一致，说明登陆成功
    if (!username) {
      return alert('该账号不存在，请立即注册')
    } else if (userInfo.username != login.username) {
      console.log(userInfo.username)
      console.log(login.username)
      return alert('用户名不对')
    } else if (userInfo.password != login.password) {
      return alert('密码错误')
    }
    // console.log(res.data)
    this.props.getstatus({ typename: 'home' })
    // getstatus() // 跳转页面
    return console.log('提交')
  }

  // 渲染函数
  render() {
    const { username, password, getstatus } = this.state

    return (
      <div className="login">
        <h1>登录</h1>
        <form className="form">
          <label>
            用户名：
            <input
              type="text"
              placeholder="用户名"
              value={username}
              onChange={this.handleChange}
              name="username"
            />
          </label>
          <label>
            密码框：
            <input
              type="password"
              placeholder="密码"
              value={password}
              onChange={this.handleChange}
              name="password"
            />
          </label>
          <label className="btn">
            <Button type="primary" onClick={this.onSubmit}>
              登陆
            </Button>
            <a
              href="#"
              onClick={() => this.props.getstatus({ typename: 'register' })}
            >
              注册一个
            </a>
          </label>
        </form>
      </div>
    )
  }
}
