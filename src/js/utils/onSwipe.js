/**
 * 实现简易的移动端滑动事件
 * 1- 目前需求只需要实现左右滑动即可
 * 2- 左滑动： swipe2L()  右滑动：swipe2R(refs，func )  // 这里目前直接传refs 不理想的话 传this+refs的字符串形式--func是回调
 * 3- 左右滑动的核心实现抽象出来 减少重复逻辑 -- 既swipe就是对外暴露一层二次封装
 * 4- 在这个事件的基础上 -- 想实现一些左右滑动的组件 例如首页的左右滑动图
 * 5- 最基础的是 利用传进来的refs给虚拟dom绑定onTouchStart onTouchMove onTouchEnd三个基础事件
 * React中的事件： https://react.docschina.org/docs/events.html
 * 6- 打印了refs对象才知道其事件是这样写的：ontouchstart ontouchend这样的 不是驼峰式的
 * 7- 另外 注意要阻止/屏蔽一些默认响应 -- 例如有的浏览器左右滑屏会切换你的路由
 * 8- 【博客】React的手势事件封装实现 -- segementFault博客记录
 */

/**
* 几个公共变量 -- 后面用一个对象封装这几个东西
*/
var startX = 0
var startY = 0

/**
 * 适配器：对外封装的swipe事件--默认绑定touchStart和touchEnd事件 -- 避免使用者每次都得传入事件麻烦
 */
const addSwipeEvent = (ref, funcObj) => {
  console.log('1- funcObj: ' + JSON.stringify(funcObj))
  addTouchEvent(ref, ['ontouchstart', 'ontouchend'], funcObj)
}

/**
 * 给传入的refs绑定几个touch事件
 * 1- 这个函数可以再封装一层 一次性封装touchStart和touchEnd事件 -- 作为滑动手势事件
 */
const addTouchEvent = (ref, touchEvents, funcObj) => {
  if (touchEvents instanceof Array) {
    // 如果是个数组就依次绑上数组中的事件
    for (let v of touchEvents) {
      ref[v] = (e) => handleTouchEvent(e, funcObj)
    }
  } else {
    // 如果只绑定一个事件类型就只绑定一个即可
    ref[touchEvents] = (e) => handleTouchEvent(e, funcObj)
  }
}

const handleTouchEvent = (e, funcObj) => {
  switch (e.type) {
    case 'touchstart':
      startX = e.touches[0].screenX
      startY = e.touches[0].screenY
      break
    case 'touchend':
      let spanX = e.changedTouches[0].screenX - startX
      let spanY = e.changedTouches[0].screenY - startY
      swipeHandler(spanX, spanY, funcObj)
      break
    default:
      // 其他
  }
  // 阻止默认事件响应 -- 例如有些浏览器添加的滑动时路由切换  -- 这里必须在自定义事件之后执行，否则拿不到e
  // 当然在处理函数前可以执行 那个适合e的值都已经获取并计算出有效信息了
  e.preventDefault()
}

/**
 * 判断滑动是：左右 （左 和 右）-- 上下 （上 和 下）并执行不同的回调函数
 * @param {num} spanX x轴的滑动距离
 * @param {num} spanY y轴的滑动距离
 * @param {obj} funcObj 成员是函数的对象 { swipe2L: // 传入向左滑动回调函数,  swipe2R: // 传入向右滑动回调函数 }
 */
const swipeHandler = (spanX, spanY, funcObj) => {
  // 暂时就这样判断吧 暂时不加入角度的计算和判断了
  if (Math.abs(spanX) > Math.abs(spanY)) {
    console.log('x轴滑动')
    // X轴的左右滑动
    if (spanX > 30) {
      console.log('funcObj： ' + JSON.stringify(funcObj))
      // 这里判定滑动生效的阈值为30  这个值可以用一个公共变量统一管理--也可以由入参进行定制
      if (funcObj && funcObj.swipe2R) {
      // 执行向右滑动的回调
        funcObj.swipe2R()
      }
      console.log('向右滑动')
    } else if (spanX < -30) {
      if (funcObj && funcObj.swipe2L) {
        funcObj.swipe2L()
      }
      console.log('向左滑动')
    }
  } else {
    console.log('y轴滑动')
    // y轴的上下滑动轴
    if (spanY > 30) {
      // Y轴向上滑动
      if (funcObj && funcObj.swipe2T) {
        funcObj.swipe2T()
      }
      console.log('向下滑动')
    } else if (spanY < -30) {
      if (funcObj && funcObj.swipe2B) {
        funcObj.swipe2B()
      }
      console.log('向上滑动')
    }
  }
}

export { addSwipeEvent, addTouchEvent }
