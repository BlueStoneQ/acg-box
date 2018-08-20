/**
 * 配置组件和路由path的映射关系
 * 1- 导入组件
 * 2- 将组件加入到路由中，与path映射起来
 * 3- 三级路由 -- component的渲染区域在navBar和tabBar之间 -- 导航一般在tabBar上
 * 4- 在这里呢，页面的布局（对b区的划分）：tabBar + con
 */
import React from 'react'
import { Route, Switch } from 'react-router-dom'

/**
 * 引入组件
 */
import { FirstTest } from '../page/webpackTest'
// import { Game } from '../page/reactGame'
// import { TodoListsPage } from '../page/mobxTodo'

// 父级url
const baseUrl = '/index/routerMapThird'

const RouterMapThird = (props) => (
  <Switch>
    <Route exact path={baseUrl + '/'} component={FirstTest} />
    {/* <Route path='/firstTest' component={FirstTest} />
    <Route path='/game' component={Game} />
    <Route path='/todoListsPage' component={TodoListsPage} /> */}
  </Switch>
)

export default RouterMapThird
