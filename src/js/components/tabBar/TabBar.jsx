/**
 * 导航菜单
 * props：{
 *  1- navList: [{name: 'link标签名称'， to: 'url'}, ...] 以数组的形式提供给Link整条Bar的Item数据
 * }
 * 3- 尽量减少配置 提供成熟的默认配置方案提供点击亮起的样式
 * 4- 设置默认的Nav --
 * 5- 实现页面下滑 -- tabBar向下移动一定的距离 向上
 * -- 这里我们需要在组件内监听onScroll事件 + 并且要配合一定的过渡动画 --- css3中的transition
 * -- 前提是type=tabBar
 * -- 越来越多的趋势指向：NavBar和TabBar分开：嗯 组件划分的粒度很重要 分吧
 */
import React from 'react'
import PropTypes from 'prop-types'
import NavItem from './TabItem'
import '../../../style/less/componentStyle/tabBar/tabBar.less'

class TabBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hidden: false
    }
  }
  /**
   * 遍历渲染出NavBar -- 后面会抽象出去作为组件
   * @param {arr} tabLIst  [{name: 'link标签名称'， to: 'url'}, ...]
   */
  getNavBarRender (tabList) {
    return tabList.map((v, i) => (
      <NavItem
        key={i}
        to={v.to}
        name={v.name}
        icon={v.icon || null}
      />
    ))
  }
  render () {
    return (
      <nav
        className='tab tab-top'
        style={{
          display: this.state.hidden ? 'none' : 'flex'
        }}
      >
        { this.getNavBarRender(this.props.tabList) }
      </nav>
    )
  }
}

TabBar.propTypes = {
  tabList: PropTypes.array.isRequired
}

export default TabBar
