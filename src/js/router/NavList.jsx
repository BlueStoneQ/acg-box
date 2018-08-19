/**
 * 用来做页面导航和布局的组件
 * 1- 一级路由：NavBar 位于viewPort的底部 -- 对应的view在整个NavBar之上
 * 2- 二级路由：TabBar 位于viewPort的顶部 -- 对应的view在NavBar和TabBar之间
 * 3- 顶级路由：view是整个viewPort
 */
import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import RouterMap from './RouterMap'
import { NavBar } from '../components/navBar'
import '../../style/less/navList.less'

const navList = [
  { name: 'FirstTest', to: '/firstTest' },
  { name: 'Game', to: '/game' },
  { name: 'TodoListsPage', to: '/todoListsPage' }
]

class NavList extends React.Component {
  render () {
    return (
      <Router>
        <div className='nav-wrap'>
          <div className='nav-a'>
            <NavBar
              type='navBar'
              navList={navList}
            />
          </div>
          <div className='con'>
            {/* 内容区域 */}
            <RouterMap />
          </div>
        </div>
      </Router>
    )
  }
}

export default NavList
