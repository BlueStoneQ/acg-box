import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import RouterMapThird from './RouterMapThird'
import { NavBar } from '../components/navBar'
import '../../style/less/routerStyle/navList.less'

/**
 * 引入组件
 */
import { FirstTest } from '../page/webpackTest'
import { Game } from '../page/reactGame'
import { TodoListsPage } from '../page/mobxTodo'

// 父级url
const baseUrl = '/index'

const navList = [
  { name: 'FirstTest', to: '/index/fistTest' },
  { name: 'Game', to: '/index/game' },
  { name: 'TodoListsPage', to: '/index/todoListsPage' },
  { name: 'RouterMapC', to: '/index/routerMapThird' }
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
            <Redirect exact from='/' to={baseUrl + '/fistTest'} />
            <Redirect exact from={baseUrl} to={baseUrl + '/fistTest'} />
            <Route path={baseUrl + '/fistTest'} component={FirstTest} />
            <Route path={baseUrl + '/game'} component={Game} />
            <Route path={baseUrl + '/todoListsPage'} component={TodoListsPage} />
            <Route path={baseUrl + '/routerMapThird'} component={RouterMapThird} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default RouterMapSec
