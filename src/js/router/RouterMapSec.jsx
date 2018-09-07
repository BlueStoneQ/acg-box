/**
 * 二级路由：
 * 1- 管理navBar
 * 2- 路由区域为：navBar往上的viewPort
 */
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import RouterMapThird from './RouterMapThird'
import { NavBar } from '../components/navBar'
import Icon from '../components/Icon'
import '../../style/less/routerStyle/navList.less'

/**
 * 引入组件
 */
import { TodoListsPage } from '../page/mobxTodo'

// 父级url
const baseUrl = ''

// navBar数据-路由信息
const navList = [
  { name: '首页', to: '/routerMapThird', icon: <Icon type='icon-home' /> },
  { name: '频道', to: '/game', icon: <Icon type='icon-file-text' /> },
  { name: '部落', to: '/todoListsPage', icon: <Icon type='icon-users' /> },
  { name: '我的', to: '/fistTest', icon: <Icon type='icon-user' /> }
]

class RouterMapSec extends React.Component {
  render () {
    return (
      <div className='nav-wrap'>
        <div className='nav-a'>
          <NavBar
            type='navBar'
            navList={navList}
          />
        </div>
        <div className='con'>
          {/* 内容区域 */}
          <Switch>
            <Redirect exact from='/' to={baseUrl + '/routerMapThird'} />
            <Redirect exact from={baseUrl} to={baseUrl + '/routerMapThird'} />
            <Route path={baseUrl + '/routerMapThird'} component={RouterMapThird} />
            <Route path={baseUrl + '/game'} component={TodoListsPage} />
            <Route path={baseUrl + '/todoListsPage'} component={TodoListsPage} />
            <Route path={baseUrl + '/routerMapThird'} component={RouterMapThird} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default RouterMapSec
