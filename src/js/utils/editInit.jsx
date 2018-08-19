/**
 * 问题背景：
 * 因为遇到了在手机浏览器（chrome/uc）中页面元素都默认可以点击
 * 点击总会调起虚拟键盘 并且可编辑
 * 1- 开始在元素上直接加属性contentEditable='false',但是React会发出警告
 * 2- 严重怀疑是React默认给每个元素都加了contentEditable='true'，而且还不让开发者改
 * 3- 不得已采用脚本的方式 给所有元素加上contentEditable='false'
 * 4- 一些场景需要元素可编辑（例如富文本），所以，这里给所有需要编辑的元素（class='edit'）加上contentEditable='true'
 * 5- input框不受该元素影响
 * 6- 一定有更好的方案，到时候该方法就会移除，轻耦合
 */
const editInit = () => {
  unEdit()
  edit()
}

// 所有元素不可编辑
const unEdit = () => {
  /**
     * 初始化部分元素
     * -- 虽然React倡导不要直接对dom元素进行操作
     * -- 可这里实自是无奈之举 直接添加contentEditable会发React警告
     * -- 只能以脚本的形式对所有元素进行初始化了, 希望后面可以找出更好的解决方案
    */
  let i
  let tags = document.getElementsByTagName('*')
  for (i = 0; i < tags.length; i++) {
    // 所有元素禁用编辑 -- 某些浏览器下所有元素均会是编辑状态 点击会调起虚拟键盘 也许是React默认添加的或者
    tags[i].setAttribute('contenteditable', 'false')
    // 关于某些需要可编辑的元素 例如富文本 则可以在该组件使用脚本进行添加contenteditable='true'
    // input 默认不受影响 仍可编辑
  }
}

// 所有class='edit'的元素可编辑
const edit = () => {
  let j
  let editTags = document.getElementsByClassName('edit')
  for (j = 0; j < editTags.length; j++) {
    editTags[j].setAttribute('contenteditable', 'true')
  }
}

export default editInit
