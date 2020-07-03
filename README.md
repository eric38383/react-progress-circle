# Simple React Progress Circle

[![npm package][npm-badge]][npm]

Simple React Progres Circle is a circlular progress bar made into a reusable react component with React Hooks.

[npm-badge]: https://img.shields.io/npm/v/react-simple-progress-circle?style=plastic
[npm]: https://www.npmjs.org/package/react-simple-progress-circle


# Start
```
npm i react-simple-progress-circle
```

# Example

```jsx
import React from 'react';
import ProgressCircle from 'react-simple-progress-circle';

  <ProgressCircle 
        size={50} //Height and Width of the circle
        clockwise={true} // Determines is the progress should go clockwise or counter clockwise
        color={'green'} //Color of the circle stroke
        progress={20} //Number between 0 and 100
        start={0} // Where the progress circle will start. 0 will start at 90deg clockwise from the top
        strokeWidth={20} //width of the circle strokes. Stroke width must be at least half of size
        opacity={0.4} //a number between 0 and 1. The background opacity of the color. 
        time={0.4} //in seconds, for progress transition
        timingFunction={'linear'} //linear, ease in, ease-out, east-in-out, step-start, step-end
    />
```




