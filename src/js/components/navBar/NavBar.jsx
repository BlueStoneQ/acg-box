/**
 * 导航菜单
 * props：{
 *  1- type:
 *      {
 *       '' : 什么都不传的话 就不设置fix定位了 由父组件的位置决定吧
 *       navBar: {string} 固定在viewPort底部的,
 *       tabBar: {string} 固定在viewPort顶部（后面会加入随着手势上划而隐藏，下拉而出现）
 *     }
 *  2- navList: [{name: 'link标签名称'， to: 'url'}, ...] 以数组的形式提供给Link整条Bar的Item数据
 * }
 * 3- 尽量减少配置 提供成熟的默认配置方案
 */
import React from 'react'
import PropTypes from 'prop-types'
import NavItem from './NavItem'
import '../../../style/less/componentStyle/navBar/navBar.less'

class NavList extends React.Component {
  /**
   *
   * @param {string} navType 根据type来决定nav的样式
   */
  getNavClassByType (navType) {
    let type = navType || ''
    let result
    switch (type) {
      case 'tabBar':
        result = ' ' + 'nav-top'
        break
      case 'navBar':
        result = ' ' + 'nav-bottom'
        break
      default:
        result = ''
    }
    return result
  }
  /**
   * 遍历渲染出NavBar -- 后面会抽象出去作为组件
   * @param {arr} navList  [{name: 'link标签名称'， to: 'url'}, ...]
   */
  getNavBarRender (navList) {
    return navList.map((v, i) => (
      <NavItem
        key={i}
        to={v.to}
        name={v.name}
      />
    ))
  }
  render () {
    return (
      <nav
        className={
          'nav' +
          this.getNavClassByType(this.props.type)}
      >
        { this.getNavBarRender(this.props.navList) }
      </nav>
    )
  }
}

NavList.propTypes = {
  type: PropTypes.string,
  navList: PropTypes.array.isRequired
}

export default NavList
