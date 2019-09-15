import React, { Component } from 'react'
// 首页
export default () => {
  // 这里是防止用户通过手动进入网址
  if (!sessionStorage.getItem('userinfo')) {
    alert('您没有登陆不能进来')
    window.location.hash = 'login'
  }

  return <div>这是首页</div>
}
