 import React from "react";
// 引入描述列表组件
import { Descriptions } from "antd";
export default props => {
  return (
    <Descriptions title="渲染组件">
	  <Descriptions.Item label="插槽的形式渲染组件" key="4" span={3}>
		  1. 首次加载
2. setState改变组件内部state。 
注意：此处是说通过setState方法改变。
我们可以通过setState来改变组件state的值，而且当state改变后，组件对应的也会重新渲染。
改变state的值：我们可以使用Object.assign来实现。
重新渲染组件：我们可以在改变state值后，调用render函数，重新渲染。异步的setState在后面的章节会实现。

3. 接受到新的props
react在渲染组件时，组件会被babel转为React.createElement(fn, null)这种形式，第一参数是函数，所以我们需要从fn中获取由组件的jsx转换后的虚拟dom，然后在将虚拟dom渲染成真实dom。
	  </Descriptions.Item>
    </Descriptions>
  );
};