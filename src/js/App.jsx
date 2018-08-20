import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import RouterMapFir from './router/RouterMapFir'
import '../style/less/comStyle/common.less'

class App extends Component {
  render () {
    return (
      <div>
        <RouterMapFir />
      </div>
    )
  }
}

// react-hot-loader
export default hot(module)(App)
