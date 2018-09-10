/**
 * 对应NavBar中的“部落”
 * 1- 这里目前作为技术实验场地
 * 2- 后期--用来作为数据可视化组件的展示/应用场地 -- 类似于实验室
 * 3- 甚至一些聊天室啊什么的实验性的功能 以卡片式/九宫格式放在这里
 */
import React, { Component } from 'react'
import { addTouchEvent } from '../../utils/onSwipe'
import '../../../style/less/pageStyle/tribe/tribe.less'

class Tribe extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     count: 0
  //   }
  // }
  /**
   * 遍历打印一个对象--Json解析不了的
   * @param {obj} obj
   */
  printObj (obj) {
    for (let i in obj) {
      console.log(i + ' : ' + obj[i])
    }
  }
  onTouchStart = (e) => {
    console.log('-------------------------------------------------------------------------------------')
    // console.log('---------onTouchStart---e:\n' + this.printObj(e))
    console.log('---------onTouchStart---e.touches:\n' + this.printObj(e.touches[0]))
    // console.log('---------onTouchStart---e.touches:\n' + JSON.stringify(e.touches[0].clintX))
    // console.log('---------onTouchStart---e.changedTouchs:\n' + JSON.stringify(e.changedTouchs))
    console.log('-------------------------------------------------------------------------------------')
  }
  onTouchMove = (e) => {
    console.log('-------------------------------------------------------------------------------------')
    // console.log('---------onTouchMove---e:\n' + this.printObj(e))
    // console.log('---------onTouchMove---e.touches:\n' + this.printObj(e.touches[0]))
    // console.log('---------onTouchMove---e.touches:\n' + JSON.stringify(e.touches[0]))
    // console.log('---------onTouchMove---e.changedTouchs:\n' + JSON.stringify(e.changedTouchs))
    console.log('-------------------------------------------------------------------------------------')
  }
  onTouchEnd = (e) => {
    console.log('-------------------------------------------------------------------------------------')
    // console.log('---------onTouchMove---e:\n' + this.printObj(e))
    console.log('---------onTouchEnd---e.changedTouches:\n' + this.printObj(e.changedTouches[0]))
    // console.log('---------onTouchMove---e.touches:\n' + JSON.stringify(e.touches[0]))
    // console.log('---------onTouchMove---e.changedTouchs:\n' + JSON.stringify(e.changedTouchs))
    console.log('-------------------------------------------------------------------------------------')
  }
  onTouchCancel = (e) => {
    console.log('-------------------------------------------------------------------------------------')
    // console.log('---------onTouchMove---e:\n' + this.printObj(e))
    // console.log('---------onTouchCancel---e.changedTouches:\n' + this.printObj(e.changedTouches[0]))
    // console.log('---------onTouchMove---e.touches:\n' + JSON.stringify(e.touches[0]))
    // console.log('---------onTouchMove---e.changedTouchs:\n' + JSON.stringify(e.changedTouchs))
    console.log('-------------------------------------------------------------------------------------')
  }
  /**
   * 注意React事件中this的获取 -- 这里采用stage3的写法 -- 因为这是未来
   * https://segmentfault.com/a/1190000011877137#articleHeader0
   */
  // onClick = (e) => {
  //   console.log('this: ' + this.state.count)
  // }
  componentDidMount () {
    addTouchEvent(this, this.refs.touch, () => { console.log('开始') })
    // this.refs.touch.touchStart = this.onTouchStart
    // console.log('ref: ' + this.printObj(this.refs.touch))
    // this.refs.touch.ontouchstart = this.onTouchStart
  }
  render () {
    return (
      <div
        ref='touch'
        className='tribe'
        // onTouchStart={this.onTouchStart}
        // onTouchMove={this.onTouchMove}
        // onTouchEnd={this.onTouchEnd}
        // onTouchCancel={this.onTouchCancel}
        // onClick={this.onClick}
      />
    )
  }
}

export default Tribe
