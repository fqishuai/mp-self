import React from 'react'
import { Link } from 'react-router-dom'
import Counter from '@/components/counter'

export default function App() {

  const multiPageNavigate = () => {
    // 设置router后，可以使用`location.href`来跳转页面
    location.href = '/about'
    /*
    // 未设置router时可以使用navigateTo来跳转页面，url的值为打包后小程序文件目录中相对于当前文件的路径
    wx.navigateTo({url: '../about/index'})
    */
  }

  return <div className='home-page'>
    <Counter></Counter>
    <div onClick={multiPageNavigate}>跳转到About页面</div>
    { 'undefined' != typeof wx && wx.getSystemInfoSync && <Link to='/h5'>link to H5</Link> }
  </div>
}