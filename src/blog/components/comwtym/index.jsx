 import React from "react";
// 引入描述列表组件
import { Descriptions } from "antd";
export default props => {
  return (
    <Descriptions title="搭建和配置">
      <Descriptions.Item label="二、脚手架的搭建和配置" key="2" span={3}>
        * 1.全局安装：npm install -g create-react-app

        * 2.初始项目：create-react-app 项目 名称: reactapp201909
        * 3.启动项目：npm start
        * 4、npm run eject:重新生成依赖和配置 文件

		npm run start :运行本地开发环境
		npm run build :打包项目
		npm run test：运行测试环境
      </Descriptions.Item>
      <Descriptions.Item label="npm run eject 如何释放脚手架的隐式文件" key="3" span={3}>
        npm run eject: - 重新生成依赖和配置文件 - 本地项目里的依赖和全局依赖包版本不一致导致的 bug,可以使用此命令解决。
		注意： 如果项目初始化的时候就是在 git 仓库里的，那么我们在使用此命令的时候会失败			
		控制台会提示我们应该先存储代码到本地 git 仓库
		解决办法：要么删掉 git 本地仓库，要么提交 git 仓库，才能正常使用此命令
		说明:

		- 使用脚手架初识的项目，默认是隐藏配置文件和一些依赖的，其目的是为了减少空间占用，
  让项目结构更简单，但是有时候我们需要在配置文件里修改，那么就使用 eject 命令
      </Descriptions.Item>
	 
    </Descriptions>
  );
};