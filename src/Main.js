import React, { Component } from 'react'

import Sidebar from './Sidebar'
import Chat from './Chat'

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Sidebar />
        <Chat />
      </div>
    )
  }
}

export default Main
