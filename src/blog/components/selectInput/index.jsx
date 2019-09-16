import React, { Component } from 'react'
import './index.scss'
export default class index extends Component {
  constructor() {
    super()
    this.state = {
      radio: '',
      checkbox: [false, true, false],
      texta: ''
    }
  }
  //单选
  handleChange = ({ target }) => {
    console.log(target.name)
    console.log(target.value)
    this.setState({
      [target.name]: target.value
    })
  }
  //多选
  handleChange = ({ target }) => {
    if (target.name == 'checkbox') {
      const newCheckbox = [...this.state.checkbox]
      newCheckbox[target.value] = target.checked
      // console.log(newCheckbox)
      this.setState({
        [target.name]: target.value
      })
    } else {
      this.setState({
        [target.name]: target.value
      })
    }
  }
  // 改变value值时
  onChange = ({ target }) => {
    console.log(target.value)
    this.setState({
      texta: target.value
    })
  }
  render() {
    const { radio, checkbox, texta } = this.state
    return (
      <form className="form-back">
        <div className="div-pt">**市场调查问卷</div>
        <div className="div-back-9">1.你目前的主要投资理财途径?</div>
        <label>
          <input
            type="radio"
            name="radio"
            checked={radio == '1'}
            value="1"
            onChange={this.handleChange}
          />
          没有看法
        </label>
        <label>
          <input
            type="radio"
            name="radio"
            checked={radio == '2'}
            value="2"
            onChange={this.handleChange}
          />
          我认为996应该近早废弃
        </label>
        <label>
          <input
            type="radio"
            name="radio"
            checked={radio == '3'}
            value="3"
            onChange={this.handleChange}
          />
          互联网未来会主导世界
        </label>

        <div className="div-back"></div>

        <div className="div-back-9">2.你有那些爱好?</div>
        <label>
          <input
            type="checkbox"
            name="checkbox"
            checked={checkbox[33]}
            value="33"
            onChange={this.handleChange}
          />
          一天吃五次主食
        </label>
        <label>
          <input
            type="checkbox"
            name="checkbox"
            checked={checkbox[34]}
            value="34"
            onChange={this.handleChange}
          />
          吃完主食还要喝可乐
        </label>
        <label>
          <input
            type="checkbox"
            name="checkbox"
            checked={checkbox[35]}
            value="35"
            onChange={this.handleChange}
          />
          吃完主食还要喝可乐还要吃半斤零食
        </label>
        <label>
          <input
            type="checkbox"
            name="checkbox"
            checked={checkbox[36]}
            value="36"
            onChange={this.handleChange}
          />
          吃完上面多食物还要打开朋友圈发一条减肥多口令
        </label>
        <label>
          <input
            type="checkbox"
            name="checkbox"
            checked={checkbox[36]}
            value="36"
            onChange={this.handleChange}
          />
          素食主
        </label>
        <label>
          <input
            type="checkbox"
            name="checkbox"
            checked={checkbox[36]}
            value="36"
            onChange={this.handleChange}
          />
          热爱运动
        </label>
        <label>
          <input
            type="checkbox"
            name="checkbox"
            checked={checkbox[36]}
            value="36"
            onChange={this.handleChange}
          />
          喜欢古典音乐
        </label>
        <label>
          <input
            type="checkbox"
            name="checkbox"
            checked={checkbox[36]}
            value="36"
            onChange={this.handleChange}
          />
          喜欢看书，偶尔写写字
        </label>
        <div className="div-back"></div>
        <div>3.你认为当代年轻人应该持有怎样的世界观、价值观、人生观</div>
        <textarea
          className="text-back"
          value={texta}
          onChange={this.onChange}
        ></textarea>
        <div className="div-back"></div>
        <label>
          <button type="button" className="but-back">
            确认提交
          </button>
        </label>
      </form>
    )
  }
}
