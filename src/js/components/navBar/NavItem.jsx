/**
 * NavBar的每一个小条目/选项
 * props:{
 *  name: 条目的名称
 *  to: 路由的url
 * }
 * 渐进式：后续开发需要扩充的props可以逐渐增加进来
 * 例如：Icon, activeClassName等，都可以暴露出去以满足父组件个性化的需求
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
    <span>{props.name}</span>
  </Link>
)

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default NavItem
