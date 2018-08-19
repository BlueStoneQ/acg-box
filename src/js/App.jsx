import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import NavList from './router/NavList'
import { editInit } from './utils'
import '../style/less/comStyle/common.less'

class App extends Component {
  componentDidMount () {
    editInit()
  }
  render () {
    return (
      <div>
        <NavList />
      </div>
    )
  }
}

// react-hot-loader
export default hot(module)(App)
