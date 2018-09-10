/**
 * 实现简易的移动端滑动事件
 * 1- 目前需求只需要实现左右滑动即可
 * 2- 左滑动： swipe2L()  右滑动：swipe2R(refs，func )  // 这里目前直接传refs 不理想的话 传this+refs的字符串形式--func是回调
 * 3- 左右滑动的核心实现抽象出来 减少重复逻辑 -- 既swipe就是对外暴露一层二次封装
 * 4- 在这个事件的基础上 -- 想实现一些左右滑动的组件 例如首页的左右滑动图
 * 5- 最基础的是 利用传进来的refs给虚拟dom绑定onTouchStart onTouchMove onTouchEnd三个基础事件
 * React中的事件： https://react.docschina.org/docs/events.html
 * 6- 打印了refs对象才知道其事件是这样写的：ontouchstart ontouchend这样的 不是驼峰式的
 */

/**
* 几个公共变量 -- 后面用一个对象封装这几个东西
*/
var startX = 0
var startY = 0
/**
 * 给传入的refs绑定几个touch事件
 */
const addTouchEvent = (thiz, ref, func) => {
  // refs.touchStart = handleTouchEvent(func, e)
  ref.ontouchstart = (e) => handleTouchEvent(func, thiz, e)
  ref.ontouchend = (e) => handleTouchEvent(func, thiz, e)
}

const handleTouchEvent = (func, thiz, e) => {
  switch (e.type) {
    case 'touchstart':
      console.log('-------------------------------------------------------------------------------------')
      console.log('---------onTouchStart---e.touches:\n' + thiz.printObj(e.touches[0]))
      startX = e.touches[0].screenX
      startY = e.touches[0].screenY
      console.log('-------------------------------------------------------------------------------------')
      break
    case 'touchend':
      console.log('***************************************************************************************')
      // console.log('---------onTouchMove---e:\n' + this.printObj(e))
      console.log('---------onTouchEnd---e.changedTouches:\n' + thiz.printObj(e.changedTouches[0]))
      console.log('---------onTouchEnd---startX:\n' + startX)
      console.log('---------onTouchEnd---startY:\n' + startY)
      let spanX = e.changedTouches[0].screenX - startX
      let spanY = e.changedTouches[0].screenY - startY
      swipeHandler(spanX, spanY)
      // console.log('---------onTouchMove---e.touches:\n' + JSON.stringify(e.touches[0]))
      // console.log('---------onTouchMove---e.changedTouchs:\n' + JSON.stringify(e.changedTouchs))
      console.log('***************************************************************************************')
      break
    default:
      // 其他
  }
}

/**
 * 判断滑动是：左右 （左 和 右）-- 上下 （上 和 下）并执行不同的回调函数
 * @param {num} spanX x轴的滑动距离
 * @param {num} spanY y轴的滑动距离
 */
const swipeHandler = (spanX, spanY) => {
  // 暂时就这样判断吧 暂时不加入角度的计算和判断了
  if (Math.abs(spanX) > Math.abs(spanY)) {
    console.log('x轴滑动')
    // X轴的左右滑动
    if (spanX > 30) {
      // 这里判定滑动生效的阈值为30  这个值可以用一个公共变量统一管理--也可以由入参进行定制
      console.log('向右滑动')
    } else if (spanX < -30) {
      console.log('向左滑动')
    }
  } else {
    console.log('y轴滑动')
    // y轴的上下滑动轴
    if (spanY > 30) {
      // Y轴向上滑动
      console.log('向下滑动')
    } else if (spanY < -30) {
      console.log('向上滑动')
    }
  }
}

export { addTouchEvent }
