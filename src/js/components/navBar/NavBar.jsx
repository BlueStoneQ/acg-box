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
 * 3- 尽量减少配置 提供成熟的默认配置方案提供点击亮起的样式
 * 4- 设置默认的Nav --
 */
import React from 'react'
import PropTypes from 'prop-types'
import NavItem from './NavItem'
import '../../../style/less/componentStyle/navBar/navBar.less'

/** 最初的屏幕可用尺寸 -- 测试 */
const oHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

class NavList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hidden: false
    }
  }
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
  /**
   * 当type为‘navBar’时，并且屏幕可用尺寸变化超过1/3时 则隐藏底部的导航栏
   * 1- 针对底部navBar会被虚拟键盘顶起来
   */
  init () {
    const thiz = this
    // 当type是底部的navBar时
    if (this.props.type === 'navBar') {
      // 格式化为小写
      let ua = navigator.userAgent.toLowerCase()
      // 以防万一 这里需要判断是否在移动端 在移动端才绑定这个属性
      if (/mobile|android|iphone|phone|ipad|/i.test(ua)) {
        // 记录原来的尺寸
        // let oHeight = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
        window.onresize = function () {
          const nHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
          // 当屏幕的尺寸（宽/高）变化超过1/3 -- 现在只用高 -- 这里的比较还是需要采用其他值/或者公共变量来记录/对象属性来记录原来的高度
          if ((oHeight - nHeight) > (oHeight / 3)) {
            // 当虚拟键盘弹起时 导航栏隐藏
            thiz.setState({
              hidden: true
            })
          } else {
            // 恢复导航栏的显示
            thiz.setState({
              hidden: false
            })
          }
        }
      }
    }
  }
  componentDidMount () {
    this.init()
  }
  render () {
    return (
      <nav
        className={
          'nav' +
          this.getNavClassByType(this.props.type)}
        style={{
          display: this.state.hidden ? 'none' : 'flex'
        }}
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
