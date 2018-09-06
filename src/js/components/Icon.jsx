/**
 * 图标组件
 * 1- 把字体图标资源用<i/>封装为一个React组件供程序内部使用
 * 2- props.type  其实映射的就是字体图标对应的class名 不做转化 就是直接映射
 */
import React from 'react'
import PropTypes from 'prop-types'
import '../../style/less/componentStyle/icon.less'

const Icon = (props) => (
  <i
    className={'icon' + props.type ? ' ' + props.type : ''}
  />
)

Icon.propTypes = {
  type: PropTypes.string.isRequired
}

export default Icon
