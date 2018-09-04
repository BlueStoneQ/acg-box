import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import Vconsole from 'vconsole'
import RouterMapFir from './router/RouterMapFir'
import '../style/less/comStyle/common.less'

const vConsole = new Vconsole()
vConsole.setOption({maxLogNumber: 5000})

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
