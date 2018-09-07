/**
 * 对应NavBar中的部落
 * 1- 这里目前作为技术实验场地
 * 2- 后期--用来作为数据可视化组件的展示/应用场地 -- 类似于实验室
 * 3- 甚至一些聊天室啊什么的实验性的功能 以卡片式/九宫格式放在这里
 */
import React, { Component } from 'react'
import '../../../style/less/pageStyle/tribe/tribe.less'

class Tribe extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  /**
   * 注意React事件中this的获取 -- 这里采用stage3的写法 -- 因为这是未来
   * https://segmentfault.com/a/1190000011877137#articleHeader0
   */
  onClick = (e) => {
    console.log('this: ' + this.state.count)
  }
  render () {
    return (
      <div
        className='tribe'
        onClick={this.onClick}
      />
    )
  }
}

export default Tribe
