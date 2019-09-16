import React, { Component } from 'react'
// 首页
import Home from '../home/index'
export default () => {
  // 这里是防止用户通过手动进入网址
  if (!sessionStorage.getItem('userRegister')) {
    alert('您没有登陆不能进来')
    window.location.hash = 'login'
  }
  return <Home />
}
