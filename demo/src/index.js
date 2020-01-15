import React from 'react'
import { render } from 'react-dom'
import ProgressCircle from '../../src'

const Demo = () => {
    return ( 
      <div>
        <ProgressCircle 
          size={50} //Height and Width of the circle
          color={'green'} //Color of the circle stroke
          progress={20} //Number between 0 and 100
          strokeWidth={20} //width of the circle strokes. Stroke width must be at least half of size
          opacity={0.4} //a number between 0 and 1. 
          time={0.4} //in seconds, for progress transition
          timingFunction={'linear'} //linear, ease in, ease-out, east-in-out, step-start, step-end
        />
      </div>
  )
}

render(<Demo/>, document.querySelector('#demo'))