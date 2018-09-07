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
 * 5- 实现页面下滑 -- tabBar向下移动一定的距离 向上
 * -- 这里我们需要在组件内监听onScroll事件 + 并且要配合一定的过渡动画 --- css3中的transition
 * -- 前提是type=tabBar
 * -- 越来越多的趋势指向：NavBar和TabBar分开：嗯 组件划分的粒度很重要 分吧 -- 2018/9/7
 */
import React from 'react'
import PropTypes from 'prop-types'
import NavItem from './NavItem'
import '../../../style/less/componentStyle/navBar/navBar.less'

class NavBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hidden: false
    }
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
        icon={v.icon || null}
      />
    ))
  }
  /**
   * 屏幕变化时的响应事件
   * @param {obj} thiz 该函数执行的上下文对象，也就是NavBar组件本身
   * @param {num} oHeight 原来的屏幕尺寸（文档尺寸）
   */
  hideNavBar (thiz, oHeight) {
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
  /**
   * 当type为‘navBar’时，并且屏幕可用尺寸变化超过1/3时 则隐藏底部的导航栏
   * 1- 针对底部navBar会被虚拟键盘顶起来
   * 2- 对于绑定的事件 - 在componentWillUnmount钩子中需要解绑
   */
  init () {
    const thiz = this
    // 当type是底部的navBar时
    if (this.props.type === 'navBar') {
      // 格式化为小写
      let ua = navigator.userAgent.toLowerCase()
      // 以防万一 这里需要判断是否在移动端 在移动端才绑定这个属性
      if (/mobile|android|iphone|phone|ipad|/i.test(ua)) {
        /** 最初的屏幕可用尺寸 -- 测试 */
        const oHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        // 对于在React中的事件增加我们不能用addEventListener而应该用最初的那些事件绑定方式进行绑定
        window.onresize = () => this.hideNavBar(thiz, oHeight)
      }
    }
  }
  componentDidMount () {
    this.init()
  }
  componentWillUnmount () {
    // 解绑呼出虚拟键盘后的事件 -- 因为移动端大都是高阶浏览器 这里就不用兼容ie567的写法了 -- 貌似没有执行啊
    window.removeEventListener('onresize', this.hideNavBar)
  }
  render () {
    return (
      <nav
        className='nav nav-bottom'
        style={{
          display: this.state.hidden ? 'none' : 'flex'
        }}
      >
        { this.getNavBarRender(this.props.navList) }
      </nav>
    )
  }
}

NavBar.propTypes = {
  type: PropTypes.string,
  navList: PropTypes.array.isRequired
}

export default NavBar
