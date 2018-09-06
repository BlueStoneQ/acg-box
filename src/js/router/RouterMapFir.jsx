/**
 * 一级路由
 * 1- component 占据整个view-port
 * 2- 默认的路由就是根路由/ -- 对接navBar + con + tabBar
 * 3- 其他一些需要全页展示的页面也放在这里
 * 4- 例如文章页 -- 但这个最后最好采用服务端（就直接后台渲染，不用中间层了）渲染、
 * 5- 路由嵌套：暂时就不花哨了，json的map映射记录+自动生成，或者其他的，放在迭代中升级，这里用最清晰 朴素的方法
 * 6- route（在dom文档中的位置）确定的是component要渲染的区域
 */
import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
/**
 * 引入子路由
 */
import RouterMapSec from './RouterMapSec'

const RouterMapA = (props) => (
  <Router>
    <Switch>
      <Route path='/' component={RouterMapSec} />
      <Route path='/article' render={() => (<div>全屏页，文章页，返回键</div>)} />
    </Switch>
  </Router>
)

export default RouterMapA
