/**
 * NavBar的每一个小条目/选项
 * props:{
 *  name: 条目的名称
 *  to: 路由的url
 * }
 * 渐进式：后续开发需要扩充的props可以逐渐增加进来
 * 例如：Icon, activeClassName等，都可以暴露出去以满足父组件个性化的需求尽量
 * props.icon 这个props可以传入一个Icon组件
 * -- NacItem中留出这样一个Icon的位置 在props.icon存在的时候出现 平时隐藏 位置尺寸样式由Item提供的容器icon-box决定
 * [bug]组件之间尽量减少调用 实现低耦合 由父组件进行传入
 * -- 这里在移动端有时会报一个错 但是不影响程序运行 就是红色的报错很不爽 -- pc端完全不报错
 * ---- uncaught TypeError: cannot read propty 'insertAjacentHTML' of null
 * --- 原因可能是在RouterMapSec中 使用了数组/对象/props 传递了组件
 * --- 如果后面还有这个问题 那么 解决办法就是牺牲轻耦合性 父组件只传Icon的type Icon组件在NavBar和NavItem组件内部引入
 */
import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../../../style/less/componentStyle/navBar/navItem.less'

const NavItem = (props) => (
  <Link
    strict
    className='nav-item'
    activeClassName='nav-selected'
    to={props.to}
  >
    <div>
      { props.icon && <div className='icon-box'>{props.icon}</div> }
      <span>{props.name}</span>
    </div>
  </Link>
)

NavItem.propTypes = {
  icon: PropTypes.any, // NavBar上的字体图标
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default NavItem
