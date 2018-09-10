/**
 * 对应NavBar中的“部落”
 * 1- 这里目前作为技术实验场地
 * 2- 后期--用来作为数据可视化组件的展示/应用场地 -- 类似于实验室
 * 3- 甚至一些聊天室啊什么的实验性的功能 以卡片式/九宫格式放在这里
 */
import React, { Component } from 'react'
import { addSwipeEvent } from '../../utils/onSwipe'
import '../../../style/less/pageStyle/tribe/tribe.less'

class Tribe extends Component {
  componentDidMount () {
    addSwipeEvent(this.refs.touch, () => { console.log('开始') })
  }
  render () {
    return (
      <div
        ref='touch'
        className='tribe'
      />
    )
  }
}

export default Tribe
