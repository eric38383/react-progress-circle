import React, { Component } from 'react'
import { render } from 'react-dom'
import ProgressCircle from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <ProgressCircle 
        size={50} 
        color={'green'} 
        progress={20} 
        strokeWidth={20} 
      />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
