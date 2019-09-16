// 受控组件
import React, { Component } from 'react'
import axios from 'axios'
// 为重置使用保存的全局数据
const myState = {
  username: '',
  password: '',
  radio: '1'
}
export default class index extends Component {
  // 表单的提交事件
  handleSubmit = e => {
    const { target } = e
    e.preventDefault() //取消默认事件
    // console.log('表单的提交事件')
    // console.log(target.querySelectorAll('input[name=text]')[0].value)
  }
  // 重置表单事件
  reSetForm = () => {
    // console.log('重置表单')
    this.setState(myState)
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
      password: '',
      radio: '1'
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
    axios.get('/api/register.json', {}).then(res => {
      console.log(res)
      if (res.status === 200) {
        // 将账户密码存到本地一份【注意：在真实的项目里，不能这样做，仅适用于测试本地开发】
        sessionStorage.setItem(
          'userRegister',
          JSON.stringify({ username, password })
        )
        // 3.控制跳转到登陆页面
        console.log(res.data)
        this.props.getstatus({ ...res.data, typename: 'login' })
      } else {
        alert('网络错误，请检查！~')
      }
    })
  }
  // 渲染函数
  render() {
    const { username, password, radio } = this.state
    return (
      <form
        onSubmit={this.handleSubmit}
        onReset={this.reSetForm}
        autoComplete="off"
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

        <label>
          单选框：
          <input
            type="radio"
            name="radio"
            checked={radio == '0'}
            value="0"
            onChange={this.handleChange}
          />
          <input
            type="radio"
            name="radio"
            checked={radio == '1'}
            value="1"
            onChange={this.handleChange}
          />
        </label>

        <label>
          <button type="button" onClick={this.register}>
            注册提交
          </button>
          <button type="submit" style={{ display: 'none' }}>
            登陆提交
          </button>
          <button type="reset">重置</button>
        </label>
      </form>
    )
  }
}
