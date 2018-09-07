/**
 * 配置组件和路由path的映射关系
 * 1- 导入组件
 * 2- 将组件加入到路由中，与path映射起来
 * 3- 三级路由 -- component的渲染区域在navBar和tabBar之间 -- 导航一般在顶部的tabBar上
 * 4- 在这里呢，页面的布局（对b区的划分）：tabBar + con
 */
import React from 'react'
import { NavBar } from '../components/navBar'
import { Route, Switch, Redirect } from 'react-router-dom'

/**
 * 引入组件
 */
import { FirstTest } from '../page/webpackTest'

// 父级url
const baseUrl = '/routerMapThird'

// navBar数据-路由信息
const navList = [
  { name: '推荐', to: baseUrl + '/recommend' },
  { name: '话题', to: '/article' }
]

const RouterMapThird = (props) => (
  <div>
    <div>
      <NavBar
        type='tabBar'
        navList={navList}
      />
    </div>
    <Switch>
      <Redirect exact from={baseUrl} to={baseUrl + '/recommend'} />
      {/* 需要利用redirect进行路跳转 / => /recommend */}
      <Route exact path={baseUrl + '/recommend'} component={FirstTest} />
      <Route exact path={baseUrl + '/firstTest'} component={FirstTest} />
    </Switch>
  </div>
)

export default RouterMapThird
