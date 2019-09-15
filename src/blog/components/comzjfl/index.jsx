import React from 'react';
// 引入描述列表组件
import { Descriptions } from 'antd';
export default props => {
  return (
    <Descriptions title="组件问题">
      <Descriptions.Item
        label="一、无状态组件的使用和 createElement 创建虚拟 dom"
        key="1"
        span={3}
      >
        <p>
          定义：React.creacteElement('div',null,null)// 在虚拟 dom 中使用 js
          的变量或者函数之类的，都需要放在一个{}js 表达式，理解为 js
          需要执行的环境
        </p>
        <p>方法:用于创建虚拟 DOM 对象，他接收 3 个及以上的参数。</p>
        <p>
          参数
          1：表示要创建的元素类型，参数是个字符串类型（在此我理解为标签名字如：‘div’
          ，‘p’）
        </p>
        <p>
          参数 2：表示创建的元素含有哪些属性，参数是个对象（例如有
          id，class，title 属性）
        </p>
        <p>
          参数
          3：表示当前创建元素的子节点，可以是文本内容，也可以是子标签，从第三个参数的位置开始，后面可以放好多的虚拟
          DOM 对象（嵌套元素)
        </p>
      </Descriptions.Item>
      <Descriptions.Item label="二、脚手架是搭建和配置" key="2" span={3}>
        * 1.全局安装：npm install -g create-react-app *
        2.初始项目：create-react-app 项目 名称: reactapp201909 * 3.启动项目：npm
        start * 4、npm run eject:重新生成依赖和配置 文件 npm run start
        :运行本地开发环境 npm run build :打包项目 npm run test：运行测试环境
      </Descriptions.Item>
      <Descriptions.Item
        label="npm run eject 如何释放脚手架的隐式文件"
        key="3"
        span={3}
      >
        npm run eject: - 重新生成依赖和配置文件 -
        本地项目里的依赖和全局依赖包版本不一致导致的 bug,可以使用此命令解决。
        注意： 如果项目初始化的时候就是在 git
        仓库里的，那么我们在使用此命令的时候会失败
        控制台会提示我们应该先存储代码到本地 git 仓库 解决办法：要么删掉 git
        本地仓库，要么提交 git 仓库，才能正常使用此命令 说明: -
        使用脚手架初识的项目，默认是隐藏配置文件和一些依赖的，其目的是为了减少空间占用，
        让项目结构更简单，但是有时候我们需要在配置文件里修改，那么就使用 eject
        命令
      </Descriptions.Item>
      <Descriptions.Item label="插槽的形式渲染组件" key="4" span={3}>
        1. 首次加载 2. setState改变组件内部state。
        注意：此处是说通过setState方法改变。
        我们可以通过setState来改变组件state的值，而且当state改变后，组件对应的也会重新渲染。
        改变state的值：我们可以使用Object.assign来实现。
        重新渲染组件：我们可以在改变state值后，调用render函数，重新渲染。异步的setState在后面的章节会实现。
        3. 接受到新的props
        react在渲染组件时，组件会被babel转为React.createElement(fn,
        null)这种形式，第一参数是函数，所以我们需要从fn中获取由组件的jsx转换后的虚拟dom，然后在将虚拟dom渲染成真实dom。
      </Descriptions.Item>
    </Descriptions>
  );
};
