/**
 * 配置组件和路由path的映射关系
 * 1- 导入组件
 * 2- 将组件加入到路由中，与path映射起来
 * 3- 三级路由 -- component的渲染区域在navBar和tabBar之间 -- 导航一般在顶部的tabBar上
 * 4- 在这里呢，页面的布局（对b区的划分）：tabBar + con
 */
import React from 'react'
import { NavBar } from '../components/navBar'
import { Route, Switch } from 'react-router-dom'

/**
 * 引入组件
 */
import { FirstTest } from '../page/webpackTest'
// import { Game } from '../page/reactGame'
// import { TodoListsPage } from '../page/mobxTodo'

// 父级url
const baseUrl = '/index/routerMapThird'

// navBar数据-路由信息
const navList = [
  { name: '推荐', to: baseUrl + '/recommend' },
  { name: '话题', to: '/index/game' }
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
      <Route exact path={baseUrl + '/'} component={FirstTest} />
      {/* 需要利用redirect进行路跳转 / => /recommend */}
      <Route exact path={baseUrl + '/recommend'} component={FirstTest} />
      <Route exact path={baseUrl + '/'} component={FirstTest} />
      {/* <Route path='/firstTest' component={FirstTest} />
    <Route path='/game' component={Game} />
    <Route path='/todoListsPage' component={TodoListsPage} /> */}
    </Switch>
  </div>
)

export default RouterMapThird
